<template>
  <div class="publications-page py-12 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {{ $t('publications.title') }}
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          {{ $t('publications.subtitle') }}
        </p>
      </div>

      <!-- Filters -->
      <PublicationFilter
        v-model:search="searchQuery"
        v-model:year="selectedYear"
        v-model:type="selectedType"
        v-model:tag="selectedTag"
        :years="availableYears"
        :types="availableTypes"
        :tags="availableTags"
      />

      <!-- Publications List -->
      <div class="mt-8">
        <div
          v-if="filteredPublications.length === 0"
          class="text-center py-16 bg-white rounded-lg shadow-sm"
        >
          <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <p class="text-gray-500 text-lg">{{ $t('publications.noResults') || '未找到匹配的论文' }}</p>
        </div>

        <div class="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          <div
            v-for="publication in filteredPublications"
            :key="publication.id"
            class="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200"
          >
            <PublicationItem :publication="publication" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PublicationFilter from '@/components/publications/PublicationFilter.vue'
import PublicationItem from '@/components/publications/PublicationItem.vue'
import { publicationsData } from '@/data/publications.js'

const searchQuery = ref('')
const selectedYear = ref('')
const selectedType = ref('')
const selectedTag = ref('')

const availableYears = computed(() => {
  const years = [...new Set(publicationsData.map(p => p.year))].sort().reverse()
  return years
})

const availableTypes = computed(() => {
  return [...new Set(publicationsData.map(p => p.type))]
})

const availableTags = computed(() => {
  const tags = publicationsData.flatMap(p => p.tags || [])
  return [...new Set(tags)]
})

const filteredPublications = computed(() => {
  return publicationsData.filter(pub => {
    const matchesSearch = !searchQuery.value ||
      pub.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      pub.authors.some(author => author.name.toLowerCase().includes(searchQuery.value.toLowerCase()))

    const matchesYear = !selectedYear.value || pub.year === selectedYear.value
    const matchesType = !selectedType.value || pub.type === selectedType.value
    const matchesTag = !selectedTag.value || (pub.tags && pub.tags.includes(selectedTag.value))

    return matchesSearch && matchesYear && matchesType && matchesTag
  }).sort((a, b) => b.year.localeCompare(a.year))
})
</script>
