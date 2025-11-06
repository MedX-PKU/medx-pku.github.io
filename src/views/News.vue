<template>
  <div class="news">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
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
      <div class="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
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
              {{ $t(category.label) }} ({{ category.count }})
            </button>
          </div>

          <div class="flex items-center gap-4">
            <span class="text-gray-600">{{ $t('news.totalNews', { count: filteredNews.length }) }}</span>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p class="mt-4 text-gray-600">{{ $t('news.loading') || 'Loading news...' }}</p>
        </div>

        <!-- News Grid -->
        <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link
            v-for="item in filteredNews"
            :key="item.id"
            :to="`/news/${item.id}`"
            class="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
          >
            <!-- News Image/Thumbnail -->
            <div class="aspect-w-16 aspect-h-9 bg-gray-200 relative overflow-hidden">
              <img
                v-if="item.image"
                :src="item.image"
                :alt="item.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                @error="(e) => handleImageError(e, item)"
              >
              <div
                v-else
                class="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
              >
                <div class="text-center text-white">
                  <div class="text-lg font-bold uppercase tracking-wider">
                    {{ getCategoryShortName(item.category.id) }}
                  </div>
                  <div class="text-xs opacity-75 mt-1" v-if="item.readTime">
                    {{ item.readTime }} min read
                  </div>
                </div>
              </div>
              <!-- Featured Badge -->
              <div v-if="item.featured" class="absolute top-2 right-2">
                <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  Featured
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
                {{ item.title }}
              </h3>

              <!-- Summary -->
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ item.excerpt }}
              </p>

              <!-- Tags -->
              <div v-if="item.tags && item.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in item.tags.slice(0, 3)"
                  :key="tag"
                  class="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                >
                  {{ tag }}
                </span>
                <span v-if="item.tags.length > 3" class="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  +{{ item.tags.length - 3 }}
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
import { ref, computed, onMounted } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { loadAllNews, getNewsCategories } from '@/utils/newsLoader.js'

// Reactive data
const selectedCategory = ref('all')
const displayedCount = ref(9)
const newsData = ref([])
const newsCategories = ref([])
const loading = ref(true)

// Load news data
onMounted(async () => {
  try {
    newsData.value = await loadAllNews()
    newsCategories.value = await getNewsCategories()
  } catch (error) {
    console.error('Error loading news:', error)
  } finally {
    loading.value = false
  }
})

// Computed properties
const filteredNews = computed(() => {
  if (!newsData.value.length) return []

  let filtered = selectedCategory.value === 'all'
    ? newsData.value
    : selectedCategory.value === 'featured'
    ? newsData.value.filter(item => item.featured)
    : newsData.value.filter(item => item.category.id === selectedCategory.value)

  return filtered.slice(0, displayedCount.value)
})

const hasMoreNews = computed(() => {
  if (!newsData.value.length) return false

  let allFiltered = selectedCategory.value === 'all'
    ? newsData.value
    : selectedCategory.value === 'featured'
    ? newsData.value.filter(item => item.featured)
    : newsData.value.filter(item => item.category.id === selectedCategory.value)

  return allFiltered.length > displayedCount.value
})

// Methods
const getCategoryColor = (categoryId) => {
  const colors = {
    featured: 'bg-yellow-100 text-yellow-800',
    research: 'bg-green-100 text-green-800',
    news: 'bg-blue-100 text-blue-800',
    event: 'bg-purple-100 text-purple-800',
    other: 'bg-gray-100 text-gray-800'
  }
  return colors[categoryId] || 'bg-blue-100 text-blue-800'
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const getCategoryShortName = (categoryId) => {
  const names = {
    featured: 'Featured',
    research: 'Research',
    news: 'News',
    event: 'Event',
    other: 'Other'
  }
  return names[categoryId] || 'News'
}

const handleImageError = (event, item) => {
  // Set a fallback image if the main image fails to load
  event.target.style.display = 'none'
  const parent = event.target.parentElement
  if (parent && !parent.querySelector('.fallback-image')) {
    const fallback = document.createElement('div')
    fallback.className = 'fallback-image w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center'
    fallback.innerHTML = `<div class="text-center text-white">
      <div class="text-lg font-bold uppercase tracking-wider">${getCategoryShortName(item.category.id)}</div>
      <div class="text-xs opacity-75 mt-1">${item.readTime || 1} min read</div>
    </div>`
    parent.appendChild(fallback)
  }
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