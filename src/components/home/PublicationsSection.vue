<template>
  <section class="py-16 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-blue-50/20"></div>
    <div class="absolute top-10 left-10 w-24 h-24 bg-purple-100/20 rounded-full blur-xl"></div>
    <div class="absolute bottom-10 right-10 w-28 h-28 bg-blue-100/20 rounded-full blur-xl"></div>

    <div class="relative max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-4 shadow-sm">
          <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          {{ $t('publications.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
          {{ $t('publications.subtitle') }}
        </p>
        <!-- Author Annotation Legend in Section Header -->
        <div class="text-sm text-gray-500 mb-4">
          <span>
            <sup class="text-text-gray font-bold">*</sup> Co-first author
          </span>
          <span>
            <sup class="text-text-gray font-bold">†</sup> Corresponding author
          </span>
        </div>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
      </div>

      <!-- Compact Publications List -->
      <div class="w-full">
        <div class="space-y-3">
          <div
            v-for="publication in featuredPublications"
            :key="publication.id"
            class="group bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/60 hover:border-purple-200/80 hover:shadow-lg transition-all duration-300 hover:bg-white"
          >
            <div class="p-4">
              <div class="flex items-start gap-4">
                <!-- Main Content -->
                <div class="flex-1 min-w-0">
                  <!-- Title and Comment -->
                  <div class="flex items-start justify-between gap-4 mb-1">
                    <h4 class="font-semibold text-gray-800 text-base leading-tight group-hover:text-purple-700 transition-colors duration-200 line-clamp-2">
                      {{ publication.title }}
                    </h4>

                    <!-- Enhanced Comment Highlight -->
                    <div v-if="publication.comment" class="flex-shrink-0">
                      <span class="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg border border-purple-300/50 backdrop-blur-sm">
                        <svg class="w-4 h-4 mr-2 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {{ publication.comment }}
                      </span>
                    </div>
                  </div>

                  <!-- Authors and Venue -->
                  <div class="space-y-0.5 mb-3">
                    <p class="text-sm text-gray-600 leading-relaxed line-clamp-1">
                      <span v-for="(a, idx) in buildAuthors(publication.authors, publication.firstAuthors, publication.correspondingAuthors)" :key="a.name">
                        <a
                          v-if="a.url"
                          :href="a.url"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="author-link hover:text-purple-700 transition-colors duration-200"
                          :class="{ 'font-bold text-gray-900': a.name === 'Liantao Ma' }"
                        >
                          {{ a.name }}
                        </a>
                        <span
                          v-else
                          :class="{ 'font-bold text-gray-900': a.name === 'Liantao Ma' }"
                        >
                          {{ a.name }}
                        </span>
                        <sup v-if="a.isFirst" class="text-gray-700 font-bold">*</sup>
                        <sup v-if="a.isCorresponding" class="text-gray-700 font-bold">†</sup>
                        <span v-if="idx < buildAuthors(publication.authors, publication.firstAuthors, publication.correspondingAuthors).length - 1">, </span>
                      </span>
                    </p>
                    <p class="text-sm text-blue-600 italic font-medium">
                      {{ publication.venue }}
                    </p>
                  </div>

                  <!-- Links -->
                  <div class="flex flex-wrap gap-1.5">
                    <a
                      v-for="link in publication.links"
                      :key="link.type"
                      :href="link.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center px-2.5 py-1 bg-gray-50 text-gray-700 text-xs rounded-md hover:bg-purple-50 hover:text-purple-700 border border-gray-200 hover:border-purple-200 transition-all duration-200 font-medium"
                    >
                      {{ link.type }}
                      <svg class="w-3 h-3 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <router-link
          to="/publications"
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          {{ $t('publications.view_all') }}
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { allPublications, authorLinks } from '@/data/publications.js'

export default {
  name: 'PublicationsSection',
  setup() {
    const featuredPublications = ref([])

    const buildAuthors = (authorString, firstAuthorsStr = '', correspondingAuthorsStr = '') => {
      if (!authorString) return []
      const names = authorString.split(/,\s*/)
      const firstAuthors = firstAuthorsStr ? firstAuthorsStr.split(',').map(s => s.trim()) : []
      const correspondingAuthors = correspondingAuthorsStr ? correspondingAuthorsStr.split(',').map(s => s.trim()) : []

      return names.map(rawName => {
        const name = rawName.trim()
        return {
          name,
          url: authorLinks[name] || '',
          isFirst: firstAuthors.includes(name),
          isCorresponding: correspondingAuthors.includes(name)
        }
      })
    }

    onMounted(() => {
      // Load top 6 representative publications
      try {
        featuredPublications.value = allPublications
          .filter(pub => pub.representative) // Only get representative publications
          .sort((a, b) => b.year.localeCompare(a.year) || a.title.localeCompare(b.title)) // Sort by year desc
          .slice(0, 6) // Take first 6 representative publications
      } catch (error) {
        console.warn('Could not load publications:', error)
        featuredPublications.value = []
      }
    })

    return {
      featuredPublications,
      buildAuthors
    }
  }
}
</script>
