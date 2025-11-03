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
                  <div class="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 class="font-semibold text-gray-900">{{ $t(area.title) }}</h4>
                    <p class="text-gray-600 text-sm">{{ $t(area.description) }}</p>
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
                <a
                  href="mailto:malt@pku.edu.cn"
                  class="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  {{ $t('home.director.email') }}
                </a>
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
import HeroSection from '@/components/home/HeroSection.vue'
// import NewsSection from '@/components/home/NewsSection.vue'
// import PublicationsSection from '@/components/home/PublicationsSection.vue'
// import ContactSection from '@/components/home/ContactSection.vue'

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
</script>
