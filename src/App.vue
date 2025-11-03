<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import Header from '@/components/common/Header.vue'
import AppFooter from '@/components/common/Footer.vue'
</script>
