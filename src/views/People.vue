<template>
  <div class="people-page">
    <div class="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ $t('people.title') }}
        </h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          {{ $t('publications.subtitle') }}
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Lab Director -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          {{ $t('people.director') }}
        </h2>
        <div class="flex justify-center">
          <PersonCard :person="director" />
        </div>
      </div>

      <!-- Team Members -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          {{ $t('people.members') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PersonCard
            v-for="member in teamMembers"
            :key="member.id"
            :person="member"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import PersonCard from '@/components/people/PersonCard.vue'
import { teamData } from '@/data/team.js'

export default {
  name: 'People',
  components: {
    PersonCard
  },
  setup() {
    const director = ref({})
    const teamMembers = ref([])

    onMounted(() => {
      try {
        // Set director
        const directorData = teamData.find(member => member.isDirector)
        if (directorData) {
          director.value = {
            name: directorData.name.zh || directorData.name.en,
            title: directorData.position.zh || directorData.position.en,
            email: directorData.email,
            image: directorData.image
          }
        }

        // Set team members (excluding director)
        teamMembers.value = teamData.filter(member => !member.isDirector).map(member => ({
          name: member.name.zh || member.name.en,
          title: member.position.zh || member.position.en,
          email: member.email,
          image: member.image
        }))
      } catch (error) {
        console.warn('Could not load team data:', error)

        // Fallback director data
        director.value = {
          name: 'Liantao Ma',
          title: 'Lab Director',
          email: 'malt[at]pku.edu.cn',
          image: '/images/team/ma-liantao.svg'
        }
      }
    })

    return {
      director,
      teamMembers
    }
  }
}
</script>