<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Lab Introduction -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            {{ $t('home.about.title') }}
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Lab Description -->
          <div class="space-y-6">
            <p class="text-lg text-gray-700 leading-relaxed">
              {{ $t('home.about.description1') }}
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              {{ $t('home.about.description2') }}
            </p>

            <!-- Key Research Areas -->
            <div class="mt-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                {{ $t('home.research.title') }}
              </h3>
              <div class="space-y-4">
                <div
                  v-for="area in researchAreas"
                  :key="area.id"
                  class="flex items-start space-x-3"
                >
                  <div class="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2" />
                  <div>
                    <h4 class="font-semibold text-gray-900">
                      {{ $t(area.title) }}
                    </h4>
                    <p class="text-gray-600 text-sm">
                      {{ $t(area.description) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Director Info -->
          <div class="bg-gray-50 rounded-lg p-8">
            <div class="text-center">
              <img
                src="/images/team/ma-liantao.svg"
                alt="马连韬 (Liantao Ma)"
                class="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
              >
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                {{ $t('home.director.name') }}
              </h3>
              <p class="text-blue-600 font-medium mb-4">
                {{ $t('home.director.title') }}
              </p>
              <p class="text-gray-600 mb-6">
                {{ $t('home.director.description') }}
              </p>
              <div class="flex justify-center space-x-4">
                <div class="relative">
                  <div
                    @click="copyEmail('malt@pku.edu.cn')"
                    class="text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-200 flex items-center space-x-2"
                    title="点击复制邮箱地址"
                  >
                    <span>malt@pku.edu.cn</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <!-- Copy success tooltip -->
                  <div
                    v-if="copySuccess"
                    class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                  >
                    已复制！
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <NewsSection />

    <!-- Featured Publications -->
    <PublicationsSection />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '@/components/home/HeroSection.vue'
import NewsSection from '@/components/home/NewsSection.vue'
import PublicationsSection from '@/components/home/PublicationsSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'

const copySuccess = ref(false)

const researchAreas = [
  {
    id: 1,
    title: 'home.research.areas.ehr',
    description: 'home.research.areas.ehrDesc'
  },
  {
    id: 2,
    title: 'home.research.areas.llm',
    description: 'home.research.areas.llmDesc'
  },
  {
    id: 3,
    title: 'home.research.areas.platform',
    description: 'home.research.areas.platformDesc'
  }
]

const copyEmail = async (email) => {
  try {
    await navigator.clipboard.writeText(email)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = email
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  }
}
</script>
