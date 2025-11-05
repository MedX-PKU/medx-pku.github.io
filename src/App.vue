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
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/common/Header.vue'
import AppFooter from '@/components/common/Footer.vue'

const router = useRouter()

// Handle GitHub Pages SPA routing with clean URLs
onMounted(() => {
  const redirect = sessionStorage.getItem('redirect')
  if (redirect && redirect !== '/') {
    // Clear the stored redirect
    sessionStorage.removeItem('redirect')
    // Navigate to the intended route
    router.replace(redirect)
  }
})
</script>
