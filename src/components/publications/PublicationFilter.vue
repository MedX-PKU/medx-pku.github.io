<template>
  <div class="border-b border-primary-blue/10">
    <!-- Filter Toggle Button -->
    <div class="p-4 lg:p-6 pb-2 lg:pb-3">
      <button
        class="flex items-center justify-between w-full text-left hover:bg-bg-secondary/50 rounded-lg px-3 py-2 transition-colors duration-200"
        @click="filterExpanded = !filterExpanded"
      >
        <div class="flex items-center gap-2">
          <svg
            class="w-5 h-5 text-primary-blue transition-transform duration-200"
            :class="{ 'rotate-180': filterExpanded }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span class="text-base font-medium text-text-gray">Filters</span>
        </div>
        <span class="text-sm text-text-gray-light">
          {{ filterExpanded ? "Hide" : "Show" }}
        </span>
      </button>
    </div>

    <!-- Collapsible Filter Content -->
    <div v-show="filterExpanded" class="px-4 lg:px-6 pb-4 lg:pb-5">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div class="flex items-center gap-2 flex-1 min-w-0">
          <input
            class="flex-1 min-w-[200px] px-3 py-2 border border-primary-blue/30 rounded-md text-base focus:ring-1 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
            type="text"
            :value="searchQuery"
            placeholder="Search publications..."
            @input="emit('update:searchQuery', $event.target.value)"
          >
          <select
            class="px-3 py-2 border border-primary-blue/30 rounded-md text-base focus:ring-1 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 flex-shrink-0"
            :value="selectedYear"
            @change="emit('update:selectedYear', $event.target.value)"
          >
            <option value="">
              All Years
            </option>
            <option
              v-for="year in availableYears"
              :key="year"
              :value="year"
            >
              {{ year }}
            </option>
          </select>
        </div>
        <div class="text-sm text-text-gray-light space-x-3 lg:space-x-4 hidden sm:block">
          <span>
            <sup class="text-text-gray font-bold">*</sup> Co-first author
          </span>
          <span>
            <sup class="text-text-gray font-bold">†</sup> Corresponding author
          </span>
        </div>
      </div>
      <div class="flex flex-wrap gap-1.5">
        <button
          class="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 interactive-element flex items-center"
          :class="selectedTag === ''
            ? 'bg-primary-blue text-white'
            : 'bg-bg-light text-text-gray hover:bg-primary-blue/10'"
          @click="emit('update:selectedTag', '')"
        >
          <span>Featured</span>
          <span class="ml-1 opacity-75">({{ featuredCount }})</span>
        </button>
        <button
          class="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 interactive-element flex items-center"
          :class="selectedTag === 'All'
            ? 'bg-primary-blue text-white'
            : 'bg-bg-light text-text-gray hover:bg-primary-blue/10'"
          @click="emit('update:selectedTag', 'All')"
        >
          <span>All</span>
          <span class="ml-1 opacity-75">({{ allCount }})</span>
        </button>
        <button
          v-for="tag in publicationTags"
          :key="tag.name"
          class="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 interactive-element flex items-center"
          :class="selectedTag === tag.name
            ? 'bg-primary-blue text-white'
            : 'bg-bg-light text-text-gray hover:bg-primary-blue/10'"
          @click="emit('update:selectedTag', selectedTag === tag.name ? 'All' : tag.name)"
        >
          <span>{{ tag.name }}</span>
          <span class="ml-1 opacity-75">({{ tag.count }})</span>
        </button>
      </div>
      <!-- Mobile legend -->
      <div class="text-sm text-text-gray-light space-x-3 mt-3 sm:hidden">
        <span>
          <sup class="text-text-gray font-bold">*</sup> Co-first author
        </span>
        <span>
          <sup class="text-text-gray font-bold">†</sup> Corresponding author
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  searchQuery: {
    type: String,
    required: true
  },
  selectedYear: {
    type: String,
    required: true
  },
  selectedTag: {
    type: String,
    required: true
  },
  availableYears: {
    type: Array,
    required: true
  },
  publicationTags: {
    type: Array,
    required: true
  },
  featuredCount: {
    type: Number,
    required: true
  },
  allCount: {
    type: Number,
    required: true
  }
})

const emit = defineEmits([
  'update:searchQuery',
  'update:selectedYear',
  'update:selectedTag'
])

const filterExpanded = ref(true)
</script>

<style scoped>
.bg-primary-blue {
  background-color: #1e40af;
}

.text-white {
  color: #fff;
}

.bg-bg-light {
  background-color: #f8fafc;
}

.text-text-gray {
  color: #374151;
}

.hover\:bg-primary-blue\/10:hover {
  background-color: rgba(30, 64, 175, 0.1);
}

.border-primary-blue\/10 {
  border-color: rgba(30, 64, 175, 0.1);
}

.border-primary-blue\/30 {
  border-color: rgba(30, 64, 175, 0.3);
}

.focus\:ring-primary-blue:focus {
  --tw-ring-color: #1e40af;
}

.focus\:border-primary-blue:focus {
  border-color: #1e40af;
}

.text-primary-blue {
  color: #1e40af;
}

.hover\:bg-bg-secondary\/50:hover {
  background-color: rgba(241, 245, 249, 0.5);
}

.text-text-gray-light {
  color: #6b7280;
}

.interactive-element {
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out,
    color 0.2s ease-out, box-shadow 0.2s ease-out;
}
</style>
