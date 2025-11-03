<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          {{ $t('home.contact.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ $t('home.contact.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-gray-50 p-8 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            {{ $t('home.contact.lab_info') }}
          </h3>
          <div class="space-y-3">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-5 h-5 bg-blue-600 rounded-full" />
              </div>
              <p class="ml-3 text-gray-700">
                {{ $t('home.contact.address') }}
              </p>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-5 h-5 bg-blue-600 rounded-full" />
              </div>
              <p class="ml-3 text-gray-700">
                {{ $t('home.contact.email') }}
              </p>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-5 h-5 bg-blue-600 rounded-full" />
              </div>
              <p class="ml-3 text-gray-700">
                {{ $t('home.contact.phone') }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-blue-100 bg-opacity-50 p-8 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            {{ $t('home.contact.join_us') }}
          </h3>
          <p class="text-gray-700 mb-4">
            {{ $t('home.contact.recruitment') }}
          </p>
          <button class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            {{ $t('home.contact.learn_more') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script>