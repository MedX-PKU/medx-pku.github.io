<template>
  <section class="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          {{ $t('home.hero.title') }}
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          {{ $t('home.hero.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <router-link
            to="/publications"
            class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            {{ $t('home.hero.cta1') }}
          </router-link>
          <router-link
            to="/people"
            class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
          >
            {{ $t('home.hero.cta2') }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
