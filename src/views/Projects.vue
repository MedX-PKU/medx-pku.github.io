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
            class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <!-- Project Header -->
            <div class="p-6 border-b border-gray-100">
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
            <div class="px-6 py-4 bg-gray-50 flex items-center justify-between">
              <div class="flex space-x-3">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  :title="$t('projects.github')"
                >
                  <ShareIcon class="w-5 h-5" />
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  :title="$t('projects.demo')"
                >
                  <GlobeAltIcon class="w-5 h-5" />
                </a>
                <a
                  v-if="project.documentation"
                  :href="project.documentation"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  :title="$t('projects.documentation')"
                >
                  <BookOpenIcon class="w-5 h-5" />
                </a>
              </div>

              <div v-if="project.status" class="flex items-center">
                <span
                  :class="[
                    'inline-flex items-center px-2 py-1 rounded text-xs font-medium',
                    project.status === 'active' ? 'bg-green-100 text-green-800' :
                    project.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  ]"
                >
                  {{ $t(`projects.status.${project.status}`) }}
                </span>
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
import { ref, computed } from 'vue'
import {
  CodeBracketIcon,
  GlobeAltIcon,
  BookOpenIcon,
  CpuChipIcon,
  ShareIcon
} from '@heroicons/vue/24/outline'

// Reactive data
const selectedCategory = ref('all')

// Projects data
const projectsData = [
  {
    id: 1,
    title: 'MedX Platform',
    description: '综合性医学AI研究平台，集成大语言模型、数据管理和可视化工具，为医学研究提供一站式解决方案。',
    category: 'tool',
    date: '2024-11-01',
    status: 'active',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/medx-pku/platform',
    demo: 'https://demo.medx-pku.com',
    documentation: 'https://docs.medx-pku.com'
  },
  {
    id: 2,
    title: 'MedAgentBoard',
    description: '医疗AI多智能体评测基准，用于系统性评估AI智能体在复杂医疗任务中的表现。',
    category: 'tool',
    date: '2024-10-15',
    status: 'active',
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'Docker'],
    github: 'https://github.com/medx-pku/medagentboard',
    documentation: 'https://github.com/medx-pku/medagentboard/blob/main/README.md'
  },
  {
    id: 3,
    title: 'ColaCare',
    description: '协作式医疗AI系统，模拟多学科会诊模式，提高AI在复杂疾病诊断中的准确性。',
    category: 'tool',
    date: '2024-09-20',
    status: 'active',
    technologies: ['Python', 'LangChain', 'OpenAI GPT', 'FastAPI'],
    github: 'https://github.com/medx-pku/colacare',
    demo: 'https://colacare.medx-pku.com'
  },
  {
    id: 4,
    title: 'medx-nlp',
    description: '医学自然语言处理Python包，提供中文医学文本处理、实体识别和关系抽取功能。',
    category: 'tool',
    date: '2024-08-10',
    status: 'active',
    technologies: ['Python', 'spaCy', 'transformers', 'pandas'],
    github: 'https://github.com/medx-pku/medx-nlp',
    documentation: 'https://medx-nlp.readthedocs.io'
  },
  {
    id: 5,
    title: 'ehr-analyzer',
    description: '电子病历数据分析工具包，支持医疗数据清洗、特征提取和预测模型训练。',
    category: 'tool',
    date: '2024-07-05',
    status: 'maintenance',
    technologies: ['Python', 'scikit-learn', 'pandas', 'numpy'],
    github: 'https://github.com/medx-pku/ehr-analyzer',
    documentation: 'https://ehr-analyzer.readthedocs.io'
  },
  {
    id: 6,
    title: 'medx-visualization',
    description: '医学数据可视化库，专为医疗数据设计的图表和可视化组件。',
    category: 'tool',
    date: '2024-06-15',
    status: 'active',
    technologies: ['JavaScript', 'D3.js', 'React', 'Vue.js'],
    github: 'https://github.com/medx-pku/medx-visualization',
    documentation: 'https://medx-visualization.readthedocs.io'
  },
  {
    id: 7,
    title: 'MedX Lab Website',
    description: '实验室官方网站，展示研究成果、团队信息和最新动态。',
    category: 'website',
    date: '2024-05-01',
    status: 'active',
    technologies: ['Vue.js', 'Tailwind CSS', 'Vite', 'Netlify'],
    github: 'https://github.com/medx-pku/website',
    demo: 'https://medx-pku.github.io'
  },
  {
    id: 8,
    title: 'Medical AI Benchmark Dashboard',
    description: '医疗AI评测结果可视化仪表板，实时显示各种模型的性能指标。',
    category: 'website',
    date: '2024-04-10',
    status: 'active',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
    github: 'https://github.com/medx-pku/benchmark-dashboard',
    demo: 'https://benchmark.medx-pku.com'
  },
  {
    id: 9,
    title: 'Clinical Decision Support System',
    description: '临床决策支持系统原型，为医生提供AI驱动的诊断建议。',
    category: 'tool',
    date: '2024-03-15',
    status: 'development',
    technologies: ['Python', 'TensorFlow', 'Flask', 'Docker'],
    github: 'https://github.com/medx-pku/cdss'
  }
]

// Project categories
const projectCategories = [
  { id: 'all', label: 'projects.categories.all', icon: CpuChipIcon },
  { id: 'tool', label: 'projects.categories.tool', icon: CodeBracketIcon },
  { id: 'website', label: 'projects.categories.website', icon: GlobeAltIcon }
]

// Computed properties
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projectsData
  }
  return projectsData.filter(project => project.category === selectedCategory.value)
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