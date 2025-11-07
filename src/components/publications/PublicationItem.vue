<template>
  <div
    class="border border-gray-200 rounded-lg p-4 bg-white/70 interactive-element interactive-border transition-all duration-200 publication-item"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex-1 min-w-0 publication-content">
        <div class="mb-1">
          <!-- Comment tag as inline element before title -->
          <h4 class="font-semibold text-gray-800 text-base leading-tight">
            <span v-if="publication.comment" class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-md border border-purple-300/50 mr-3 mb-1">
              <svg class="w-3 h-3 mr-1 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {{ publication.comment }}
            </span>
            <span>{{ publication.title }}</span>
          </h4>
        </div>
        <p class="text-sm text-gray-600 leading-relaxed line-clamp-1 mb-1">
          <template v-for="(a, idx) in authors" :key="a.name">
            <template v-if="a.url">
              <a
                :href="a.url"
                target="_blank"
                rel="noopener noreferrer"
                class="author-link hover:text-purple-700 transition-colors duration-200"
                :class="{ 'font-bold text-gray-900': a.name === 'Liantao Ma' }"
              >{{ a.name }}</a>
            </template>
            <template v-else>
              <span :class="{ 'font-bold text-gray-900': a.name === 'Liantao Ma' }">{{ a.name }}</span>
            </template>
            <sup v-if="a.isFirst" class="text-gray-700 font-bold">*</sup>
            <sup v-if="a.isCorresponding" class="text-gray-700 font-bold">†</sup>
            <span v-if="idx < authors.length - 1">, </span>
          </template>
        </p>
        <p class="text-sm text-blue-600 italic font-medium mb-2">
          {{ publication.venue }}
        </p>
        <div class="flex flex-wrap gap-1.5">
          <a
            v-for="link in publication.links"
            :key="link.type"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-2.5 py-1 bg-gray-50 text-gray-700 text-xs rounded-md hover:bg-purple-50 hover:text-purple-700 border border-gray-200 hover:border-purple-200 transition-all duration-200 font-medium"
          >
            {{ link.type }}
            <svg class="w-3 h-3 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        class="flex flex-shrink-0 flex-col items-end gap-1 text-right publication-meta"
      >
        <span class="time-tag">{{ publication.year }}</span>
        <span
          v-if="publication.tag"
          class="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium mt-1"
        >
          {{ publication.tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  publication: {
    type: Object,
    required: true
  },
  authors: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.text-text-gray {
  color: #374151;
}
.text-text-gray-light {
  color: #6b7280;
}
.text-primary-blue {
  color: #1e40af;
}
.bg-bg-secondary {
  background-color: #f1f5f9;
}
.hover\:bg-primary-blue\/10:hover {
  background-color: rgba(30, 64, 175, 0.1);
}
.hover\:text-primary-blue-dark:hover {
  color: #1e3a8a;
}

.time-tag {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: rgba(30, 64, 175, 0.1);
  color: #1e40af;
  font-size: 0.75rem;
  border-radius: 9999px;
  font-weight: 500;
  flex-shrink: 0;
}

.interactive-element {
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out,
    color 0.2s ease-out, box-shadow 0.2s ease-out;
}
.interactive-border:hover {
  border-color: rgba(30, 64, 175, 0.3);
}

/* Responsive styles from template */
@media (max-width: 1023px) or (max-height: 599px) {
  .publication-meta {
    display: none !important;
  }
  .publication-item .publication-content {
    flex: 1 !important;
    margin-right: 0 !important;
  }
}
</style>