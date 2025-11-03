<template>
  <div class="space-y-6">
    <!-- Search Bar -->
    <div class="relative">
      <input
        type="text"
        :placeholder="$t('publications.search')"
        :value="searchQuery"
        class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-base"
        @input="$emit('update:search', $event.target.value)"
      >
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg
          class="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>

    <!-- Filter Tags -->
    <div class="flex flex-wrap gap-3">
      <!-- Year Filters -->
      <div class="flex items-center gap-2">
        <span class="text-sm font-medium text-gray-700">{{ $t('publications.year') || 'Year' }}:</span>
        <select
          :value="year"
          class="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-600 focus:border-blue-600"
          @change="$emit('update:year', $event.target.value)"
        >
          <option value="">
            {{ $t('publications.allYears') || 'All Years' }}
          </option>
          <option v-for="y in years" :key="y" :value="y">
            {{ y }}
          </option>
        </select>
      </div>

      <!-- Type Filters -->
      <div class="flex items-center gap-2">
        <span class="text-sm font-medium text-gray-700">{{ $t('publications.type') || 'Type' }}:</span>
        <select
          :value="type"
          class="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-600 focus:border-blue-600"
          @change="$emit('update:type', $event.target.value)"
        >
          <option value="">
            {{ $t('publications.allTypes') || 'All Types' }}
          </option>
          <option v-for="t in types" :key="t" :value="t">
            {{ $t(`publications.type.${t}`) || t }}
          </option>
        </select>
      </div>

      <!-- Tag Filters -->
      <div class="flex flex-wrap gap-2">
        <span class="text-sm font-medium text-gray-700 w-full">{{ $t('publications.tags') || 'Tags' }}:</span>
        <button
          v-for="tagItem in tags"
          :key="tagItem"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border',
            tag === tagItem
              ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
          ]"
          @click="$emit('update:tag', tag === tagItem ? '' : tagItem)"
        >
          {{ tagItem }}
        </button>
      </div>
    </div>

    <!-- Active Filters Display -->
    <div v-if="hasActiveFilters" class="flex flex-wrap gap-2 items-center">
      <span class="text-sm text-gray-600">{{ $t('publications.activeFilters') || 'Active filters:' }}</span>
      <span
        v-if="year"
        class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
      >
        {{ $t('publications.year') || 'Year' }}: {{ year }}
        <button
          class="ml-2 text-blue-600 hover:text-blue-800"
          @click="$emit('update:year', '')"
        >
          ×
        </button>
      </span>
      <span
        v-if="type"
        class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
      >
        {{ $t('publications.type') || 'Type' }}: {{ $t(`publications.type.${type}`) || type }}
        <button
          class="ml-2 text-green-600 hover:text-green-800"
          @click="$emit('update:type', '')"
        >
          ×
        </button>
      </span>
      <span
        v-if="tag"
        class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
      >
        {{ $t('publications.tag') || 'Tag' }}: {{ tag }}
        <button
          class="ml-2 text-purple-600 hover:text-purple-800"
          @click="$emit('update:tag', '')"
        >
          ×
        </button>
      </span>
      <button
        class="text-sm text-gray-500 hover:text-gray-700 underline"
        @click="clearAllFilters"
      >
        {{ $t('publications.clearAll') || 'Clear all' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicationFilter',
  props: {
    search: {
      type: String,
      default: ''
    },
    year: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    years: {
      type: Array,
      default: () => []
    },
    types: {
      type: Array,
      default: () => []
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:search', 'update:year', 'update:type', 'update:tag'],
  computed: {
    searchQuery() {
      return this.search
    },
    hasActiveFilters() {
      return this.year || this.type || this.tag || this.searchQuery
    }
  },
  methods: {
    clearAllFilters() {
      this.$emit('update:search', '')
      this.$emit('update:year', '')
      this.$emit('update:type', '')
      this.$emit('update:tag', '')
    }
  }
}
</script>