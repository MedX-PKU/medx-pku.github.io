import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'

// Handle GitHub Pages SPA routing with clean URLs
// This script checks for a stored redirect from 404.html
(function() {
  var redirect = sessionStorage.getItem('redirect');
  if (redirect) {
    // Clear the stored redirect
    sessionStorage.removeItem('redirect');
    // Replace the URL with the original path
    window.history.replaceState(null, null, redirect);
  }
})();

// 导入语言文件
import en from './locales/en.json'
import zh from './locales/zh.json'

const i18n = createI18n({
  legacy: false,
  locale: typeof localStorage !== 'undefined' ? localStorage.getItem('language') || 'zh' : 'zh',
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
