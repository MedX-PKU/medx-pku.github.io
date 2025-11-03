<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          {{ $t('publications.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ $t('publications.subtitle') }}
        </p>
      </div>

      <div class="mb-8">
        <PublicationFilter />
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="publication in featuredPublications"
          :key="publication.id"
          class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <PublicationItem :publication="publication" />
        </div>
      </div>

      <div class="text-center mt-12">
        <router-link
          to="/publications"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          {{ $t('publications.view_all') }}
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import PublicationItem from '@/components/publications/PublicationItem.vue'
import PublicationFilter from '@/components/publications/PublicationFilter.vue'

export default {
  name: 'PublicationsSection',
  components: {
    PublicationItem,
    PublicationFilter
  },
  setup() {
    const featuredPublications = ref([])

    onMounted(async () => {
      // Load featured publications
      try {
        const publicationsModule = await import('@/data/publications.js')
        const allPublications = publicationsModule.publicationsData || []
        featuredPublications.value = allPublications.slice(0, 6) // Show first 6 publications
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