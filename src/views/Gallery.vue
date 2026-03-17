<template>
  <div class="gallery-page min-h-screen bg-white dark:bg-gray-900">
    <PageHero
      :title="t('gallery.title')"
      :description="t('gallery.description')"
      :image="ele3Img"
      :badgeText="t('gallery.photoGallery')"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
      <!-- Filters + search -->
      <section class="mb-10">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div class="flex flex-wrap gap-3">
            <button
              v-for="category in categories"
              :key="String(category.id)"
              @click="selectCategory(category.id)"
              :class="[
                'px-5 py-2.5 rounded-full font-medium transition-all duration-300 border',
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg border-blue-600'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
              ]"
            >
              {{ category.name }}
              <span class="ml-2 text-sm opacity-75">({{ category.count }})</span>
            </button>
          </div>

          <div class="w-full lg:w-[360px]">
            <label class="sr-only">Search</label>
            <div class="relative">
              <svg class="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input
                v-model="query"
                type="text"
                :placeholder="t('gallery.viewLarger')"
                class="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery grid (masonry) -->
      <section class="mb-16">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {{ t('gallery.photoGallery') }}
              <span v-if="selectedCategory" class="text-blue-600"> – {{ getSelectedCategoryName() }}</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              {{ filteredImages.length }} {{ t('gallery.photos') }}
            </p>
          </div>
        </div>

        <div v-if="filteredImages.length" class="masonry">
          <div v-for="(image, i) in filteredImages" :key="image.id" class="masonry-item">
            <button
              type="button"
              class="group w-full text-left rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              @click="openLightbox(i)"
            >
              <div class="relative" :class="image.ratioClass">
                <img
                  :src="image.src"
                  :alt="image.title"
                  class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-90"></div>

                <div class="absolute top-4 left-4">
                  <span :class="badgeClass(image.category)">{{ getCategoryName(image.category) }}</span>
                </div>

                <div class="absolute bottom-0 left-0 right-0 p-5">
                  <h3 class="text-white font-bold text-lg mb-1 line-clamp-2">{{ image.title }}</h3>
                  <p class="text-gray-200 text-sm line-clamp-2">{{ image.description }}</p>
                  <div class="mt-3 inline-flex items-center text-blue-200 text-sm font-medium">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    {{ t('gallery.viewLarger') }}
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div v-else class="text-center py-16 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
          <p class="text-gray-600 dark:text-gray-400">No photos found.</p>
        </div>
      </section>

      <!-- Stats -->
      <section class="relative rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-xl">
        <div class="absolute inset-0 opacity-10">
          <img :src="assetImages[6] || assetImages[0]" alt="" class="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div class="relative p-8 md:p-10">
          <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">{{ t('gallery.ourNumbers') }}</h2>
            <p class="text-gray-600 dark:text-gray-400">{{ t('gallery.statsDescription') }}</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="stat-card">
              <div class="stat-number text-blue-600">{{ stats.projects }}</div>
              <div class="stat-label">{{ t('gallery.completedProjects') }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number text-green-600">{{ stats.teamMembers }}</div>
              <div class="stat-label">{{ t('gallery.teamMembers') }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number text-purple-600">{{ stats.warehouses }}</div>
              <div class="stat-label">{{ t('gallery.warehouses') }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number text-yellow-600">{{ stats.yearsExperience }}</div>
              <div class="stat-label">{{ t('gallery.yearsExperience') }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="showLightbox" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm" @click.self="closeLightbox">
        <div class="relative w-full max-w-6xl">
          <button
            @click="closeLightbox"
            class="absolute -top-12 right-0 text-white/90 hover:text-white transition-colors p-2 rounded-xl"
            aria-label="Close"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <button
            v-if="lightboxIndex > 0"
            @click="prevImage"
            class="absolute left-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors z-10 p-2 rounded-xl bg-white/10 hover:bg-white/20"
            aria-label="Previous"
          >
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <button
            v-if="lightboxIndex < filteredImages.length - 1"
            @click="nextImage"
            class="absolute right-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors z-10 p-2 rounded-xl bg-white/10 hover:bg-white/20"
            aria-label="Next"
          >
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div class="bg-black/5 dark:bg-black/20">
              <img :src="currentImage?.src" :alt="currentImage?.title" class="w-full max-h-[70vh] object-contain" />
            </div>

            <div class="p-6 md:p-8">
              <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">{{ currentImage?.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-400">{{ currentImage?.description }}</p>
                </div>
                <div class="flex items-center gap-3">
                  <span v-if="currentImage" :class="badgeClass(currentImage.category)">{{ getCategoryName(currentImage.category) }}</span>
                  <button
                    @click="downloadImage"
                    class="inline-flex items-center px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    {{ t('gallery.download') }}
                  </button>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{{ t('gallery.image') }} {{ lightboxIndex + 1 }} {{ t('gallery.of') }} {{ filteredImages.length }}</span>
                <div class="flex gap-2 overflow-x-auto pb-1">
                  <button
                    v-for="(img, idx) in filteredImages"
                    :key="img.id"
                    type="button"
                    @click="jumpTo(idx)"
                    class="thumb rounded-lg overflow-hidden border-2 transition-colors"
                    :class="idx === lightboxIndex ? 'border-blue-600' : 'border-transparent hover:border-white/40'"
                  >
                    <img :src="img.src" alt="" class="w-14 h-10 object-cover" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import PageHero from '../components/PageHero.vue'
import { translations, getCurrentLanguage } from '../translations'

const currentLanguage = computed(() => getCurrentLanguage())
import ele3Img from '../assets/ele3.jpg'

const t = (key) => {
  const keys = key.split('.')
  let value = translations[currentLanguage.value]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}

const selectedCategory = ref(null)
const showLightbox = ref(false)
const lightboxIndex = ref(0)
const query = ref('')

const imageModules = import.meta.glob('../assets/*.jpeg', { eager: true, query: '?url', import: 'default' })
const assetImages = computed(() => Object.values(imageModules).filter(Boolean))

const allImages = computed(() => {
  const imgs = assetImages.value
  const img = (i) => imgs[i] || imgs[0]
  const ratios = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-square', 'aspect-[16/9]']
  const ratioAt = (i) => ratios[i % ratios.length]

  return [
    // Work Sites
    { id: 1, src: img(0), title: t('gallery.workSite1'), description: t('gallery.workSite1Desc'), category: 'workSites', ratioClass: ratioAt(1) },
    { id: 2, src: img(1), title: t('gallery.workSite2'), description: t('gallery.workSite2Desc'), category: 'workSites', ratioClass: ratioAt(2) },
    { id: 3, src: img(2), title: t('gallery.workSite3'), description: t('gallery.workSite3Desc'), category: 'workSites', ratioClass: ratioAt(3) },
    { id: 4, src: img(3), title: t('gallery.workSite4'), description: t('gallery.workSite4Desc'), category: 'workSites', ratioClass: ratioAt(4) },
    // Warehouses
    { id: 5, src: img(4), title: t('gallery.warehouse1'), description: t('gallery.warehouse1Desc'), category: 'warehouses', ratioClass: ratioAt(5) },
    { id: 6, src: img(5), title: t('gallery.warehouse2'), description: t('gallery.warehouse2Desc'), category: 'warehouses', ratioClass: ratioAt(6) },
    { id: 7, src: img(6), title: t('gallery.warehouse3'), description: t('gallery.warehouse3Desc'), category: 'warehouses', ratioClass: ratioAt(7) },
    // Team
    { id: 8, src: img(7), title: t('gallery.team1'), description: t('gallery.team1Desc'), category: 'team', ratioClass: ratioAt(8) },
    { id: 9, src: img(8), title: t('gallery.team2'), description: t('gallery.team2Desc'), category: 'team', ratioClass: ratioAt(9) },
    { id: 10, src: img(9), title: t('gallery.team3'), description: t('gallery.team3Desc'), category: 'team', ratioClass: ratioAt(10) },
    { id: 11, src: img(10), title: t('gallery.team4'), description: t('gallery.team4Desc'), category: 'team', ratioClass: ratioAt(11) }
  ]
})

const categories = computed(() => [
  { id: null, name: t('gallery.allPhotos'), count: allImages.value.length },
  { id: 'workSites', name: t('gallery.workSites'), count: allImages.value.filter(img => img.category === 'workSites').length },
  { id: 'warehouses', name: t('gallery.warehouses'), count: allImages.value.filter(img => img.category === 'warehouses').length },
  { id: 'team', name: t('gallery.team'), count: allImages.value.filter(img => img.category === 'team').length }
])

const filteredImages = computed(() => {
  const q = query.value.trim().toLowerCase()
  const base = selectedCategory.value ? allImages.value.filter(image => image.category === selectedCategory.value) : allImages.value
  if (!q) return base
  return base.filter(img => (img.title + ' ' + img.description).toLowerCase().includes(q))
})

const currentImage = computed(() => filteredImages.value[lightboxIndex.value] || null)

const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId
  query.value = ''
  if (showLightbox.value) closeLightbox()
}

const getSelectedCategoryName = () => {
  const category = categories.value.find(cat => cat.id === selectedCategory.value)
  return category ? category.name : ''
}

const getCategoryName = (category) => {
  const cat = categories.value.find(c => c.id === category)
  return cat ? cat.name : ''
}

const badgeClass = (category) => {
  const base = 'px-3 py-1 rounded-full text-xs font-semibold'
  if (category === 'workSites') return base + ' bg-blue-100 text-blue-800'
  if (category === 'warehouses') return base + ' bg-green-100 text-green-800'
  return base + ' bg-purple-100 text-purple-800'
}

const openLightbox = (index) => {
  lightboxIndex.value = index
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  showLightbox.value = false
  document.body.style.overflow = ''
}

const prevImage = () => {
  if (lightboxIndex.value > 0) lightboxIndex.value--
}

const nextImage = () => {
  if (lightboxIndex.value < filteredImages.value.length - 1) lightboxIndex.value++
}

const jumpTo = (idx) => {
  if (idx >= 0 && idx < filteredImages.value.length) lightboxIndex.value = idx
}

const downloadImage = () => {
  if (!currentImage.value) return
  const safe = (currentImage.value.title || 'image').replace(/[^a-z0-9\u0600-\u06FF\s_-]/gi, '').trim() || 'image'
  const link = document.createElement('a')
  link.href = currentImage.value.src
  link.download = `${safe}.jpg`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const stats = {
  projects: 150,
  teamMembers: 50,
  warehouses: 8,
  yearsExperience: 15
}

const handleKeydown = (e) => {
  if (!showLightbox.value) return
  switch (e.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      prevImage()
      break
    case 'ArrowRight':
      nextImage()
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.gallery-page {
  font-family: 'Tajawal', sans-serif;
}



.masonry {
  column-count: 1;
  column-gap: 1rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .masonry { column-count: 2; }
}

@media (min-width: 1024px) {
  .masonry { column-count: 3; }
}

.stat-card {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(229, 231, 235, 0.8);
  border-radius: 1rem;
  padding: 1.25rem;
  text-align: center;
  backdrop-filter: blur(6px);
}

:global(.dark) .stat-card {
  background: rgba(31, 41, 55, 0.6);
  border-color: rgba(55, 65, 81, 0.7);
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: rgb(75, 85, 99);
  font-weight: 500;
}

:global(.dark) .stat-label {
  color: rgb(156, 163, 175);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>