import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'

// Handle GitHub Pages SPA routing
// This code handles the redirect from 404.html for GitHub Pages
(function() {
  var search = window.location.search;
  if (search && search[1] === 'p') {
    var path = search.slice(3).replace(/~and~/g, '&');
    var query = '';
    var hash = '';

    // Extract query string if present
    var qIndex = path.indexOf('&q=');
    if (qIndex !== -1) {
      query = path.slice(qIndex + 3).replace(/~and~/g, '&');
      path = path.slice(0, qIndex);
    }

    // Extract hash if present
    var hashIndex = path.indexOf('#');
    if (hashIndex !== -1) {
      hash = path.slice(hashIndex);
      path = path.slice(0, hashIndex);
    }

    // Build the new URL
    var newUrl = window.location.origin + path;
    if (query) {
      newUrl += '?' + query;
    }
    if (hash) {
      newUrl += hash;
    }

    // Replace the URL in the history
    window.history.replaceState(null, null, newUrl);
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
