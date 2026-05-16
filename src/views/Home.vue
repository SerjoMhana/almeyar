<template>
  <div class="home-page">
    <!-- Premium Modern Animated Hero Section -->
    <section class="hero-section relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      
      <!-- Background Slider -->
      <div 
        v-for="(image, index) in heroImages" 
        :key="'hero-img-' + index"
        class="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
        :class="currentHeroIndex === index ? 'opacity-100 z-0' : 'opacity-0 z-0'"
      >
        <img
          :src="image"
          alt="Electromechanical Services"
          class="w-full h-full object-cover scale-animate"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :fetchpriority="index === 0 ? 'high' : 'auto'"
        />
      </div>

      <!-- Advanced Overlay Gradients -->
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-blue-900/30 z-0"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent z-0"></div>
      
      <!-- Decorative Blurred Glow Shapes -->
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3 z-0"></div>

      <div class="relative z-10 max-w-screen-xl mx-auto px-4 py-20 lg:py-28 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <!-- Left: Text Content -->
        <div class="w-full lg:w-3/5 text-center lg:text-right rtl:lg:text-right ltr:lg:text-left">
          
          <!-- Glassmorphic Glowing Badge -->
          <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)] mb-8 transform hover:scale-105 transition-transform duration-300">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_#60a5fa]"></span>
            <span class="text-blue-100 text-sm md:text-base font-bold tracking-widest uppercase">
              {{ t('home.heroDescription').split('.')[0] }}
            </span>
          </div>

          <!-- Master Title with Gradient Clip -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.2] mb-6 drop-shadow-2xl">
            <span class="bg-clip-text text-transparent bg-gradient-to-l from-white via-blue-100 to-indigo-300">
              {{ t('home.heroTitle') }}
            </span>
          </h1>
          
          <p class="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed rtl:border-r-4 rtl:pl-0 rtl:pr-6 border-l-4 border-blue-500 pl-6 border-blue-500/80">
            {{ t('home.heroDescription') }}
          </p>

          <!-- Interactive Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
            <a href="#about" class="group relative inline-flex items-center justify-center">
              <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <span class="relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-4.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-[0_10px_40px_-10px_rgba(37,99,235,0.8)] overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1">
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-64 group-hover:h-56 opacity-10"></span>
                {{ t('home.learnMore') }}
                <svg class="w-5 h-5 ml-3 rtl:mr-3 rtl:ml-0 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              </span>
            </a>
            <a href="#contact" class="group inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-4.5 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white font-bold text-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transform hover:-translate-y-1">
              {{ t('home.contactUs') }}
            </a>
          </div>
        </div>

        <!-- Right: Floating Decorative Elements (Hidden on Mobile) -->
        <div class="hidden lg:block w-2/5 relative h-[500px]">
          <div class="absolute inset-0 flex items-center justify-center">
            
            <!-- Glass Card 1 (Experience) -->
            <div class="absolute right-0 top-10 w-64 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-3 animate-float-slow z-20 hover:scale-105 transition-transform cursor-default">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shadow-inner">
                  <svg class="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h4 class="text-white font-bold text-xl">{{ t('home.yearsExperience') || 'ط®ط¨ط±ط© ط·ظˆظٹظ„ط©' }}</h4>
                  <p class="text-blue-200 text-sm font-medium">{{ currentLanguage === 'ar' ? '15+ سنوات' : '15+ years' }}</p>
                </div>
              </div>
              <div class="w-full h-2.5 bg-white/10 rounded-full overflow-hidden shadow-inner">
                <div class="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-4/5 pt-1"></div>
              </div>
            </div>

            <!-- Glass Card 2 (Projects) -->
            <div class="absolute -left-10 bottom-24 w-72 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform -rotate-3 animate-float-delayed z-10 hover:scale-105 transition-transform cursor-default">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shadow-inner">
                  <span class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-white">500</span>
                  <span class="text-2xl font-bold text-indigo-300 ml-0.5">+</span>
                </div>
                <div>
                  <h4 class="text-white font-bold text-lg leading-tight">{{ t('home.projectsCompleted') || 'مشاريع منجزة' }}</h4>
                  <p class="text-indigo-200 text-sm font-medium mt-1">{{ currentLanguage === 'ar' ? 'مكتملة بنجاح' : 'completed successfully' }}</p>
                </div>
              </div>
            </div>
            
            <!-- Technical Abstract Rings -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[1.5px] border-dashed border-blue-400/30 rounded-full animate-spin-slow"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-indigo-400/20 rounded-full animate-spin-reverse-slow"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-300/10 rounded-full"></div>
            
          </div>
        </div>
      </div>

      <!-- Organic Bottom Divider -->
      <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20 rotate-180">
        <svg class="block w-full h-12 md:h-24 text-white dark:text-gray-900 drop-shadow-md" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>

    <!-- About Section - ط´ط¨ظƒط© طµظˆط± ظ…ظ† ط£طµظˆظ„ظ†ط§ -->
    <section id="about" class="py-20 lg:py-28 bg-white dark:bg-gray-900 relative">
      <div class="max-w-screen-xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="about-images order-2 lg:order-1">
            <div class="grid grid-cols-2 gap-3 md:gap-4">
              <div class="space-y-3 md:space-y-4">
                <div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img :src="assetImages[1]" alt="Project" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img :src="assetImages[2]" alt="Project" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div class="space-y-3 md:space-y-4 pt-8">
                <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img :src="assetImages[3]" alt="Project" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img :src="assetImages[4]" alt="Project" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('home.aboutTitle') }}</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
              {{ t('home.aboutTitle') }}
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {{ t('home.aboutDescription') }}
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="stat-card rounded-xl p-5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <div class="text-2xl md:text-3xl font-bold text-blue-600">15+</div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">{{ t('home.yearsExperience') }}</div>
              </div>
              <div class="stat-card rounded-xl p-5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <div class="text-2xl md:text-3xl font-bold text-blue-600">500+</div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">{{ t('home.projectsCompleted') }}</div>
              </div>
              <div class="stat-card rounded-xl p-5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <div class="text-2xl md:text-3xl font-bold text-blue-600">50+</div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">{{ t('home.expertEngineers') }}</div>
              </div>
              <div class="stat-card rounded-xl p-5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <div class="text-2xl md:text-3xl font-bold text-blue-600">24/7</div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">{{ t('home.support') }}</div>
              </div>
            </div>
            <router-link to="/about" class="inline-flex items-center px-6 py-3.5 text-base font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors">
              {{ t('home.readMore') }}
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section - ظƒط±ظˆطھ ط¨ط®ظ„ظپظٹط§طھ طµظˆط± -->
    <section class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-screen-xl mx-auto px-4">
        <div class="text-center mb-14">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('home.ourServices') }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            {{ t('home.ourServices') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ t('home.servicesDescription') }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="(service, index) in servicesWithImages"
            :key="service.id"
            class="service-card group relative rounded-2xl overflow-hidden min-h-[320px] shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              :src="service.image"
              :alt="service.title"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-gray-900/30"></div>
            <div class="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
              <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                <svg v-if="service.id === 1" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                <svg v-else-if="service.id === 2" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.548-.952 3.388-.952 4.936 0 1.548.952 2.388 2.914 1.44 4.462l-2.06 2.06a1.724 1.724 0 00-.48 1.855l2.41 5.79a1.724 1.724 0 01-.94 2.155l-5.79 2.41a1.724 1.724 0 01-2.155-.94l-2.06-2.06a1.724 1.724 0 00-1.855-.48l-2.41 2.41a1.724 1.724 0 01-2.155.94l-5.79-2.41a1.724 1.724 0 01-.94-2.155l2.41-5.79a1.724 1.724 0 00-.48-1.855l-2.06-2.06c-.952-1.548-.952-3.388 0-4.936a1.724 1.724 0 011.066-2.573c1.756-.426 3.714.952 4.462 2.41l2.06 2.06a1.724 1.724 0 001.855.48l2.41-2.41z"></path></svg>
                <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.548-.952 3.388-.952 4.936 0 1.548.952 2.388 2.914 1.44 4.462l-2.06 2.06M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 9a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">{{ service.title }}</h3>
              <p class="text-gray-200 text-sm md:text-base leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Projects - ط´ط¨ظƒط© ظ…ط´ط§ط±ظٹط¹ ط¨طµظˆط± ط§ظ„ط£طµظˆظ„ -->
    <section class="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl mx-auto px-4">
        <div class="text-center mb-14">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('home.latestProjects') }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            {{ t('home.latestProjects') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ t('home.latestProjectsDesc') }}
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="(project, index) in latestProjects"
            :key="project.id"
            class="project-card group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <span class="text-sm font-medium text-blue-600">{{ project.category }}</span>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{{ project.description }}</p>
              <router-link :to="'/portfolio'" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/link">
                {{ t('home.viewDetails') }}
                <svg class="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </router-link>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <router-link to="/portfolio" class="inline-flex items-center px-6 py-3.5 text-base font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
            {{ t('home.viewAllProjects') }}
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Gallery Strip - ط´ط±ظٹط· ظ…ط¹ط§ظٹظ†ط© ظ…ظ† ط§ظ„ظ…ط¹ط±ط¶ -->
    <section class="py-12 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      <div class="max-w-screen-xl mx-auto px-4 mb-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('navigation.gallery') }}</h2>
            <p class="text-gray-600 dark:text-gray-400">{{ t('home.latestProjectsDesc') }}</p>
          </div>
          <router-link to="/gallery" class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
            {{ t('home.viewAllProjects') }}
            <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </router-link>
        </div>
      </div>
      <div class="flex gap-4 animate-scroll-left">
        <div class="flex gap-4 flex-shrink-0">
          <div v-for="(img, i) in galleryStripImages" :key="'a-'+i" class="w-64 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
            <img :src="img" alt="Gallery" class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="flex gap-4 flex-shrink-0" aria-hidden="true">
          <div v-for="(img, i) in galleryStripImages" :key="'b-'+i" class="w-64 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
            <img :src="img" alt="" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="py-16 lg:py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div class="max-w-screen-xl mx-auto px-4">
        <div class="text-center mb-12">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('home.successPartners') }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            {{ t('home.successPartners') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ t('home.partnersDescription') }}
          </p>
        </div>
        <div class="overflow-hidden py-4">
          <div class="flex animate-marquee whitespace-nowrap w-max">
            <div v-for="partner in partners" :key="partner.id" class="mx-10 flex-shrink-0 flex items-center justify-center h-14 w-32 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
              <img :src="partner.logo" alt="logo" class="partner-logo mx-auto">
            </div>
            <div v-for="partner in partners" :key="'dup-'+partner.id" class="mx-10 flex-shrink-0 flex items-center justify-center h-14 w-32 grayscale opacity-70 transition-all duration-300" aria-hidden="true">
              <img :src="partner.logo" alt="logo" class="partner-logo mx-auto">
            
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { translations, getCurrentLanguage } from '../translations'
import ele1Img from '../assets/ele1.jpg'
import ele2Img from '../assets/ele2.jpg'
import ele3Img from '../assets/ele3.jpg'
import ele4Img from '../assets/ele4.jpg'

const currentLanguage = computed(() => getCurrentLanguage())

const t = (key) => {
  const keys = key.split('.')
  let value = translations[currentLanguage.value]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}

// طھط­ظ…ظٹظ„ طµظˆط± ظ…ظ† ظ…ط¬ظ„ط¯ assets
const imageModules = import.meta.glob('../assets/*.jpeg', { eager: true, query: '?url', import: 'default' })
const assetImages = computed(() => Object.values(imageModules).filter(Boolean))

const heroImages = [ele1Img, ele2Img, ele3Img, ele4Img]
const currentHeroIndex = ref(0)
let heroInterval;

onMounted(() => {
  heroInterval = setInterval(() => {
    currentHeroIndex.value = (currentHeroIndex.value + 1) % heroImages.length
  }, 5000)
})

onUnmounted(() => {
  if (heroInterval) clearInterval(heroInterval)
})

const servicesWithImages = computed(() => [
  {
    id: 1,
    title: t('home.electricalSupply'),
    desc: t('home.electricalSupplyDesc'),
    image: assetImages.value[5] || assetImages.value[0]
  },
  {
    id: 2,
    title: t('home.mechanicalInstallation'),
    desc: t('home.mechanicalInstallationDesc'),
    image: assetImages.value[6] || assetImages.value[1]
  },
  {
    id: 3,
    title: t('home.maintenance'),
    desc: t('home.maintenanceDesc'),
    image: assetImages.value[7] || assetImages.value[2]
  }
])

const latestProjects = computed(() => {
  const imgs = assetImages.value
  return [
    { id: 1, title: t('home.project1'), description: t('home.project1Desc'), category: t('home.industrial'), image: imgs[8] || imgs[0] },
    { id: 2, title: t('home.project2'), description: t('home.project2Desc'), category: t('home.commercial'), image: imgs[9] || imgs[1] },
    { id: 3, title: t('home.project3'), description: t('home.project3Desc'), category: t('home.residential'), image: imgs[10] || imgs[2] }
  ]
})

const galleryStripImages = computed(() => assetImages.value.slice(0, 10))

const partners = computed(() => [
  { id: 1, logo: new URL('../assets/Logos/ABB.png', import.meta.url).href },
  { id: 2, logo: new URL('../assets/Logos/CHINT.jpeg', import.meta.url).href },
  { id: 3, logo: new URL('../assets/Logos/EATON.png', import.meta.url).href },
  { id: 4, logo: new URL('../assets/Logos/GIS.png', import.meta.url).href },
  { id: 5, logo: new URL('../assets/Logos/schneider.png', import.meta.url).href }
])
</script>

<style scoped>
.home-page {
  font-family: 'Tajawal', sans-serif;
}

.hero-section .scale-animate {
  animation: scaleIn 20s ease-in-out infinite alternate;
}

@keyframes scaleIn {
  from { transform: scale(1); }
  to { transform: scale(1.08); }
}



.stat-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.15);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll-left {
  animation: scroll-left 40s linear infinite;
}

[dir="rtl"] .rtl\:border-r-4 {
  border-right-width: 4px;
  border-left-width: 0;
}
[dir="rtl"] .rtl\:pr-6 {
  padding-right: 1.5rem;
  padding-left: 0;
}
[dir="rtl"] .rtl\:mr-3 {
  margin-right: 0.75rem;
  margin-left: 0;
}
[dir="rtl"] .rtl\:ml-0 {
  margin-left: 0;
}

.animate-float-slow {
  animation: float 6s ease-in-out infinite;
}
.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: 3s;
}
.animate-spin-slow {
  animation: spin 30s linear infinite;
}
.animate-spin-reverse-slow {
  animation: spin-reverse 40s linear infinite;
}

@keyframes float {
  0% { transform: translateY(0px) rotate(3deg); }
  50% { transform: translateY(-15px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(3deg); }
}

@keyframes spin-reverse {
  from { transform: translate(-50%, -50%) rotate(360deg); }
  to { transform: translate(-50%, -50%) rotate(0deg); }
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>


