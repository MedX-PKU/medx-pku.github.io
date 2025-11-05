<template>
  <div class="news-detail">
    <!-- Back to News -->
    <section class="py-8 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <router-link
          to="/news"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <ArrowLeftIcon class="mr-2 h-4 w-4" />
          {{ $t('news.backToNews') }}
        </router-link>
      </div>
    </section>

    <!-- News Content -->
    <section class="py-12 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article v-if="newsItem" class="prose prose-lg max-w-none">
          <!-- News Header -->
          <header class="mb-8">
            <div class="flex items-center gap-3 mb-4">
              <span
                :class="[
                  'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
                  getCategoryColor(newsItem.category?.id || 'other')
                ]"
              >
                {{ $t(newsItem.category?.label || 'news.categories.other') }}
              </span>
              <time class="text-gray-500 text-sm">
                {{ formatDate(newsItem.date) }}
              </time>
            </div>

            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ newsItem.title }}
            </h1>

            <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </header>

          <!-- News Body -->
          <div class="prose-content text-gray-700 leading-relaxed space-y-6">
            <p class="text-xl text-gray-600 font-medium">
              {{ newsItem.excerpt }}
            </p>

            <div v-if="newsItem.content && newsItem.content !== '详细内容...'" class="text-base">
              <div v-for="(paragraph, index) in getContentParagraphs(newsItem.content)" :key="index" class="mb-6">
                <p v-if="paragraph.trim()" class="text-gray-700 leading-relaxed">
                  {{ paragraph.trim() }}
                </p>
              </div>
            </div>

            <div v-else class="text-center py-12 bg-gray-50 rounded-lg">
              <div class="text-gray-400 text-6xl mb-4">📝</div>
              <p class="text-gray-600">
                {{ $t('news.fullContentNotAvailable') }}
              </p>
              <p class="text-sm text-gray-500 mt-2">
                {{ $t('news.checkBackLater') }}
              </p>
            </div>
          </div>

          <!-- Navigation between news items -->
          <nav v-if="newsItem" class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex justify-between items-center">
              <!-- Previous News -->
              <router-link
                v-if="previousNews"
                :to="`/news/${previousNews.id}`"
                class="flex items-center text-blue-600 hover:text-blue-800 font-medium group"
              >
                <ChevronLeftIcon class="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                {{ $t('news.previous') || 'Previous' }}
                <span class="block text-sm text-gray-500 group-hover:text-gray-700 ml-2">
                  {{ previousNews.title.substring(0, 50) }}...
                </span>
              </router-link>
              <div v-else></div>

              <!-- Next News -->
              <router-link
                v-if="nextNews"
                :to="`/news/${nextNews.id}`"
                class="flex items-center text-blue-600 hover:text-blue-800 font-medium group"
              >
                <span class="block text-sm text-gray-500 group-hover:text-gray-700 mr-2 text-right">
                  {{ nextNews.title.substring(0, 50) }}...
                </span>
                {{ $t('news.next') || 'Next' }}
                <ChevronRightIcon class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </router-link>
              <div v-else></div>
            </div>
          </nav>

          <!-- Tags -->
          <div v-if="newsItem.tags && newsItem.tags.length > 0" class="mt-8 pt-6 border-t border-gray-200">
            <h3 class="text-sm font-medium text-gray-900 mb-3">{{ $t('news.tags') }}</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in newsItem.tags"
                :key="tag"
                class="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>

        <!-- 404 State -->
        <div v-else class="text-center py-12">
          <div class="text-gray-400 text-6xl mb-4">🔍</div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            {{ $t('news.newsNotFound') }}
          </h2>
          <p class="text-gray-600 mb-6">
            {{ $t('news.newsNotFoundDescription') }}
          </p>
          <router-link
            to="/news"
            class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {{ $t('news.backToAllNews') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { newsData } from '@/data/news.js'

const route = useRoute()
const newsItem = ref(null)

// Computed properties for navigation
const newsIndex = computed(() => {
  if (!newsItem.value) return -1
  return processedNewsData.findIndex(item => item.id === newsItem.value.id)
})

const previousNews = computed(() => {
  const index = newsIndex.value
  return index > 0 ? processedNewsData[index - 1] : null
})

const nextNews = computed(() => {
  const index = newsIndex.value
  return index < processedNewsData.length - 1 ? processedNewsData[index + 1] : null
})

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
  tags: item.featured ? ['Featured'] : ['News']
}))

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

const getContentParagraphs = (content) => {
  // Split content by double newlines and filter out empty paragraphs
  return content.split('\n\n').filter(paragraph => paragraph.trim())
}

// Lifecycle
onMounted(() => {
  const newsId = parseInt(route.params.id)
  newsItem.value = processedNewsData.find(item => item.id === newsId)

  // If news item not found, you could redirect to 404 or news page
  if (!newsItem.value) {
    console.warn(`News item with ID ${newsId} not found`)
  }
})
</script>

<style scoped>
.prose-content {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.prose-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.prose-content :deep(p) {
  margin-bottom: 1.25rem;
  line-height: 1.7;
}

.prose-content :deep(a) {
  color: #2563eb;
  text-decoration: underline;
}

.prose-content :deep(a:hover) {
  color: #1d4ed8;
}
</style>