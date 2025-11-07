<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-transparent"></div>
    <div class="absolute top-10 right-10 w-32 h-32 bg-blue-100/20 rounded-full blur-xl"></div>
    <div class="absolute bottom-10 left-10 w-40 h-40 bg-blue-100/20 rounded-full blur-xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mb-6 shadow-md">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          {{ $t('home.contact.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          {{ $t('home.contact.subtitle') }}
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
      </div>

      <!-- Contact Content -->
      <div class="max-w-2xl mx-auto">

        <!-- Join Us -->
        <div class="group bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden text-white relative">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- Background pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            <div class="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
          </div>

          <div class="relative p-8">
            <div class="flex items-center mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white ml-4">
                {{ $t('home.contact.join_us') }}
              </h3>
            </div>

            <p class="text-blue-100 mb-8 leading-relaxed">
              {{ $t('home.contact.recruitment') }}
            </p>

            <div class="space-y-4">
              <div class="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <h4 class="font-semibold text-white mb-2">开放职位</h4>
                <ul class="space-y-2 text-sm text-blue-100">
                  <li class="flex items-center">
                    <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                    研究助理 (本科实习生)
                  </li>
                  <li class="flex items-center">
                    <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                    研究助理 (硕士实习生)
                  </li>
                </ul>
                <div class="mt-4 p-3 bg-white/5 rounded-lg">
                  <p class="text-xs text-blue-100 mb-2">💡 工作模式：Remote 远程</p>
                  <p class="text-xs text-blue-100">🎯 研究方向：AI for Healthcare</p>
                </div>
                <div class="mt-4 p-3 bg-white/5 rounded-lg">
                  <p class="text-xs text-blue-100 font-semibold mb-1">申请流程：</p>
                  <p class="text-xs text-blue-100">发送 CV 至邮箱 malt [at] pku.edu.cn</p>
                </div>
              </div>

              <router-link
                to="/join"
                class="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {{ $t('home.contact.learn_more') }}
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </router-link>
            </div>
          </div>
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