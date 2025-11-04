<template>
  <div class="academic-card rounded-lg flex-1 overflow-hidden flex flex-col animate-scale-in">
    <!-- Filter Section -->
    <PublicationFilter
      v-model:search-query="searchQuery"
      v-model:selected-year="selectedYear"
      v-model:selected-tag="selectedTag"
      :available-years="availableYears"
      :publication-tags="publicationTags"
      :featured-count="featuredPublications.length"
      :all-count="allPublications.length"
    />

    <!-- Publication List -->
    <div class="flex-1 overflow-y-auto scrollable-container p-6 lg:p-8 pt-1 lg:pt-1">
      <div v-if="filteredPublications.length > 0" class="space-y-2">
        <PublicationItem
          v-for="pub in filteredPublications"
          :key="pub.id"
          :publication="pub"
          :authors="buildAuthors(pub.authors, pub.firstAuthors, pub.correspondingAuthors)"
        />
      </div>
      <div v-else class="text-center py-16">
        <p class="text-gray-500 text-lg">
          No matching publications found.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PublicationFilter from '@/components/publications/PublicationFilter.vue'
import PublicationItem from '@/components/publications/PublicationItem.vue'
import { allPublications, authorLinks } from '@/data/publications.js'

const searchQuery = ref('')
const selectedYear = ref('')
const selectedTag = ref('')

const featuredPublications = computed(() => {
  return allPublications.filter(pub => pub.featured)
})

const availableYears = computed(() => {
  const years = [...new Set(allPublications.map(p => p.year).filter(Boolean))]
  return years.sort((a, b) => b.localeCompare(a))
})

const publicationTags = computed(() => {
  const tagCounts = {}
  allPublications.forEach(pub => {
    if (pub.tag) tagCounts[pub.tag] = (tagCounts[pub.tag] || 0) + 1
  })

  const tags = Object.entries(tagCounts).map(([name, count]) => ({ name, count }))

  const sortOrder = ['LLM Agents for Healthcare', 'LLM for Healthcare', 'Healthcare Benchmark', 'Healthcare Modeling', 'Trustworthy AI', 'Toolkits & Platforms']
  const otherTopicsTag = 'Other Topics'

  return tags.sort((a, b) => {
    if (a.name === otherTopicsTag) return 1
    if (b.name === otherTopicsTag) return -1
    const indexA = sortOrder.indexOf(a.name)
    const indexB = sortOrder.indexOf(b.name)
    if (indexA !== -1 && indexB !== -1) return indexA - indexB
    if (indexA !== -1) return -1
    if (indexB !== -1) return 1
    return b.count - a.count
  })
})

const filteredPublications = computed(() => {
  let publications
  if (selectedTag.value === 'All') {
    publications = allPublications
  } else if (selectedTag.value === '') {
    publications = featuredPublications.value
  } else {
    publications = allPublications.filter(pub => pub.tag === selectedTag.value)
  }

  publications = publications.filter(pub => {
    const searchContent = `${pub.title} ${pub.authors} ${pub.venue}`.toLowerCase()
    const matchesSearch = !searchQuery.value || searchContent.includes(searchQuery.value.toLowerCase())
    const matchesYear = !selectedYear.value || pub.year === selectedYear.value
    return matchesSearch && matchesYear
  })

  return publications.sort((a, b) => {
    if (a.year !== b.year) return b.year.localeCompare(a.year)
    const aPublished = isPublished(a.venue)
    const bPublished = isPublished(b.venue)
    if (aPublished !== bPublished) return aPublished ? -1 : 1
    const aPriority = getVenueTypePriority(a.venue)
    const bPriority = getVenueTypePriority(b.venue)
    if (aPriority !== bPriority) return aPriority - bPriority
    return a.title.localeCompare(b.title)
  })
})

const getVenueTypePriority = (venue) => {
  if (!venue) return 4
  const venueLower = venue.toLowerCase()
  if (venueLower.includes('arxiv') || venueLower.includes('preprint')) return 4
  if (venueLower.includes('abstract') || venueLower.includes('poster') || venueLower.includes('demo') || venueLower.includes('nominee')) return 3
  if (venueLower.includes('workshop') || venueLower.includes('symposium') || venueLower.includes('summit')) return 2
  return 1
}

const isPublished = (venue) => {
  if (!venue) return false
  const venueLower = venue.toLowerCase()
  return !venueLower.includes('arxiv') && !venueLower.includes('preprint')
}

const buildAuthors = (authorString, firstAuthorsStr = '', correspondingAuthorsStr = '') => {
  if (!authorString) return []
  const names = authorString.split(/,\s*/)
  const firstAuthors = firstAuthorsStr ? firstAuthorsStr.split(',').map(s => s.trim()) : []
  const correspondingAuthors = correspondingAuthorsStr ? correspondingAuthorsStr.split(',').map(s => s.trim()) : []

  return names.map(rawName => {
    const name = rawName.trim()
    return {
      name,
      url: authorLinks[name] || '',
      isFirst: firstAuthors.includes(name),
      isCorresponding: correspondingAuthors.includes(name)
    }
  })
}
</script>

<style scoped>
.academic-card {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(30, 64, 175, 0.08);
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}

@keyframes scaleIn {
  0% { transform: scale(0.98); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.scrollable-container {
  scrollbar-width: thin;
  scrollbar-color: #d1d5db transparent;
}
.scrollable-container::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.scrollable-container::-webkit-scrollbar-track {
  background: transparent;
}
.scrollable-container::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}
.scrollable-container::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>