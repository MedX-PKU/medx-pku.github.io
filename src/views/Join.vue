<template>
  <div class="join">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        <div class="text-center">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {{ $t('join.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {{ $t('join.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ $t('join.whyJoin.title') }}
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            v-for="reason in joinReasons"
            :key="reason.id"
            class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-6 shadow-lg">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="reason.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              {{ $t(reason.title) }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t(reason.description) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ $t('join.positions.title') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t('join.positions.subtitle') }}
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div class="grid gap-8">
          <div
            v-for="position in openPositions"
            :key="position.id"
            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >
            <div class="p-8">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-4">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold" :class="getPositionTypeColor(position.type)">
                      {{ $t(position.typeLabel) }}
                    </span>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {{ $t(position.locationLabel) }}
                    </span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">
                    {{ $t(position.title) }}
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-4">
                    {{ $t(position.description) }}
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in position.tags"
                      :key="tag"
                      class="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <div class="flex lg:flex-col gap-3">
                  <button
                    @click="expandedPosition = expandedPosition === position.id ? null : position.id"
                    class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    {{ $t('join.viewDetails') }}
                    <svg class="w-4 h-4 ml-2 transition-transform" :class="{ 'rotate-180': expandedPosition === position.id }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Expanded Details -->
              <div v-if="expandedPosition === position.id" class="mt-8 pt-8 border-t border-gray-200">
                <div class="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 class="font-bold text-gray-900 mb-4 flex items-center">
                      <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ $t('join.requirements') }}
                    </h4>
                    <ul class="space-y-2 text-gray-600">
                      <li v-for="req in position.requirements" :key="req" class="flex items-start">
                        <span class="text-blue-500 mt-1 mr-2">•</span>
                        {{ $t(req) }}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-4 flex items-center">
                      <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                      {{ $t('join.responsibilities') }}
                    </h4>
                    <ul class="space-y-2 text-gray-600">
                      <li v-for="resp in position.responsibilities" :key="resp" class="flex items-start">
                        <span class="text-green-500 mt-1 mr-2">•</span>
                        {{ $t(resp) }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No positions message -->
        <div v-if="openPositions.length === 0" class="text-center py-16">
          <div class="text-gray-400 text-6xl mb-4">💼</div>
          <h3 class="text-xl font-medium text-gray-900 mb-2">
            {{ $t('join.noPositions') }}
          </h3>
          <p class="text-gray-600 mb-6">
            {{ $t('join.noPositionsDescription') }}
          </p>
          <a
            href="#"
            class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {{ $t('join.spontaneousApplication') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ $t('join.process.title') }}
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in applicationProcess"
            :key="step.id"
            class="text-center relative"
          >
            <!-- Step number with connector -->
            <div class="relative">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white text-xl font-bold rounded-full mb-6 shadow-lg">
                {{ index + 1 }}
              </div>
                          </div>

            <!-- Step content -->
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ $t(step.title) }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t(step.description) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div class="max-w-4xl mx-auto px-3 sm:px-5 lg:px-7 text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          {{ $t('join.contact.title') }}
        </h2>
        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
          {{ $t('join.contact.subtitle') }}
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-8 text-left">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 class="font-bold text-lg mb-3">{{ $t('join.contact.emailLabel') }}</h3>
            <div class="email-tag email-tag--glass">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>malt [at] pku.edu.cn</span>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 class="font-bold text-lg mb-3">{{ $t('join.contact.locationLabel') }}</h3>
            <p class="text-blue-100 text-lg flex items-start">
              <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {{ $t('join.contact.address') }}
            </p>
          </div>
        </div>

        <a
          href="#"
          class="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
        >
          {{ $t('join.contact.getInTouch') }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expandedPosition = ref(null)

// Join reasons
const joinReasons = [
  {
    id: 1,
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    title: 'join.reasons.research.title',
    description: 'join.reasons.research.description'
  },
  {
    id: 2,
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'join.reasons.team.title',
    description: 'join.reasons.team.description'
  },
  {
    id: 3,
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'join.reasons.impact.title',
    description: 'join.reasons.impact.description'
  },
  {
    id: 4,
    icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
    title: 'join.reasons.growth.title',
    description: 'join.reasons.growth.description'
  }
]

// Open positions
const openPositions = [
  {
    id: 1,
    type: 'research_assistant',
    typeLabel: 'join.positions.types.research_assistant',
    locationLabel: 'join.positions.locations.remote',
    title: 'join.positions.description',
    description: 'join.positions.description',
    tags: ['AI for Healthcare', 'Research Assistant'],
    requirements: [
      'Undergraduate or Master\'s student in Computer Science, AI, or related fields',
      'Strong interest in AI for Healthcare research',
      'Programming skills in Python and machine learning frameworks',
      'Good academic standing and research potential'
    ],
    responsibilities: [
      'Assist in medical AI research projects',
      'Data processing and model development',
      'Literature review and experimental evaluation',
      'Collaborate with PhD students and postdoctoral researchers'
    ]
  }
]

// Application process
const applicationProcess = [
  {
    id: 1,
    title: 'join.process.steps.apply.title',
    description: 'join.process.steps.apply.description'
  },
  {
    id: 2,
    title: 'join.process.steps.review.title',
    description: 'join.process.steps.review.description'
  },
  {
    id: 3,
    title: 'join.process.steps.interview.title',
    description: 'join.process.steps.interview.description'
  },
  {
    id: 4,
    title: 'join.process.steps.decision.title',
    description: 'join.process.steps.decision.description'
  }
]

// Methods
const getPositionTypeColor = (type) => {
  const colors = {
    research_assistant: 'bg-blue-100 text-blue-800',
    postdoc: 'bg-purple-100 text-purple-800',
    phd: 'bg-blue-100 text-blue-800',
    master: 'bg-green-100 text-green-800',
    intern: 'bg-yellow-100 text-yellow-800',
    fulltime: 'bg-red-100 text-red-800'
  }
  return colors[type] || 'bg-gray-100 text-gray-800'
}
</script>