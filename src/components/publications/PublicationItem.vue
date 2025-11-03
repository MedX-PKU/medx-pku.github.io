<template>
  <div class="space-y-3">
    <h4 class="font-semibold text-gray-900 leading-tight text-base">
      {{ publication.title }}
    </h4>

    <div class="flex flex-wrap gap-1 text-sm text-gray-600">
      <span v-for="(author, index) in publication.authors" :key="index">
        <span v-if="author.highlight" class="font-medium text-blue-600">{{ author.name }}</span>
        <span v-else class="text-gray-700">{{ author.name }}</span>
        <span v-if="index < publication.authors.length - 1" class="text-gray-400">,</span>
      </span>
    </div>

    <div class="text-sm text-gray-600 border-l-4 border-blue-500 pl-3 py-1 bg-blue-50">
      <span class="font-medium">{{ publication.venue }}</span>
      <span v-if="publication.year" class="text-gray-500 ml-2">({{ publication.year }})</span>
    </div>

    <p v-if="publication.abstract" class="text-sm text-gray-700 line-clamp-3 leading-relaxed">
      {{ publication.abstract }}
    </p>

    <div v-if="publication.tags && publication.tags.length > 0" class="flex flex-wrap gap-2 mt-2">
      <span
        v-for="tag in publication.tags"
        :key="tag"
        class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200"
      >
        {{ tag }}
      </span>
    </div>

    <div class="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
      <a
        v-if="publication.links?.paper"
        :href="publication.links.paper"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded hover:bg-blue-200 transition-colors"
      >
        <svg
          class="w-3 h-3 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        {{ $t('common.paper') }}
      </a>

      <a
        v-if="publication.links?.code"
        :href="publication.links.code"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded hover:bg-green-200 transition-colors"
      >
        <svg
          class="w-3 h-3 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        {{ $t('common.code') }}
      </a>

      <a
        v-if="publication.links?.demo"
        :href="publication.links.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded hover:bg-purple-200 transition-colors"
      >
        <svg
          class="w-3 h-3 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        {{ $t('common.demo') }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicationItem',
  props: {
    publication: {
      type: Object,
      required: true
    }
  }
}
</script>