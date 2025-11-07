<template>
  <div class="people-page">
    <div class="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ $t('people.title') }}
        </h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          {{ $t('publications.subtitle') }}
        </p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7 py-12">
      <!-- Research Center & Lab Leadership -->
      <div class="mb-12">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('people.leadership') }}</h2>
          <p class="text-gray-600 max-w-3xl mx-auto">{{ $t('people.centerLabRelation') }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <PersonCard :person="centerDirector" />
          <PersonCard :person="labDirector" />
        </div>

        </div>

      <!-- Team Members -->
      <div>
        <h2 class="text-xl font-bold text-gray-900 mb-6 text-center">
          {{ $t('people.members') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    const centerDirector = ref({})
    const labDirector = ref({})
    const teamMembers = ref([])

    onMounted(() => {
      try {
        // Set center director
        const centerDirectorData = teamData.find(member => member.isCenterDirector)
        if (centerDirectorData) {
          centerDirector.value = {
            name: centerDirectorData.name.zh || centerDirectorData.name.en,
            nameEn: centerDirectorData.name.en,
            title: centerDirectorData.title.zh || centerDirectorData.title.en,
            email: centerDirectorData.email,
            image: centerDirectorData.image,
            isCenterDirector: true
          }
        }

        // Set lab director
        const labDirectorData = teamData.find(member => member.isLabDirector)
        if (labDirectorData) {
          labDirector.value = {
            name: labDirectorData.name.zh || labDirectorData.name.en,
            nameEn: labDirectorData.name.en,
            title: labDirectorData.title.zh || labDirectorData.title.en,
            email: labDirectorData.email,
            image: labDirectorData.image,
            isLabDirector: true
          }
        }

        // Set team members (excluding directors)
        teamMembers.value = teamData.filter(member => !member.isCenterDirector && !member.isLabDirector).map(member => ({
          name: member.name.zh || member.name.en,
          nameEn: member.name.en,
          title: member.title.zh || member.title.en,
          email: member.email,
          image: member.image,
          research: member.research
        }))
      } catch (error) {
        console.warn('Could not load team data:', error)

        // Fallback data
        centerDirector.value = {
          name: 'Yasha Wang',
          nameEn: 'Yasha Wang',
          title: 'Research Center Director',
          email: 'wangyasha [at] pku.edu.cn',
          image: '/images/team/wang-yasha.svg',
          isCenterDirector: true
        }

        labDirector.value = {
          name: 'Liantao Ma',
          nameEn: 'Liantao Ma',
          title: 'Lab Director',
          email: 'malt [at] pku.edu.cn',
          image: '/images/team/ma-liantao.svg',
          isLabDirector: true
        }
      }
    })

    return {
      centerDirector,
      labDirector,
      teamMembers
    }
  }
}
</script>