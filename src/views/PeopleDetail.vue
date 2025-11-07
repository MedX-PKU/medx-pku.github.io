<template>
  <div class="member-detail-page">
    <!-- Header Section -->
    <div class="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16">
      <div class="max-w-4xl mx-auto px-3 sm:px-5 lg:px-7">
        <button
          @click="$router.go(-1)"
          class="mb-6 flex items-center text-blue-100 hover:text-white transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          {{ $t('common.back') }}
        </button>

        <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            :src="member.image || '/images/team/default-avatar.svg'"
            :alt="member.name"
            class="w-32 h-32 rounded-full object-cover ring-4 ring-white ring-opacity-50"
          >
          <div class="text-center md:text-left flex-1">
            <h1 class="text-4xl font-bold mb-2">{{ member.name }}</h1>
            <p class="text-xl text-blue-100 mb-4">{{ member.title }}</p>
            <div v-if="member.email" class="flex items-center justify-center md:justify-start text-blue-100 mb-4">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>{{ member.email }}</span>
            </div>
            <!-- Links Section in Header -->
            <div v-if="member.links && member.links.length > 0" class="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
              <a
                v-for="link in member.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 hover:border-white/50 transition-all duration-200 group"
              >
                <span class="text-sm mr-1.5 group-hover:scale-110 transition-transform duration-200">
                  {{ getLinkIcon(link.type) }}
                </span>
                <span class="text-xs font-medium">{{ getLinkText(link.type) }}</span>
              </a>
            </div>

            <!-- Research Interests Section in Header -->
            <div v-if="member.researchInterests && member.researchInterests.length > 0" class="flex flex-wrap gap-1.5 justify-center md:justify-start">
              <span
                v-for="interest in member.researchInterests"
                :key="interest"
                class="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-medium"
              >
                {{ interest }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-3 sm:px-5 lg:px-7 py-12">
      <!-- Bio Section -->
      <div v-if="member.bio" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('member.biography') }}</h2>
        <p class="text-gray-700 leading-relaxed text-lg">{{ member.bio }}</p>
      </div>

      <!-- Timeline Section -->
      <div v-if="member.timeline && member.timeline.length > 0" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">{{ $t('member.timeline') }}</h2>
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <!-- Timeline items -->
          <div class="space-y-8">
            <div
              v-for="(item, index) in member.timeline"
              :key="index"
              class="relative flex items-start space-x-6"
            >
              <!-- Timeline dot -->
              <div class="relative z-10 flex-shrink-0">
                <div class="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {{ getTimelineIcon(item.type) }}
                </div>
              </div>

              <!-- Timeline content -->
              <div class="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 class="text-xl font-semibold text-gray-900 mb-1 sm:mb-0">
                    {{ item.title }}
                  </h3>
                  <span class="text-sm text-blue-600 font-medium whitespace-nowrap ml-0 sm:ml-4">
                    {{ item.period }}
                  </span>
                </div>
                <p v-if="item.organization" class="text-gray-700 font-medium mb-2">
                  {{ item.organization }}
                </p>
                <p v-if="item.description" class="text-gray-600 leading-relaxed">
                  {{ item.description }}
                </p>
                <div v-if="item.achievements && item.achievements.length > 0" class="mt-3">
                  <ul class="list-disc list-inside text-gray-600 space-y-1">
                    <li v-for="achievement in item.achievements" :key="achievement">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { teamData } from '@/data/team.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'PeopleDetail',
  setup() {
    const route = useRoute()
    const { locale } = useI18n()
    const memberData = ref({})
    const loading = ref(true)

    onMounted(() => {
      const memberName = route.params.name
      const foundMember = teamData.find(m => m.name.en.toLowerCase().replace(/\s+/g, '-') === memberName)

      if (foundMember) {
        memberData.value = foundMember
      }
      loading.value = false
    })

    const getTimelineIcon = (type) => {
      const icons = {
        education: '🎓',
        work: '💼',
        research: '🔬',
        award: '🏆',
        project: '🚀',
        default: '📌'
      }
      return icons[type] || icons.default
    }

    const generateDefaultTimeline = (member) => {
      const timeline = []
      const currentLocale = locale.value
      const isZh = currentLocale === 'zh'

      // Current position
      if (member.position) {
        const positionText = member.position?.[isZh ? 'zh' : 'en'] || member.position || member.position?.en
        const bioText = member.bio?.[isZh ? 'zh' : 'en'] || member.bio || member.bio?.en

        timeline.push({
          type: 'work',
          title: positionText,
          organization: isZh ? '北京大学' : 'Peking University',
          period: 'Present',
          description: bioText
        })
      }

      // Add education placeholder if student
      const positionText = member.position?.[isZh ? 'zh' : 'en'] || member.position || member.position?.en
      if (positionText && (positionText.includes('学生') || positionText.includes('Student'))) {
        timeline.push({
          type: 'education',
          title: isZh ? '在读学位' : 'Current Degree',
          organization: isZh ? '北京大学' : 'Peking University',
          period: 'Ongoing',
          description: isZh ? '正在攻读相关学位' : 'Currently pursuing relevant degree'
        })
      }

      return timeline
    }

    const member = computed(() => {
      if (!memberData.value) return {}

      const currentLocale = locale.value
      const isZh = currentLocale === 'zh'

      return {
        ...memberData.value,
        name: memberData.value.name?.[isZh ? 'zh' : 'en'] || memberData.value.name?.en || memberData.value.name,
        title: memberData.value.title?.[isZh ? 'zh' : 'en'] || memberData.value.title?.en || memberData.value.title,
        bio: memberData.value.bio?.[isZh ? 'zh' : 'en'] || memberData.value.bio?.en || memberData.value.bio,
        position: memberData.value.position?.[isZh ? 'zh' : 'en'] || memberData.value.position?.en || memberData.value.position,
        timeline: (memberData.value.timeline || generateDefaultTimeline(memberData.value)).map(item => ({
        ...item,
        title: item.title?.[isZh ? 'zh' : 'en'] || item.title,
        organization: item.organization?.[isZh ? 'zh' : 'en'] || item.organization,
        description: item.description?.[isZh ? 'zh' : 'en'] || item.description,
        achievements: item.achievements
      })),
        researchInterests: memberData.value.researchInterests?.[isZh ? 'zh' : 'en'] || memberData.value.researchInterests || []
      }
    })

    
    const getLinkText = (type) => {
      const currentLocale = locale.value
      const isZh = currentLocale === 'zh'

      const texts = {
        zh: {
          homepage: '个人主页',
          scholar: 'Google Scholar',
          github: 'GitHub',
          linkedin: 'LinkedIn',
          twitter: 'Twitter'
        },
        en: {
          homepage: 'Homepage',
          scholar: 'Google Scholar',
          github: 'GitHub',
          linkedin: 'LinkedIn',
          twitter: 'Twitter'
        }
      }
      return texts[isZh ? 'zh' : 'en'][type] || type
    }

    const getLinkIcon = (type) => {
      const icons = {
        homepage: '🌐',
        scholar: '🎓',
        github: '💻',
        linkedin: '💼',
        twitter: '🐦',
        orcid: '🆔',
        researchgate: '🔬'
      }
      return icons[type] || '🔗'
    }

    return {
      member,
      loading,
      getTimelineIcon,
      getLinkText,
      getLinkIcon
    }
  }
}
</script>

<style scoped>
.member-detail-page {
  min-height: 100vh;
}

.timeline-item-enter-active,
.timeline-item-leave-active {
  transition: all 0.3s ease;
}

.timeline-item-enter-from,
.timeline-item-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>