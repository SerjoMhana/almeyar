<template>
  <div class="products-page min-h-screen bg-white dark:bg-gray-900">
    <PageHero
      :title="t('products.title')"
      :description="t('products.description')"
      :image="ele5Img"
      :badgeText="t('products.title')"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
      <!-- Categories -->
      <section class="mb-14">
        <div class="text-center mb-10">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('products.brandsTitle') }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            {{ t('products.brandsTitle') }}
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          <button
            v-for="brand in brands"
            :key="brand.id"
            type="button"
            @click="selectBrand(brand.id)"
            :class="[
              'group relative rounded-2xl overflow-hidden border-2 text-left transition-all duration-300 bg-white dark:bg-gray-800',
              selectedBrand === brand.id
                ? 'border-blue-600 shadow-xl scale-[1.02]'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:shadow-md'
            ]"
          >
            <div class="p-6 flex flex-col items-center justify-center min-h-[140px]">
              <img 
                :src="logoImages[brand.name.toUpperCase()]"
                :alt="brand.name" 
                class="h-16 w-24 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {{ brand.count }} {{ t('products.products') }}
              </p>
            </div>
          </button>
        </div>
      </section>

      <!-- Products Grid -->
      <section class="mb-16">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {{ t('products.allProducts') }}
              <span v-if="selectedBrand" class="text-blue-600"> – {{ getSelectedBrandName() }}</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              {{ filteredProducts.length }} {{ t('products.products') }}
            </p>
          </div>
          <button
            v-if="selectedBrand"
            type="button"
            @click="selectedBrand = null"
            class="inline-flex items-center px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
          >
            {{ t('products.showAll') }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          <article
            v-for="product in filteredProducts"
            :key="product.id"
            class="product-card rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="relative aspect-[4/3]">
              <img :src="product.image" :alt="product.name" class="absolute inset-0 w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/30 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <p class="text-xs text-gray-200 font-semibold">{{ product.manufacturer }}</p>
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {{ getProductDisplayName(product.image) }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {{ getProductDetails(product.image) }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>

    <!-- Quote Modal -->
    <Teleport to="body">
      <div
        v-if="showQuoteModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        @click.self="showQuoteModal = false"
      >
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex items-start justify-between">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                {{ t('products.quoteRequest') }}
              </h3>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {{ selectedProduct?.name }}
              </p>
            </div>
            <button
              type="button"
              @click="showQuoteModal = false"
              class="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="px-6 pt-4 pb-2">
            <div class="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
              <img :src="selectedProduct?.image" :alt="selectedProduct?.name" class="w-14 h-14 object-cover rounded-lg" />
              <div>
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white">
                  {{ selectedProduct?.name }}
                </h4>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  {{ selectedProduct?.manufacturer }}
                </p>
              </div>
            </div>
          </div>

          <form @submit.prevent="submitQuote" class="px-6 pb-6 pt-2 space-y-3 text-sm">
            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('products.fullName') }} *</label>
              <input
                v-model="quoteForm.name"
                type="text"
                required
                class="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none"
                :placeholder="t('products.enterName')"
              />
            </div>

            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('products.email') }} *</label>
              <input
                v-model="quoteForm.email"
                type="email"
                required
                class="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text:white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none"
                :placeholder="t('products.enterEmail')"
              />
            </div>

            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('products.company') }}</label>
              <input
                v-model="quoteForm.company"
                type="text"
                class="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none"
                :placeholder="t('products.enterCompany')"
              />
            </div>

            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('products.quantity') }} *</label>
              <input
                v-model="quoteForm.quantity"
                type="number"
                min="1"
                required
                class="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none"
                :placeholder="t('products.enterQuantity')"
              />
            </div>

            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('products.message') }}</label>
              <textarea
                v-model="quoteForm.message"
                rows="3"
                class="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none"
                :placeholder="t('products.enterMessage')"
              ></textarea>
            </div>

            <div class="flex gap-3 pt-2">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  v-if="isSubmitting"
                  class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                {{ isSubmitting ? t('products.sending') : t('products.sendQuote') }}
              </button>
              <button
                type="button"
                @click="showQuoteModal = false"
                class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {{ t('products.cancel') }}
              </button>
            </div>
          </form>
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
import ele5Img from '../assets/ele5.jpg'

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

// Import product images from Products folder
const productImagesModules = import.meta.glob('../assets/Products/*.{png,jpeg,jpg,svg}', { eager: true, query: '?url', import: 'default' })
const productImages = computed(() => {
  const images = {}
  Object.entries(productImagesModules).forEach(([path, module]) => {
    const filename = path.split('/').pop().split('.')[0].toUpperCase()
    images[filename] = module
  })
  return images
})

// Import logos from Logos folder
const logoModules = import.meta.glob('../assets/Logos/*.{png,jpeg,jpg}', { eager: true, query: '?url', import: 'default' })
const logoImages = computed(() => {
  const logos = {}
  Object.entries(logoModules).forEach(([path, module]) => {
    const filename = path.split('/').pop().split('.')[0]
    logos[filename.toUpperCase()] = module
  })
  if (logos['GIS']) {
    logos['GEWISS'] = logos['GIS'];
  }
  return logos
})

const selectedBrand = ref(null)
const showQuoteModal = ref(false)
const selectedProduct = ref(null)
const isSubmitting = ref(false)

const quoteForm = ref({
  name: '',
  email: '',
  company: '',
  quantity: 1,
  message: ''
})

const brands = computed(() => {
  return [
    { id: 'chint', name: 'CHINT', count: 3 },
    { id: 'abb', name: 'ABB', count: 3 },
    { id: 'schneider', name: 'SCHNEIDER', count: 3 },
    { id: 'gewiss', name: 'GEWISS', count: 3 },
    { id: 'eaton', name: 'EATON', count: 3 }
  ]
})

const allProducts = computed(() => {
  // Dynamically generate products from productImages
  return Object.entries(productImages.value).map(([key, image], idx) => {
    // Example key: ABB1, CHINT2, etc.
    // Extract brand and number
    const match = key.match(/^([A-Z]+)(\d+)$/)
    let brand = 'UNKNOWN', number = ''
    if (match) {
      brand = match[1]
      number = match[2]
    }
    return {
      id: idx + 1,
      name: getProductDisplayName(image),
      manufacturer: brand,
      image,
      description: getProductDetails(image)
    }
  })
})

// Helper to generate product name from image filename
function getProductDisplayName(imageUrl) {
  if (!imageUrl) return ''
  const file = imageUrl.split('/').pop().split('.')[0]
  // Example: ABB1 => ABB منتج رقم 1
  const match = file.match(/^([A-Z]+)(\d+)$/)
  if (match) {
    return `${match[1]} منتج رقم ${match[2]}`
  }
  return file
}

// Helper to generate product details from image filename
function getProductDetails(imageUrl) {
  if (!imageUrl) return ''
  const file = imageUrl.split('/').pop().split('.')[0]
  // Example: ABB1 => تفاصيل المنتج ABB رقم 1
  const match = file.match(/^([A-Z]+)(\d+)$/)
  if (match) {
    return `تفاصيل المنتج من شركة ${match[1]} رقم ${match[2]}`
  }
  return 'منتج كهربائي عالي الجودة'
}

const filteredProducts = computed(() => {
  if (!selectedBrand.value) return allProducts.value
  return allProducts.value.filter(product => product.manufacturer.toLowerCase() === selectedBrand.value)
})

const selectBrand = (brandId) => {
  selectedBrand.value = selectedBrand.value === brandId ? null : brandId
}

const getSelectedBrandName = () => {
  const brand = brands.value.find(b => b.id === selectedBrand.value)
  return brand ? brand.name : ''
}

const requestQuote = (product) => {
  selectedProduct.value = product
  showQuoteModal.value = true
  quoteForm.value = {
    name: '',
    email: '',
    company: '',
    quantity: 1,
    message: ''
  }
}

const viewDetails = (product) => {
  // eslint-disable-next-line no-console
  console.log('View details for:', product)
}

const submitQuote = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  // eslint-disable-next-line no-console
  console.log('Quote request submitted:', {
    product: selectedProduct.value,
    ...quoteForm.value
  })
  isSubmitting.value = false
  showQuoteModal.value = false
  alert(t('products.quoteSubmitted'))
}
</script>

<style scoped>
.products-page {
  font-family: 'Tajawal', sans-serif;
}



.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>