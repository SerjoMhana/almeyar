<template>
  <div class="about-page min-h-screen bg-white dark:bg-gray-900">
    <PageHero
      :title="t('about.title')"
      :description="t('about.description')"
      :image="ele1Img"
      :badgeText="t('about.title')"
    />

    <!-- Vision and Values - مع صور من الأصول -->
    <section class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-800/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="order-2 lg:order-1">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('about.visionTitle') }}</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
              {{ t('about.visionTitle') }}
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {{ t('about.visionText') }}
            </p>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ t('about.ourValues') }}
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="text-gray-700 dark:text-gray-300 pt-1">{{ t('about.valuePrecision') }}</span>
              </li>
              <li class="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <span class="text-gray-700 dark:text-gray-300 pt-1">{{ t('about.valueSafety') }}</span>
              </li>
              <li class="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <span class="text-gray-700 dark:text-gray-300 pt-1">{{ t('about.valueInnovation') }}</span>
              </li>
            </ul>
          </div>
          <div class="order-1 lg:order-2">
            <div class="grid grid-cols-2 gap-3 md:gap-4">
              <div class="space-y-3 md:space-y-4">
                <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img :src="assetImages[1]" alt="Vision" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img :src="assetImages[2]" alt="Values" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div class="space-y-3 md:space-y-4 pt-6 md:pt-10">
                <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img :src="assetImages[3]" alt="Team" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img :src="assetImages[4]" alt="Projects" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CEO Message - تصميم حديث مع صورة من الأصول -->
    <section class="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('about.ceoMessageTitle') }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            {{ t('about.ceoMessageTitle') }}
          </h2>
          <div class="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div class="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-2">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-h-[480px]">
              <img :src="assetImages[5]" alt="CEO" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-xl font-bold">{{ t('about.ceoName') }}</h3>
                <p class="text-blue-200 text-sm">{{ t('about.ceoTitle') }}</p>
              </div>
            </div>
          </div>
          <div class="lg:col-span-3">
            <div class="relative pl-6 md:pl-8 border-l-4 border-blue-600">
              <span class="absolute -left-1 text-6xl text-blue-600/20 font-serif leading-none top-0">"</span>
              <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic">
                {{ t('about.ceoMessage') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organizational Structure - كروت مع صور خلفية خفيفة -->
    <section class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-800/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('about.orgStructureTitle') }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            {{ t('about.orgStructureTitle') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ t('about.orgStructureDesc') }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="(item, index) in orgStructure"
            :key="item.id"
            class="org-card group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div class="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img :src="assetImages[6 + index]" alt="" class="w-full h-full object-cover" aria-hidden="true" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-800 via-white/90 dark:via-gray-800/90 to-white dark:to-gray-800"></div>
            <div class="relative z-10 p-8 text-center">
              <div class="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mx-auto mb-5">
                <component :is="item.icon" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ item.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery strip - معرض مصغر من أصولنا -->
    <section class="py-12 bg-white dark:bg-gray-900 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('about.ourValues') }}</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-1">{{ t('about.visionText').slice(0, 80) }}...</p>
      </div>
      <div class="flex gap-4 about-scroll">
        <div class="flex gap-4 shrink-0">
          <div v-for="(img, i) in galleryStrip" :key="'a'+i" class="w-56 h-36 shrink-0 rounded-xl overflow-hidden shadow-lg">
            <img :src="img" alt="Gallery" class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="flex gap-4 shrink-0" aria-hidden="true">
          <div v-for="(img, i) in galleryStrip" :key="'b'+i" class="w-56 h-36 shrink-0 rounded-xl overflow-hidden shadow-lg">
            <img :src="img" alt="" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-800/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('about.certificationsTitle') }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            {{ t('about.certificationsTitle') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ t('about.certificationsDesc') }}
          </p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="cert in certifications"
            :key="cert.id"
            class="cert-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
          >
            <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
              <img :src="cert.logo" :alt="cert.name" class="w-10 h-10 object-contain" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ cert.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">{{ cert.description }}</p>
            <p class="text-blue-600 font-semibold text-sm">{{ cert.number }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, h } from 'vue'
import PageHero from '../components/PageHero.vue'
import { translations, getCurrentLanguage } from '../translations'

const currentLanguage = computed(() => getCurrentLanguage())
import ele1Img from '../assets/ele1.jpg'

const t = (key) => {
  const keys = key.split('.')
  let value = translations[currentLanguage.value]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}

const imageModules = import.meta.glob('../assets/*.jpeg', { eager: true, query: '?url', import: 'default' })
const assetImages = computed(() => Object.values(imageModules).filter(Boolean))

const galleryStrip = computed(() => assetImages.value.slice(10, 20))

const orgStructure = computed(() => [
  {
    id: 1,
    title: t('about.management'),
    desc: t('about.managementDesc'),
    icon: () => h('svg', { class: 'w-8 h-8 text-blue-600', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
    ])
  },
  {
    id: 2,
    title: t('about.engineering'),
    desc: t('about.engineeringDesc'),
    icon: () => h('svg', { class: 'w-8 h-8 text-blue-600', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.548-.952 3.388-.952 4.936 0 1.548.952 2.388 2.914 1.44 4.462l-2.06 2.06a1.724 1.724 0 00-.48 1.855l2.41 5.79a1.724 1.724 0 01-.94 2.155l-5.79 2.41a1.724 1.724 0 01-2.155-.94l-2.06-2.06a1.724 1.724 0 00-1.855-.48l-2.41 2.41a1.724 1.724 0 01-2.155.94l-5.79-2.41a1.724 1.724 0 01-.94-2.155l2.41-5.79a1.724 1.724 0 00-.48-1.855l-2.06-2.06c-.952-1.548-.952-3.388 0-4.936a1.724 1.724 0 011.066-2.573c1.756-.426 3.714.952 4.462 2.41l2.06 2.06a1.724 1.724 0 001.855.48l2.41-2.41z' })
    ])
  },
  {
    id: 3,
    title: t('about.quality'),
    desc: t('about.qualityDesc'),
    icon: () => h('svg', { class: 'w-8 h-8 text-blue-600', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
    ])
  }
])

const certifications = computed(() => [
  {
    id: 1,
    name: t('about.iso9001'),
    description: t('about.iso9001Desc'),
    number: 'ISO 9001:2015',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ISO_9001_2015_certification_logo.svg/1200px-ISO_9001_2015_certification_logo.svg.png'
  },
  {
    id: 2,
    name: t('about.iso14001'),
    description: t('about.iso14001Desc'),
    number: 'ISO 14001:2015',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/ISO_14001_2015_certification_logo.svg/1200px-ISO_14001_2015_certification_logo.svg.png'
  },
  {
    id: 3,
    name: t('about.safetyLicense'),
    description: t('about.safetyLicenseDesc'),
    number: t('about.licenseNumber'),
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/General_Electric_logo.svg/2560px-General_Electric_logo.svg.png'
  },
  {
    id: 4,
    name: t('about.qualityCert'),
    description: t('about.qualityCertDesc'),
    number: t('about.certNumber'),
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/ABB_logo.svg/2560px-ABB_logo.svg.png'
  }
])
</script>

<style scoped>
.about-page {
  font-family: 'Tajawal', sans-serif;
}

@keyframes about-scroll-kf {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.about-scroll {
  animation: about-scroll-kf 45s linear infinite;
}
</style>
