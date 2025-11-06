<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
    <div class="absolute top-10 right-10 w-32 h-32 bg-blue-100/20 rounded-full blur-xl"></div>
    <div class="absolute bottom-10 left-10 w-40 h-40 bg-blue-100/20 rounded-full blur-xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
          </svg>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          {{ $t('home.news.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100/50">
          <div class="p-6 pb-4">
            <div class="animate-pulse">
              <div class="h-4 bg-gray-200 rounded-full mb-4 w-32"></div>
              <div class="h-6 bg-gray-200 rounded mb-3"></div>
              <div class="h-4 bg-gray-200 rounded mb-2"></div>
              <div class="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
              <div class="h-4 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- News Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
          v-for="news in latestNews"
          :key="news.id"
          :to="`/news/${news.id}`"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 hover:border-blue-200/50 transform hover:-translate-y-1 cursor-pointer block"
        >
          <!-- News Image/Header -->
          <div class="relative">
            <div v-if="news.image" class="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                :src="news.image"
                :alt="news.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                @error="(e) => handleImageError(e, news)"
              >
            </div>
            <div
              v-else
              class="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <div class="text-lg font-bold uppercase tracking-wider">
                  {{ getCategoryShortName(news.category?.id || 'other') }}
                </div>
                <div v-if="news.featured" class="text-xs opacity-75 mt-1">Featured</div>
              </div>
            </div>
            <!-- Featured Badge -->
            <div v-if="news.featured" class="absolute top-3 right-3">
              <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                Featured
              </span>
            </div>
          </div>

          <!-- News Content -->
          <div class="p-6 pb-4">
            <div class="flex items-center justify-between mb-4">
              <span class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                </svg>
                {{ formatDate(news.date) }}
              </span>
              <div v-if="news.readTime" class="text-xs text-gray-500">
                {{ news.readTime }} min
              </div>
            </div>

            <!-- News Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {{ news.title }}
            </h3>

            <!-- News Excerpt -->
            <p class="text-gray-600 leading-relaxed mb-6 line-clamp-3">
              {{ news.excerpt }}
            </p>

            <!-- Tags (show first 2) -->
            <div v-if="news.tags && news.tags.length > 0" class="flex flex-wrap gap-1 mb-4">
              <span
                v-for="tag in news.tags.slice(0, 2)"
                :key="tag"
                class="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Read More Indicator -->
            <div class="inline-flex items-center text-blue-600 group-hover:text-blue-700 font-semibold text-sm transition-all duration-300">
              {{ $t('common.readMore') }}
              <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>

          <!-- Decorative bottom gradient -->
          <div class="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </router-link>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <router-link
          to="/news"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
        >
          查看更多新闻
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getLatestNews } from '@/utils/newsLoader.js'

const newsData = ref([])
const loading = ref(true)

// Load latest news on mount
onMounted(async () => {
  try {
    newsData.value = await getLatestNews(6)
  } catch (error) {
    console.error('Error loading latest news:', error)
  } finally {
    loading.value = false
  }
})

const latestNews = computed(() => {
  return newsData.value
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

const getCategoryShortName = (categoryId) => {
  const names = {
    featured: 'Featured',
    research: 'Research',
    event: 'Event',
    achievement: 'Achievement'
  }
  return names[categoryId] || 'Event'
}

const handleImageError = (event, news) => {
  // Set a fallback if image fails to load
  event.target.style.display = 'none'
  const parent = event.target.parentElement
  if (parent && !parent.querySelector('.fallback-image')) {
    const fallback = document.createElement('div')
    fallback.className = 'fallback-image w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center'
    fallback.innerHTML = `<div class="text-center text-white">
      <div class="text-lg font-bold uppercase tracking-wider">${getCategoryShortName(news.category?.id || 'news')}</div>
      <div class="text-xs opacity-75 mt-1">${news.readTime || 1} min</div>
    </div>`
    parent.appendChild(fallback)
  }
}
</script>
