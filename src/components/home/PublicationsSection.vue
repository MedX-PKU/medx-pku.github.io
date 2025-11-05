<template>
  <section class="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent"></div>
    <div class="absolute top-20 left-20 w-36 h-36 bg-blue-100/15 rounded-full blur-2xl"></div>
    <div class="absolute bottom-20 right-20 w-44 h-44 bg-blue-100/15 rounded-full blur-2xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mb-6 shadow-md">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          {{ $t('publications.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          {{ $t('publications.subtitle') }}
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
      </div>

  
      <!-- Publications Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div
          v-for="publication in featuredPublications"
          :key="publication.id"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 hover:border-blue-200/50 transform hover:-translate-y-1"
        >
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-3">
                  <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-sm">
                    {{ publication.year }}
                  </span>
                  <span
                    v-if="publication.tag"
                    class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border border-gray-200"
                  >
                    {{ publication.tag }}
                  </span>
                </div>

                <h4 class="font-bold text-gray-900 text-base mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {{ publication.title }}
                </h4>

                <p class="text-xs text-gray-600 mb-2 leading-relaxed line-clamp-2">
                  {{ publication.authors }}
                </p>

                <p class="text-xs text-blue-600 italic mb-4 font-medium">
                  {{ publication.venue }}
                </p>

                <div class="flex flex-wrap gap-1.5">
                  <a
                    v-for="link in publication.links"
                    :key="link.type"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 border border-gray-200 hover:border-blue-200 transition-all duration-300 font-medium"
                  >
                    {{ link.type }}
                    <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative bottom gradient -->
          <div class="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center">
        <router-link
          to="/publications"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
        >
          {{ $t('publications.view_all') }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { allPublications } from '@/data/publications.js'

export default {
  name: 'PublicationsSection',
  setup() {
    const featuredPublications = ref([])

    onMounted(() => {
      // Load top 6 featured publications
      try {
        featuredPublications.value = allPublications
          .filter(pub => pub.featured) // Only get featured publications
          .slice(0, 6) // Take first 6 featured publications
      } catch (error) {
        console.warn('Could not load publications:', error)
        featuredPublications.value = []
      }
    })

    return {
      featuredPublications
    }
  }
}
</script>