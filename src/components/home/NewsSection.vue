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

      <!-- News Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="news in latestNews"
          :key="news.id"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 hover:border-blue-200/50 transform hover:-translate-y-1"
        >
          <!-- News Header -->
          <div class="p-6 pb-4">
            <div class="flex items-center justify-between mb-4">
              <span class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                </svg>
                {{ formatDate(news.date) }}
              </span>
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <!-- News Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {{ news.title }}
            </h3>

            <!-- News Excerpt -->
            <p class="text-gray-600 leading-relaxed mb-6 line-clamp-3">
              {{ news.excerpt }}
            </p>

            <!-- Read More Button -->
            <button class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 group-hover:translate-x-1">
              {{ $t('common.readMore') }}
              <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>

          <!-- Decorative bottom gradient -->
          <div class="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
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
import { computed } from 'vue'
import { newsData } from '@/data/news.js'

const latestNews = computed(() => {
  return newsData.slice(0, 6)
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}
</script>
