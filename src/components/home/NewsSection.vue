<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          {{ $t('home.news.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="news in latestNews"
          :key="news.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
        >
          <div class="mb-4">
            <span class="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
              {{ news.date }}
            </span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
            {{ news.title }}
          </h3>
          <p class="text-gray-600 text-sm line-clamp-3">
            {{ news.excerpt }}
          </p>
          <button class="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
            {{ $t('common.readMore') }} →
          </button>
        </div>
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
</script>
