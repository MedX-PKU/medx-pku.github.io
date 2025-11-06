<template>
  <div class="news-detail">
    <!-- Back to News -->
    <section class="py-8 bg-gray-50">
      <div class="max-w-5xl mx-auto px-3 sm:px-5 lg:px-7">
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
      <div class="max-w-5xl mx-auto px-3 sm:px-5 lg:px-7">
        <article v-if="newsItem" class="prose prose-lg max-w-none">
          <!-- News Header Image -->
          <div v-if="newsItem.image" class="mb-8">
            <img
              :src="newsItem.image"
              :alt="newsItem.title"
              class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              @error="handleImageError"
            >
          </div>

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
              <span v-if="newsItem.featured" class="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">
                Featured
              </span>
              <time class="text-gray-500 text-sm">
                {{ formatDate(newsItem.date) }}
              </time>
              <span v-if="newsItem.readTime" class="text-gray-500 text-sm">
                {{ newsItem.readTime }} min read
              </span>
            </div>

            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ newsItem.title }}
            </h1>

            <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </header>

          <!-- News Excerpt -->
          <div v-if="newsItem.excerpt" class="mb-8">
            <p class="text-xl text-gray-600 font-medium leading-relaxed">
              {{ newsItem.excerpt }}
            </p>
          </div>

          <!-- News Body Content -->
          <div class="prose-content text-gray-700 leading-relaxed space-y-6">
            <div v-if="newsItem.content" class="text-base" v-html="newsItem.content"></div>

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
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <!-- Previous News -->
              <router-link
                v-if="previousNews"
                :to="`/news/${previousNews.id}`"
                class="flex items-center text-blue-600 hover:text-blue-800 font-medium group max-w-[320px] sm:max-w-md"
              >
                <ChevronLeftIcon class="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200 flex-shrink-0" />
                <div class="flex flex-col sm:flex-row sm:items-center">
                  <span class="font-medium">{{ $t('news.previous') || 'Previous' }}</span>
                  <span class="text-sm text-gray-500 group-hover:text-gray-700 sm:ml-2 mt-1 sm:mt-0 max-w-[200px] sm:max-w-[280px] truncate">
                    {{ getTruncatedTitle(previousNews.title) }}
                  </span>
                </div>
              </router-link>
              <div v-else class="w-full sm:w-auto"></div>

              <!-- Next News -->
              <router-link
                v-if="nextNews"
                :to="`/news/${nextNews.id}`"
                class="flex items-center text-blue-600 hover:text-blue-800 font-medium group max-w-[320px] sm:max-w-md sm:text-right"
              >
                <div class="flex flex-col sm:flex-row sm:items-center text-left sm:text-right">
                  <span class="text-sm text-gray-500 group-hover:text-gray-700 sm:mr-2 mb-1 sm:mb-0 max-w-[200px] sm:max-w-[280px] truncate">
                    {{ getTruncatedTitle(nextNews.title) }}
                  </span>
                  <span class="font-medium">{{ $t('news.next') || 'Next' }}</span>
                </div>
                <ChevronRightIcon class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
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
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { loadNewsById, loadAllNews } from '@/utils/newsLoader.js'

const route = useRoute()
const newsItem = ref(null)
const allNews = ref([])
const loading = ref(true)

// Load all news for navigation
onMounted(async () => {
  try {
    allNews.value = await loadAllNews()
  } catch (error) {
    console.error('Error loading all news:', error)
  } finally {
    loading.value = false
  }
})

// Computed properties for navigation
const newsIndex = computed(() => {
  if (!newsItem.value || !allNews.value.length) return -1
  return allNews.value.findIndex(item => item.id === newsItem.value.id)
})

const previousNews = computed(() => {
  const index = newsIndex.value
  return index > 0 ? allNews.value[index - 1] : null
})

const nextNews = computed(() => {
  const index = newsIndex.value
  return index < allNews.value.length - 1 ? allNews.value[index + 1] : null
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

const handleImageError = (event) => {
  // Hide broken image and show fallback
  event.target.style.display = 'none'
  const parent = event.target.parentElement
  if (parent && !parent.querySelector('.fallback-placeholder')) {
    const fallback = document.createElement('div')
    fallback.className = 'fallback-placeholder w-full h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center'
    fallback.innerHTML = '<div class="text-gray-500 text-center"><div class="text-4xl mb-2">📷</div><div>Image not available</div></div>'
    parent.appendChild(fallback)
  }
}

const getTruncatedTitle = (title) => {
  // Calculate approximate "visual width" of title
  // Chinese characters: 2 units, English letters: 1 unit, Numbers: 1 unit, Spaces: 0.5 units
  let width = 0
  let actualLength = 0
  const maxWidth = 38 // Increased from 28 to show more content

  for (let i = 0; i < title.length; i++) {
    const char = title[i]

    // More precise character width calculation
    if (/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/.test(char)) {
      // Chinese characters (includingCJK Unified Ideographs)
      width += 2
    } else if (/[\u3040-\u309f\u30a0-\u30ff]/.test(char)) {
      // Japanese Hiragana/Katakana
      width += 1.8
    } else if (/[\uac00-\ud7af]/.test(char)) {
      // Korean characters
      width += 1.8
    } else if (/[a-zA-Z]/.test(char)) {
      // English letters
      width += 1
    } else if (/[0-9]/.test(char)) {
      // Numbers
      width += 1
    } else if (/\s/.test(char)) {
      // Spaces
      width += 0.5
    } else if (/[.,;:!?'"()[\]{}]/.test(char)) {
      // Common punctuation
      width += 0.8
    } else {
      // Other characters/symbols
      width += 1.2
    }

    actualLength = i + 1

    // Stop when we exceed the width limit
    if (width > maxWidth) {
      // Try to find a better breaking point (prefer breaking after spaces or punctuation)
      let breakPoint = actualLength
      for (let j = actualLength - 1; j >= Math.max(0, actualLength - 10); j--) {
        const breakChar = title[j]
        if (/\s|[，。！？；：、]/.test(breakChar)) {
          breakPoint = j + 1
          break
        }
      }

      return title.substring(0, breakPoint) + '...'
    }
  }

  return title
}

// Method to load news item
const loadNewsItem = async (newsId) => {
  try {
    newsItem.value = await loadNewsById(newsId)

    // If news item not found, you could redirect to 404 or news page
    if (!newsItem.value) {
      console.warn(`News item with ID ${newsId} not found`)
    }
  } catch (error) {
    console.error(`Error loading news item ${newsId}:`, error)
  }
}

// Watch for route changes
watch(() => route.params.id, async (newId) => {
  await loadNewsItem(newId)
}, { immediate: true })
</script>

<style scoped>
.prose-content {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Headings */
.prose-content :deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
  line-height: 1.2;
}

.prose-content :deep(h2) {
  font-size: 1.875rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
  line-height: 1.3;
}

.prose-content :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #374151;
  line-height: 1.4;
}

.prose-content :deep(h4) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #4b5563;
  line-height: 1.5;
}

/* Paragraphs */
.prose-content :deep(p) {
  margin-bottom: 1.25rem;
  line-height: 1.7;
  color: #374151;
}

/* Links */
.prose-content :deep(a) {
  color: #2563eb;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.prose-content :deep(a:hover) {
  color: #1d4ed8;
  text-decoration-color: #1d4ed8;
}

/* Lists */
.prose-content :deep(ul), .prose-content :deep(ol) {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.prose-content :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: #374151;
}

/* Blockquotes */
.prose-content :deep(blockquote) {
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  border-left: 4px solid #3b82f6;
  background-color: #f8fafc;
  border-radius: 0 0.5rem 0.5rem 0;
}

.prose-content :deep(blockquote p) {
  margin-bottom: 0;
  font-style: italic;
  color: #475569;
}

/* Code */
.prose-content :deep(code) {
  background-color: #f1f5f9;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
  color: #e11d48;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.prose-content :deep(pre) {
  background-color: #1e293b;
  color: #f1f5f9;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.prose-content :deep(pre code) {
  background-color: transparent;
  color: inherit;
  padding: 0;
}

/* Tables */
.prose-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.875rem;
}

.prose-content :deep(th), .prose-content :deep(td) {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.prose-content :deep(th) {
  font-weight: 600;
  color: #1f2937;
  background-color: #f9fafb;
}

.prose-content :deep(tr:hover) {
  background-color: #f9fafb;
}

/* Images */
.prose-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Horizontal Rule */
.prose-content :deep(hr) {
  margin: 2rem 0;
  border: none;
  border-top: 2px solid #e5e7eb;
}

/* Strong/Bold */
.prose-content :deep(strong), .prose-content :deep(b) {
  font-weight: 600;
  color: #1f2937;
}

/* Emphasis/Italic */
.prose-content :deep(em), .prose-content :deep(i) {
  font-style: italic;
  color: #4b5563;
}

/* Footnotes */
.prose-content :deep(.footnote-ref) {
  font-size: 0.75rem;
  vertical-align: super;
  color: #3b82f6;
  text-decoration: none;
}

.prose-content :deep(.footnote-ref:hover) {
  text-decoration: underline;
}
</style>