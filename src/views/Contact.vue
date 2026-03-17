<template>
  <div class="contact-page min-h-screen bg-white dark:bg-gray-900">
    <PageHero
      :title="t('contact.title')"
      :description="t('contact.description')"
      :image="ele2Img"
      :badgeText="t('contact.title')"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
      <!-- Simple Contact Info -->
      <section class="mb-14">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <!-- Address -->
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ t('contact.address') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">{{ t('contact.fullAddress') }}</p>
          </div>

          <!-- Phone -->
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ t('contact.phone') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">{{ t('contact.phoneNumbers') }}</p>
          </div>

          <!-- Email -->
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ t('contact.email') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">{{ t('contact.emailAddress') }}</p>
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <section class="mb-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div class="p-8 md:p-10">
                <div class="text-center mb-8">
                  <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {{ t('contact.sendMessage') }}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ t('contact.getInTouch') }}
                  </p>
                </div>

                <div v-if="status" class="mb-6 rounded-2xl p-4 flex items-center gap-3" :class="status === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'">
                  <svg v-if="status === 'success'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {{ statusMessage }}
                </div>

                <form @submit.prevent="submitMessage" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ t('contact.fullName') }} *
                      </label>
                      <input
                        v-model="contactForm.name"
                        type="text"
                        required
                        class="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none transition-all"
                        :placeholder="t('contact.enterName')"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ t('contact.email') }} *
                      </label>
                      <input
                        v-model="contactForm.email"
                        type="email"
                        required
                        class="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none transition-all"
                        :placeholder="t('contact.enterEmail')"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {{ t('contact.subject') }} *
                    </label>
                    <input
                      v-model="contactForm.subject"
                      type="text"
                      required
                      class="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none transition-all"
                      :placeholder="t('contact.enterSubject')"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {{ t('contact.message') }} *
                    </label>
                    <textarea
                      v-model="contactForm.message"
                      rows="6"
                      required
                      class="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none resize-none transition-all"
                      :placeholder="t('contact.enterMessage')"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    {{ isSubmitting ? t('contact.sending') : t('contact.send') }}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Working Hours -->
            <div class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-750 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ t('contact.workingHours') }}
                </h3>
              </div>
              
              <div class="space-y-4">
                <!-- Weekdays Group -->
                <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600 dark:text-gray-400 font-medium">{{ t('contact.sunday') }} - {{ t('contact.thursday') }}</span>
                    <span class="font-semibold text-gray-900 dark:text-white">{{ t('contact.weekdays') }}</span>
                  </div>
                </div>
                
                <!-- Weekend Group -->
                <div class="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600 dark:text-gray-400 font-medium">{{ t('contact.friday') }} - {{ t('contact.saturday') }}</span>
                    <span class="font-semibold text-red-600">{{ t('contact.closed') }}</span>
                  </div>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div class="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30">
                  <svg class="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                  <div>
                    <p class="text-sm font-semibold text-gray-900 dark:text-white mb-1">{{ t('contact.ramadan') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('contact.ramadanHours') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-750 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-2xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ t('contact.socialMedia') }}
                </h3>
              </div>

              <div class="grid grid-cols-3 gap-4">
                <!-- Facebook -->
                <a href="#" class="group flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <svg class="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span class="text-xs font-medium text-gray-600 dark:text-gray-400 mt-2 group-hover:text-blue-600 transition-colors">Facebook</span>
                </a>

                <!-- Instagram -->
                <a href="#" class="group flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <svg class="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span class="text-xs font-medium text-gray-600 dark:text-gray-400 mt-2 group-hover:text-purple-600 transition-colors">Instagram</span>
                </a>

                <!-- YouTube -->
                <a href="#" class="group flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <svg class="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-red-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span class="text-xs font-medium text-gray-600 dark:text-gray-400 mt-2 group-hover:text-red-600 transition-colors">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section (Last) -->
      <section class="mb-8">
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
          <div class="relative h-[500px]">
            <iframe
              :src="mapUrl"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="absolute inset-0 w-full h-full"
            ></iframe>
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import { translations, getCurrentLanguage } from '../translations'

const currentLanguage = computed(() => getCurrentLanguage())
import ele2Img from '../assets/ele2.jpg'

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

// State
const isSubmitting = ref(false)
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const status = ref(null)
const statusMessage = ref('')

// Google Maps URL - Replace with your actual office location coordinates
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107389.51006093375!2d13.111956166164284!3d32.74838495052984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a892c4cdd88d71%3A0xea8ee07aa52b12bf!2sTripoli%2C%20Libya!5e0!3m2!1sen!2s!4v1703023000000!5m2!1sen!2s'

// Methods
const submitMessage = async () => {
  isSubmitting.value = true
  status.value = null
  statusMessage.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Message submitted:', contactForm.value)
    status.value = 'success'
    statusMessage.value = t('contact.success')
    
    // Reset form
    contactForm.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error('Error sending message:', error)
    status.value = 'error'
    statusMessage.value = t('contact.error')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  font-family: 'Tajawal', sans-serif;
}


</style>