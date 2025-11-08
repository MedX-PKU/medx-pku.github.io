<template>
  <header class="bg-white shadow-lg sticky top-0 z-50 w-full flex-shrink-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo and Title -->
        <router-link
          to="/"
          class="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-200"
        >
          <img
            src="/images/logo.svg"
            alt="MedX Lab Logo"
            class="h-12 w-12"
          >
          <div>
            <h1 class="text-2xl font-bold text-blue-600">
              {{ $t('nav.labName') }}
            </h1>
            <p class="text-sm text-gray-600">
              {{ $t('nav.subtitle') }}
            </p>
          </div>
        </router-link>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="text-gray-600 hover:text-blue-600 font-medium transition-all duration-200 hover:border-blue-400 py-1 relative"
            active-class="text-blue-600 border-blue-600 font-semibold"
            exact-active-class="text-blue-600 border-blue-600 font-semibold"
          >
            {{ $t(item.label) }}
          </router-link>
        </nav>

        <!-- Language Switcher -->
        <LanguageSwitcher />

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-gray-200 py-4"
      >
        <nav class="flex flex-col space-y-1">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-l-4 border-transparent"
            active-class="text-blue-600 bg-blue-50 border-blue-600 font-semibold"
            exact-active-class="text-blue-600 bg-blue-50 border-blue-600 font-semibold"
            @click="mobileMenuOpen = false"
          >
            {{ $t(item.label) }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import LanguageSwitcher from './LanguageSwitcher.vue'

const mobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'home', path: '/', label: 'nav.home' },
  { name: 'people', path: '/people', label: 'nav.people' },
  { name: 'publications', path: '/publications', label: 'nav.publications' },
  { name: 'news', path: '/news', label: 'nav.news' },
  { name: 'projects', path: '/projects', label: 'nav.projects' },
  { name: 'join', path: '/join', label: 'nav.join' }
]
</script>

