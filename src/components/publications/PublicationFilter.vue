<template>
  <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
    <div class="flex flex-wrap gap-2">
      <button
        v-for="filter in filters"
        :key="filter.key"
        @click="$emit('filter-change', filter.key)"
        :class="[
          'px-4 py-2 rounded-md text-sm font-medium transition-colors',
          currentFilter === filter.key
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        ]"
      >
        {{ $t(`publications.filter.${filter.key}`) }}
      </button>
    </div>

    <div class="relative w-full sm:w-auto">
      <input
        type="text"
        :placeholder="$t('publications.search')"
        :value="searchQuery"
        @input="$emit('search-change', $event.target.value)"
        class="w-full sm:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600 text-sm"
      >
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicationFilter',
  props: {
    currentFilter: {
      type: String,
      default: 'all'
    },
    searchQuery: {
      type: String,
      default: ''
    }
  },
  emits: ['filter-change', 'search-change'],
  data() {
    return {
      filters: [
        { key: 'all' },
        { key: 'featured' },
        { key: 'conference' },
        { key: 'journal' }
      ]
    }
  }
}
</script>