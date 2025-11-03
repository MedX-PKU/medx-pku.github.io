<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center space-x-1 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
    >
      <GlobeAltIcon class="h-4 w-4" />
      <span class="text-sm font-medium">{{ currentLanguage.label }}</span>
      <ChevronDownIcon class="h-4 w-4" />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-10"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200"
        :class="{ 'bg-blue-600 text-white': locale === lang.code }"
      >
        {{ lang.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const { locale } = useI18n()
const isOpen = ref(false)

const languages = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' }
]

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === locale.value) || languages[0]
})

const changeLanguage = (langCode) => {
  locale.value = langCode
  localStorage.setItem('language', langCode)
  isOpen.value = false
}
</script>
