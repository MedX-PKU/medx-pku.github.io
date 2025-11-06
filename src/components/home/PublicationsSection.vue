<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 to-gray-50 relative overflow-hidden">
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

      <!-- Publications List -->
      <div class="max-w-4xl mx-auto">
        <ul class="space-y-6">
          <li
            v-for="publication in featuredPublications"
            :key="publication.id"
            class="p-6 bg-white rounded-xl border border-gray-200/80 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1.5"
          >
            <div class="flex flex-col sm:flex-row items-start gap-6">
              <!-- Meta Info Column (Year) -->
              <div class="flex-shrink-0 w-full sm:w-20 text-left sm:text-center">
                <div class="text-2xl font-bold text-blue-600 leading-none">
                  {{ publication.year }}
                </div>
                <div v-if="publication.tag" class="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  {{ publication.tag.split(' ')[0] }}
                </div>
              </div>

              <!-- Main Content Column -->
              <div class="flex-1 border-t sm:border-t-0 sm:border-l border-gray-200/80 pt-4 sm:pt-0 sm:pl-6">
                <!-- Title -->
                <h4 class="font-semibold text-gray-800 text-lg mb-2 leading-tight">
                  {{ publication.title }}
                </h4>

                <!-- Comment Highlight -->
                <div v-if="publication.comment" class="my-3">
                  <span class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-yellow-900 bg-gradient-to-r from-yellow-300 to-amber-400 shadow-md">
                    <svg class="w-4 h-4 mr-1.5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {{ publication.comment }}
                  </span>
                </div>

                <!-- Authors -->
                <p class="text-sm text-gray-600 mb-2 leading-relaxed line-clamp-2">
                  {{ publication.authors }}
                </p>

                <!-- Venue -->
                <p class="text-sm text-blue-700 italic font-medium mb-4">
                  {{ publication.venue }}
                </p>

                <!-- Links -->
                <div class="flex flex-wrap gap-2">
                  <a
                    v-for="link in publication.links"
                    :key="link.type"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-800 text-xs rounded-full hover:bg-blue-100 hover:text-blue-800 border border-transparent hover:border-blue-200 transition-all duration-200 font-medium"
                  >
                    {{ link.type }}
                    <svg class="w-3 h-3 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-16">
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
          .sort((a, b) => b.year.localeCompare(a.year) || a.title.localeCompare(b.title)) // Sort by year desc
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