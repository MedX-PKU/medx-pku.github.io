<template>
  <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
    <div class="text-center">
      <img
        :src="person.image || '/images/team/default-avatar.svg'"
        :alt="person.name"
        class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      >
      <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ person.name }}</h3>
      <p class="text-blue-600 font-medium text-sm mb-2">{{ person.title }}</p>
      <p class="text-gray-600 text-sm">{{ person.department }}</p>

      <div v-if="person.email" class="mt-4">
        <a
          :href="`mailto:${person.email}`"
          class="text-blue-600 hover:text-blue-700 text-sm"
        >
          {{ person.email }}
        </a>
      </div>

      <div v-if="person.research" class="mt-3">
        <p class="text-gray-700 text-xs leading-relaxed">{{ person.research }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>