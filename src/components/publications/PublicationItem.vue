<template>
  <div
    class="border border-gray-200 rounded-lg p-4 bg-white/70 interactive-element interactive-border transition-all duration-200 publication-item"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex-1 min-w-0 publication-content">
        <h4 class="font-semibold text-text-gray text-sm mb-1 leading-tight">
          {{ publication.title }}
        </h4>
        <p class="text-xs text-text-gray-light mb-1">
          <template v-for="(a, idx) in authors" :key="a.name">
            <template v-if="a.url">
              <a
                :href="a.url"
                target="_blank"
                rel="noopener noreferrer"
                class="author-link"
              >{{ a.name }}</a>
            </template>
            <template v-else>
              <span>{{ a.name }}</span>
            </template>
            <sup v-if="a.isFirst" class="text-text-gray font-bold">*</sup>
            <sup v-if="a.isCorresponding" class="text-text-gray font-bold">†</sup>
            <span v-if="idx < authors.length - 1">, </span>
          </template>
        </p>
        <p class="text-xs text-primary-blue italic mb-2">
          {{ publication.venue }}
        </p>
        <div class="flex flex-wrap gap-1.5">
          <a
            v-for="link in publication.links"
            :key="link.type"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="px-2.5 py-1 bg-bg-secondary text-text-gray text-xs rounded-full hover:bg-primary-blue/10 hover:text-primary-blue-dark transition-colors duration-200 interactive-element"
          >
            {{ link.type }}
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