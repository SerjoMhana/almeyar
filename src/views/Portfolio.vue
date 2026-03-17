<template>
  <div class="portfolio-page min-h-screen bg-white dark:bg-gray-900">
    <PageHero
      :title="t('portfolio.title')"
      :description="t('portfolio.description')"
      :image="ele4Img"
      :badgeText="t('portfolio.galleryTitle')"
    />

    <!-- Categories -->
    <section class="py-16 lg:py-20 bg-gray-50 dark:bg-gray-800/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('portfolio.categoriesTitle') }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            {{ t('portfolio.categoriesTitle') }}
          </h2>
          <div class="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="category in categories"
            :key="category.id"
            @click="selectCategory(category.id)"
            :class="[
              'category-card relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2',
              selectedCategory === category.id
                ? 'ring-4 ring-blue-500 border-blue-500 shadow-xl scale-[1.02]'
                : 'border-transparent hover:shadow-xl hover:scale-[1.02]'
            ]"
          >
            <div class="aspect-[4/3] relative">
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div class="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                  <svg v-if="category.id === 'residential'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                  <svg v-else-if="category.id === 'industrial'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  <svg v-else class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-1">{{ category.name }}</h3>
                <p class="text-gray-200 text-sm mb-3 line-clamp-2">{{ category.description }}</p>
                <span class="px-3 py-1.5 bg-white/20 backdrop-blur text-white text-sm font-medium rounded-full">
                  {{ category.count }} {{ t('portfolio.projects') }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="selectedCategory" class="text-center mt-6">
          <button
            @click="selectedCategory = null"
            class="inline-flex items-center px-5 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            {{ t('portfolio.showAll') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Gallery -->
    <section class="py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-between items-end gap-4 mb-10">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {{ t('portfolio.galleryTitle') }}
              <span v-if="selectedCategory" class="text-blue-600"> – {{ getSelectedCategoryName() }}</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              {{ filteredProjects.length }} {{ t('portfolio.projects') }} {{ t('portfolio.found') }}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <article
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-card group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <!-- Before/After Images -->
            <div class="relative">
              <div class="grid grid-cols-2 gap-1 p-1 bg-gray-200 dark:bg-gray-700">
                <div class="relative aspect-[4/3] overflow-hidden">
                  <img
                    :src="project.beforeImage"
                    :alt="project.name + ' - ' + t('portfolio.before')"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-white font-bold text-sm bg-black/60 px-3 py-2 rounded-lg">{{ t('portfolio.before') }}</span>
                  </div>
                </div>
                <div class="relative aspect-[4/3] overflow-hidden">
                  <img
                    :src="project.afterImage"
                    :alt="project.name + ' - ' + t('portfolio.after')"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-white font-bold text-sm bg-black/60 px-3 py-2 rounded-lg">{{ t('portfolio.after') }}</span>
                  </div>
                </div>
              </div>
              <div class="absolute top-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600">
                <span class="text-gray-900 dark:text-white font-bold text-xs">{{ t('portfolio.beforeAfter') }}</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ project.name }}</h3>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-lg">{{ project.categoryLabel }}</span>
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 text-sm font-medium rounded-lg">{{ project.type }}</span>
              </div>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{{ project.description }}</p>
              <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                  {{ project.location }}
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {{ project.year }}
                </span>
                <span>{{ project.duration }}</span>
                <span class="font-medium text-gray-700 dark:text-gray-300">{{ project.budget }}</span>
              </div>
              <button
                @click="viewProjectDetails(project)"
                class="portfolio-btn inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                {{ t('portfolio.viewDetails') }}
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="showProjectModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" @click.self="showProjectModal = false">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
          <div class="p-6 md:p-8">
            <div class="flex justify-between items-start gap-4 mb-6">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {{ selectedProject?.name }}
              </h3>
              <button
                @click="showProjectModal = false"
                class="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-4">{{ t('portfolio.projectDetails') }}</h4>
                <dl class="space-y-3">
                  <div class="flex gap-3">
                    <dt class="font-medium text-gray-600 dark:text-gray-400 w-28 shrink-0">{{ t('portfolio.client') }}</dt>
                    <dd class="text-gray-900 dark:text-white">{{ selectedProject?.client }}</dd>
                  </div>
                  <div class="flex gap-3">
                    <dt class="font-medium text-gray-600 dark:text-gray-400 w-28 shrink-0">{{ t('portfolio.location') }}</dt>
                    <dd class="text-gray-900 dark:text-white">{{ selectedProject?.location }}</dd>
                  </div>
                  <div class="flex gap-3">
                    <dt class="font-medium text-gray-600 dark:text-gray-400 w-28 shrink-0">{{ t('portfolio.type') }}</dt>
                    <dd class="text-gray-900 dark:text-white">{{ selectedProject?.type }}</dd>
                  </div>
                  <div class="flex gap-3">
                    <dt class="font-medium text-gray-600 dark:text-gray-400 w-28 shrink-0">{{ t('portfolio.duration') }}</dt>
                    <dd class="text-gray-900 dark:text-white">{{ selectedProject?.duration }}</dd>
                  </div>
                  <div class="flex gap-3">
                    <dt class="font-medium text-gray-600 dark:text-gray-400 w-28 shrink-0">{{ t('portfolio.budget') }}</dt>
                    <dd class="text-gray-900 dark:text-white font-medium">{{ selectedProject?.budget }}</dd>
                  </div>
                  <div class="flex gap-3">
                    <dt class="font-medium text-gray-600 dark:text-gray-400 w-28 shrink-0">{{ t('portfolio.year') }}</dt>
                    <dd class="text-gray-900 dark:text-white">{{ selectedProject?.year }}</dd>
                  </div>
                </dl>
                <div class="mt-6">
                  <h5 class="font-bold text-gray-900 dark:text-white mb-2">Description</h5>
                  <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{{ selectedProject?.detailedDescription }}</p>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-4">{{ t('portfolio.beforeAfter') }}</h4>
                <div class="space-y-4">
                  <div>
                    <p class="font-medium text-gray-600 dark:text-gray-400 text-sm mb-2">{{ t('portfolio.before') }}</p>
                    <img
                      :src="selectedProject?.beforeImage"
                      :alt="selectedProject?.name + ' - Before'"
                      class="w-full rounded-xl shadow-md object-cover aspect-video"
                    />
                  </div>
                  <div>
                    <p class="font-medium text-gray-600 dark:text-gray-400 text-sm mb-2">{{ t('portfolio.after') }}</p>
                    <img
                      :src="selectedProject?.afterImage"
                      :alt="selectedProject?.name + ' - After'"
                      class="w-full rounded-xl shadow-md object-cover aspect-video"
                    />
                  </div>
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
import { ref, computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import { translations, getCurrentLanguage } from '../translations'

const currentLanguage = computed(() => getCurrentLanguage())
import ele4Img from '../assets/ele4.jpg'

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

const selectedCategory = ref(null)
const showProjectModal = ref(false)
const selectedProject = ref(null)

const categories = computed(() => {
  const imgs = assetImages.value
  return [
    {
      id: 'residential',
      name: t('portfolio.residential'),
      description: t('portfolio.residentialDesc'),
      count: 8,
      image: imgs[12] || imgs[0]
    },
    {
      id: 'industrial',
      name: t('portfolio.industrial'),
      description: t('portfolio.industrialDesc'),
      count: 12,
      image: imgs[13] || imgs[1]
    },
    {
      id: 'commercial',
      name: t('portfolio.commercial'),
      description: t('portfolio.commercialDesc'),
      count: 6,
      image: imgs[14] || imgs[2]
    }
  ]
})

const allProjects = computed(() => {
  const imgs = assetImages.value
  const beforeAfter = (beforeIdx, afterIdx) => ({
    beforeImage: imgs[beforeIdx] || imgs[0],
    afterImage: imgs[afterIdx] || imgs[1]
  })
  return [
    {
      id: 1,
      category: 'residential',
      categoryLabel: t('portfolio.residential'),
      name: t('portfolio.resProject1'),
      type: t('portfolio.electricalInstallation'),
      location: t('portfolio.riyadh'),
      year: '2023',
      description: t('portfolio.resProject1Desc'),
      detailedDescription: t('portfolio.resProject1Detailed'),
      client: t('portfolio.client1'),
      duration: t('portfolio.months3'),
      budget: '$45,000',
      ...beforeAfter(0, 1)
    },
    {
      id: 2,
      category: 'residential',
      categoryLabel: t('portfolio.residential'),
      name: t('portfolio.resProject2'),
      type: t('portfolio.smartHome'),
      location: t('portfolio.jeddah'),
      year: '2023',
      description: t('portfolio.resProject2Desc'),
      detailedDescription: t('portfolio.resProject2Detailed'),
      client: t('portfolio.client2'),
      duration: t('portfolio.months2'),
      budget: '$32,000',
      ...beforeAfter(2, 3)
    },
    {
      id: 3,
      category: 'industrial',
      categoryLabel: t('portfolio.industrial'),
      name: t('portfolio.indProject1'),
      type: t('portfolio.factoryElectrification'),
      location: t('portfolio.dammam'),
      year: '2023',
      description: t('portfolio.indProject1Desc'),
      detailedDescription: t('portfolio.indProject1Detailed'),
      client: t('portfolio.client3'),
      duration: t('portfolio.months6'),
      budget: '$180,000',
      ...beforeAfter(4, 5)
    },
    {
      id: 4,
      category: 'industrial',
      categoryLabel: t('portfolio.industrial'),
      name: t('portfolio.indProject2'),
      type: t('portfolio.mechanicalInstallation'),
      location: t('portfolio.medina'),
      year: '2022',
      description: t('portfolio.indProject2Desc'),
      detailedDescription: t('portfolio.indProject2Detailed'),
      client: t('portfolio.client4'),
      duration: t('portfolio.months4'),
      budget: '$95,000',
      ...beforeAfter(6, 7)
    },
    {
      id: 5,
      category: 'commercial',
      categoryLabel: t('portfolio.commercial'),
      name: t('portfolio.comProject1'),
      type: t('portfolio.shoppingCenter'),
      location: t('portfolio.riyadh'),
      year: '2023',
      description: t('portfolio.comProject1Desc'),
      detailedDescription: t('portfolio.comProject1Detailed'),
      client: t('portfolio.client5'),
      duration: t('portfolio.months8'),
      budget: '$250,000',
      ...beforeAfter(8, 9)
    },
    {
      id: 6,
      category: 'commercial',
      categoryLabel: t('portfolio.commercial'),
      name: t('portfolio.comProject2'),
      type: t('portfolio.officeBuilding'),
      location: t('portfolio.jeddah'),
      year: '2022',
      description: t('portfolio.comProject2Desc'),
      detailedDescription: t('portfolio.comProject2Detailed'),
      client: t('portfolio.client6'),
      duration: t('portfolio.months5'),
      budget: '$120,000',
      ...beforeAfter(10, 11)
    }
  ]
})

const filteredProjects = computed(() => {
  if (!selectedCategory.value) return allProjects.value
  return allProjects.value.filter(p => p.category === selectedCategory.value)
})

const getSelectedCategoryName = () => {
  const cat = categories.value.find(c => c.id === selectedCategory.value)
  return cat ? cat.name : ''
}

const selectCategory = (categoryId) => {
  selectedCategory.value = selectedCategory.value === categoryId ? null : categoryId
}

const viewProjectDetails = (project) => {
  selectedProject.value = project
  showProjectModal.value = true
}
</script>

<style scoped>
.portfolio-page {
  font-family: 'Tajawal', sans-serif;
}



.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
