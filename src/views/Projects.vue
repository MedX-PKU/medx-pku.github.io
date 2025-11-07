<template>
  <div class="projects">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ $t('projects.title') }}
          </h1>
          <p class="text-xl text-purple-100 max-w-3xl mx-auto">
            {{ $t('projects.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Content -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        <!-- Project Filter -->
        <div class="mb-12 flex flex-wrap justify-center gap-4">
          <button
            v-for="category in projectCategories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-colors duration-200',
              selectedCategory === category.id
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
            ]"
          >
            <component :is="category.icon" class="w-5 h-5 mr-2 inline-flex items-center" />
            <span class="inline-flex items-center">{{ $t(category.label) }}</span>
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col"
          >
            <!-- Project Header -->
            <div class="p-6 border-b border-gray-100 flex-grow">
              <div class="flex items-center justify-between mb-4">
                <span
                  :class="[
                    'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
                    getProjectColor(project.category)
                  ]"
                >
                  <component :is="getProjectIcon(project.category)" class="w-4 h-4 mr-1 inline-flex items-center" />
                  <span class="inline-flex items-center">{{ $t(getProjectCategoryLabel(project.category)) }}</span>
                </span>
                <span class="text-sm text-gray-500">
                  {{ formatDate(project.date) }}
                </span>
              </div>

              <!-- Project Title -->
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {{ project.title }}
              </h3>

              <!-- Project Description -->
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Project Actions -->
            <div class="px-6 py-4 bg-gray-50 flex items-center justify-between flex-shrink-0">
              <div class="flex space-x-3">
                <a
                  v-if="project.category === 'tool' && project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  title="GitHub"
                >
                  <CodeBracketSquareIcon class="w-5 h-5" />
                </a>
                <a
                  v-if="project.category === 'website' && project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  title="Website"
                >
                  <GlobeAltIcon class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <div class="text-gray-400 text-6xl mb-4">🚀</div>
          <h3 class="text-xl font-medium text-gray-900 mb-2">
            {{ $t('projects.noProjects') }}
          </h3>
          <p class="text-gray-600">
            {{ $t('projects.noProjectsDescription') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  CodeBracketIcon,
  GlobeAltIcon,
  BookOpenIcon,
  CpuChipIcon,
  ShareIcon,
  CodeBracketSquareIcon
} from '@heroicons/vue/24/outline'

// Reactive data
const selectedCategory = ref('all')
const projectsData = ref([])

// Project categories
const projectCategories = [
  { id: 'all', label: 'projects.categories.all', icon: CpuChipIcon },
  { id: 'tool', label: 'projects.categories.tool', icon: CodeBracketIcon },
  { id: 'website', label: 'projects.categories.website', icon: GlobeAltIcon }
]

// Load projects from JSON
const loadProjects = async () => {
  try {
    const response = await fetch('/data/projects.json')
    const data = await response.json()
    // Auto-assign IDs based on array index + 1
    projectsData.value = data.map((project, index) => ({
      ...project,
      id: index + 1
    }))
  } catch (error) {
    console.error('Error loading projects:', error)
  }
}

// Load projects on component mount
onMounted(() => {
  loadProjects()
})

// Computed properties
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projectsData.value
  }
  return projectsData.value.filter(project => project.category === selectedCategory.value)
})

// Methods
const getProjectColor = (category) => {
  const colors = {
    tool: 'bg-blue-100 text-blue-800',
    website: 'bg-purple-100 text-purple-800'
  }
  return colors[category] || 'bg-gray-100 text-gray-800'
}

const getProjectIcon = (category) => {
  const icons = {
    tool: CodeBracketIcon,
    website: GlobeAltIcon
  }
  return icons[category] || CpuChipIcon
}

const getProjectCategoryLabel = (category) => {
  const labels = {
    tool: 'projects.categories.tool',
    website: 'projects.categories.website'
  }
  return labels[category] || 'projects.categories.all'
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover .group-hover\:text-purple-600 {
  color: #7c3aed;
}
</style>