<template>
  <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 relative" :class="{'border-2 border-purple-500': person.isCenterDirector, 'border-2 border-blue-500': person.isLabDirector, 'border border-gray-200': !person.isCenterDirector && !person.isLabDirector}">
    <!-- Research Center Director Badge -->
    <div v-if="person.isCenterDirector" class="absolute -top-3 left-1/2 transform -translate-x-1/2">
      <span class="bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
        {{ $t('people.centerDirector') }}
      </span>
    </div>

    <!-- Lab Director Badge -->
    <div v-else-if="person.isLabDirector" class="absolute -top-3 left-1/2 transform -translate-x-1/2">
      <span class="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
        {{ $t('people.labDirector') }}
      </span>
    </div>

    <!-- Core Member Badge -->
    <div v-else-if="person.isCoreMember" class="absolute -top-3 left-1/2 transform -translate-x-1/2">
      <span class="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
        {{ $t('people.coreMember') }}
      </span>
    </div>

    <div class="text-center" :class="{'mt-4': person.isCenterDirector || person.isLabDirector || person.isCoreMember}">
      <img
        :src="person.image || '/images/team/default-avatar.svg'"
        :alt="person.name"
        class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        :class="{'ring-4 ring-purple-500 ring-opacity-50': person.isCenterDirector, 'ring-4 ring-blue-500 ring-opacity-50': person.isLabDirector, 'ring-2 ring-green-500 ring-opacity-30': person.isCoreMember}"
      >
      <h3 class="text-lg font-semibold text-gray-900 mb-1" :class="{'text-purple-700': person.isCenterDirector, 'text-blue-700': person.isLabDirector}">
        {{ person.name }}
      </h3>
      <p class="text-blue-600 font-medium text-sm mb-2" :class="{'text-purple-700 font-bold': person.isCenterDirector, 'text-blue-700 font-bold': person.isLabDirector, 'text-green-600': person.isCoreMember}">
        {{ person.title }}
      </p>
      <p class="text-gray-600 text-sm">
        {{ person.department }}
      </p>

      <div v-if="person.email" class="mt-4">
        <a
          :href="`mailto:${person.email}`"
          class="text-blue-600 hover:text-blue-700 text-sm"
        >
          {{ person.email }}
        </a>
      </div>

      <div v-if="person.research" class="mt-3">
        <p class="text-gray-700 text-xs leading-relaxed">
          {{ person.research }}
        </p>
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