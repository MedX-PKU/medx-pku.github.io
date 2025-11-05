<template>
  <div class="news">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ $t('news.title') }}
          </h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            {{ $t('news.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- News Content -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- News Filter -->
        <div class="mb-12 flex flex-wrap justify-between items-center gap-4">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in newsCategories"
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="[
                'px-4 py-2 rounded-full font-medium transition-colors duration-200',
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              ]"
            >
              {{ $t(category.label) }}
            </button>
          </div>

          <div class="flex items-center gap-4">
            <span class="text-gray-600">{{ $t('news.totalNews', { count: filteredNews.length }) }}</span>
          </div>
        </div>

        <!-- News Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link
            v-for="item in filteredNews"
            :key="item.id"
            :to="`/news/${item.id}`"
            class="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
          >
            <!-- News Image -->
            <div class="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                v-if="item.image"
                :src="item.image"
                :alt="item.title"
                class="w-full h-48 object-cover"
              >
              <div
                v-else
                class="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
              >
                <span class="text-white text-2xl font-bold">
                  {{ $t(item.category.label) }}
                </span>
              </div>
            </div>

            <!-- News Content -->
            <div class="p-6">
              <!-- Category and Date -->
              <div class="flex items-center justify-between mb-3">
                <span
                  :class="[
                    'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
                    getCategoryColor(item.category.id)
                  ]"
                >
                  {{ $t(item.category.label) }}
                </span>
                <time class="text-sm text-gray-500">
                  {{ formatDate(item.date) }}
                </time>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {{ $t(item.title) }}
              </h3>

              <!-- Summary -->
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ $t(item.summary) }}
              </p>

              <!-- Tags -->
              <div v-if="item.tags && item.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Read More Indicator -->
              <div class="flex items-center text-blue-600 group-hover:text-blue-800 font-medium">
                {{ $t('common.readMore') }}
                <ArrowRightIcon class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          </router-link>
        </div>

        <!-- Empty State -->
        <div v-if="filteredNews.length === 0" class="text-center py-12">
          <div class="text-gray-400 text-6xl mb-4">📰</div>
          <h3 class="text-xl font-medium text-gray-900 mb-2">
            {{ $t('news.noNews') }}
          </h3>
          <p class="text-gray-600">
            {{ $t('news.noNewsDescription') }}
          </p>
        </div>

        <!-- Load More Button -->
        <div v-if="hasMoreNews" class="text-center mt-12">
          <button
            @click="loadMoreNews"
            class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            {{ $t('news.loadMore') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { newsData } from '@/data/news.js'

// Reactive data
const selectedCategory = ref('all')
const displayedCount = ref(9)

// News categories
const newsCategories = [
  { id: 'all', label: 'news.categories.all' },
  { id: 'featured', label: 'news.categories.featured' },
  { id: 'research', label: 'news.categories.research' },
  { id: 'event', label: 'news.categories.event' },
  { id: 'other', label: 'news.categories.other' }
]

// Process news data to add categories
const processedNewsData = newsData.map((item) => ({
  ...item,
  category: item.featured
    ? { id: 'featured', label: 'news.categories.featured' }
    : item.title.includes('会议') || item.title.includes('访问') || item.title.includes('交流')
    ? { id: 'event', label: 'news.categories.event' }
    : item.title.includes('论文') || item.title.includes('NeurIPS') || item.title.includes('WWW')
    ? { id: 'research', label: 'news.categories.research' }
    : { id: 'other', label: 'news.categories.other' },
  summary: item.excerpt,
  tags: item.featured ? ['Featured'] : ['News'],
  image: null
}))

// Computed properties
const filteredNews = computed(() => {
  let filtered = selectedCategory.value === 'all'
    ? processedNewsData
    : processedNewsData.filter(item => item.category.id === selectedCategory.value)

  return filtered.slice(0, displayedCount.value)
})

const hasMoreNews = computed(() => {
  let allFiltered = selectedCategory.value === 'all'
    ? processedNewsData
    : processedNewsData.filter(item => item.category.id === selectedCategory.value)

  return allFiltered.length > displayedCount.value
})

// Methods
const getCategoryColor = (categoryId) => {
  const colors = {
    featured: 'bg-yellow-100 text-yellow-800',
    research: 'bg-green-100 text-green-800',
    event: 'bg-purple-100 text-purple-800',
    other: 'bg-gray-100 text-gray-800'
  }
  return colors[categoryId] || 'bg-gray-100 text-gray-800'
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const loadMoreNews = () => {
  displayedCount.value += 6
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>