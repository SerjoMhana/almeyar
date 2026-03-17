<template>
  <div class="training-page min-h-screen bg-white dark:bg-gray-900">
    <PageHero
      :title="t('training.title')"
      :description="t('training.description')"
      :image="ele6Img"
      :badgeText="t('training.title')"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
      <!-- Introduction -->
      <section class="mb-16">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 dark:border-gray-600">
          <div class="text-center mb-8">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('training.introTitle') }}</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {{ t('training.slogan') }}
            </h2>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            {{ t('training.introText') }}
          </p>
        </div>
      </section>

      <!-- Detailed Course Information -->
      <section ref="coursesSection" class="mb-16">
        <div class="text-center mb-12">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('training.availableCourses') }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
            {{ t('training.detailedCourses') }}
          </h2>
        </div>

        <div class="space-y-8">
          <div
            v-for="course in courses"
            :key="'detail-' + course.id"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div class="grid md:grid-cols-5 gap-0">
              <div class="md:col-span-2 relative aspect-[4/3] md:aspect-auto">
                <img :src="course.image" :alt="course.title" class="absolute inset-0 w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent md:bg-gradient-to-r"></div>
              </div>
              
              <div class="md:col-span-3 p-6 md:p-8">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {{ course.title }}
                    </h3>
                    <p class="text-blue-600 dark:text-blue-400 font-semibold">
                      {{ course.subtitle }}
                    </p>
                  </div>
                </div>

                <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {{ course.description }}
                </p>

                <div class="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 class="font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                      {{ course.learnTitle }}
                    </h4>
                    <ul class="space-y-2">
                      <li
                        v-for="(item, index) in course.learnItems"
                        :key="index"
                        class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{{ item }}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="space-y-4">
                    <div class="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('training.duration') }}</p>
                        <p class="font-semibold text-gray-900 dark:text-white">{{ course.duration }}</p>
                      </div>
                    </div>

                    <div class="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      <div>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('training.capacity') }}</p>
                        <p class="font-semibold text-gray-900 dark:text-white">{{ course.maxStudents }} {{ t('training.students') }}</p>
                      </div>
                    </div>

                    <div class="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                      <div>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('training.certificate') }}</p>
                        <p class="font-semibold text-gray-900 dark:text-white">{{ t('training.accredited') }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                    <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    {{ course.targetTitle }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ course.targetText }}
                  </p>
                </div>

                <button
                  type="button"
                  @click="selectCourse(course)"
                  class="mt-6 w-full md:w-auto inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  {{ t('training.registerNow') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Registration Form -->
      <section ref="formSection" class="mb-16">
        <div class="text-center mb-12">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">{{ t('training.registerNow') }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
            {{ t('training.registrationForm') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ t('training.registrationDesc') }}
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div class="grid lg:grid-cols-2 gap-0">
              <!-- Image Side -->
              <div class="relative hidden lg:block">
                <img 
                  :src="assetImages[5] || assetImages[0]" 
                  alt="Training Registration" 
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-700/85"></div>
                <div class="absolute inset-0 flex flex-col justify-start p-8 text-white pt-12">
                  <h3 class="text-3xl font-bold mb-4">Join Our Training Programs</h3>
                  <p class="text-blue-100 text-lg mb-8">Take the first step towards professional excellence in electromechanics</p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span class="text-blue-50">Certified Courses</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span class="text-blue-50">Expert Instructors</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span class="text-blue-50">Practical Training</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span class="text-blue-50">Career Development</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Form Side -->
              <div class="p-6 md:p-10">
                <form @submit.prevent="submitRegistration" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('training.fullName') }} *</label>
                      <input
                        v-model="registrationForm.name"
                        type="text"
                        required
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none transition-all"
                        :placeholder="t('training.enterName')"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('training.email') }} *</label>
                      <input
                        v-model="registrationForm.email"
                        type="email"
                        required
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none transition-all"
                        :placeholder="t('training.enterEmail')"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('training.phone') }} *</label>
                      <input
                        v-model="registrationForm.phone"
                        type="tel"
                        required
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none transition-all"
                        :placeholder="t('training.enterPhone')"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('training.selectedCourse') }} *</label>
                      <select
                        v-model="registrationForm.course"
                        required
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none transition-all"
                      >
                        <option value="">{{ t('training.selectCourse') }}</option>
                        <option v-for="course in courses" :key="course.id" :value="course.id">
                          {{ course.title }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('training.experience') }}</label>
                    <textarea
                      v-model="registrationForm.experience"
                      rows="4"
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none transition-all"
                      :placeholder="t('training.enterExperience')"
                    ></textarea>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('training.message') }}</label>
                    <textarea
                      v-model="registrationForm.message"
                      rows="3"
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40 focus:border-blue-500 outline-none transition-all"
                      :placeholder="t('training.enterMessage')"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isSubmitting ? t('training.submitting') : t('training.submitRegistration') }}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="mb-16">
        <div class="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            {{ t('training.ctaTitle') }}
          </h2>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            {{ t('training.ctaText') }}
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              @click="coursesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })"
              class="inline-flex items-center px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              {{ t('training.browseCourses') }}
            </button>
            <button
              type="button"
              @click="formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })"
              class="inline-flex items-center px-8 py-4 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition-colors shadow-lg"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {{ t('training.enrollNow') }}
            </button>
            <a
              href="/contact"
              class="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              {{ t('training.contactTraining') }}
            </a>
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
import ele6Img from '../assets/ele6.jpg'

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

const isSubmitting = ref(false)

const registrationForm = ref({
  name: '',
  email: '',
  phone: '',
  course: '',
  experience: '',
  message: ''
})

const formSection = ref(null)
const coursesSection = ref(null)

const courses = computed(() => {
  const imgs = assetImages.value
  const img = (i) => imgs[i] || imgs[0]
  return [
    { 
      id: 1, 
      title: t('training.classicalControl'), 
      subtitle: t('training.classicalControlSubtitle'),
      description: t('training.classicalControlDesc'), 
      duration: t('training.weeks2'), 
      maxStudents: 20, 
      image: img(0),
      learnTitle: t('training.classicalControlLearn'),
      learnItems: [
        t('training.classicalControl1'),
        t('training.classicalControl2'),
        t('training.classicalControl3')
      ],
      targetTitle: t('training.classicalControlTarget'),
      targetText: t('training.classicalControlTargetText')
    },
    { 
      id: 2, 
      title: t('training.autocadElectrical'), 
      subtitle: t('training.autocadElectricalSubtitle'),
      description: t('training.autocadElectricalDesc'), 
      duration: t('training.weeks3'), 
      maxStudents: 15, 
      image: img(1),
      learnTitle: t('training.autocadElectricalLearn'),
      learnItems: [
        t('training.autocadElectrical1'),
        t('training.autocadElectrical2'),
        t('training.autocadElectrical3'),
        t('training.autocadElectrical4')
      ],
      targetTitle: t('training.autocadElectricalTarget'),
      targetText: t('training.autocadElectricalTargetText')
    },
    { 
      id: 3, 
      title: t('training.plc'), 
      subtitle: t('training.plcSubtitle'),
      description: t('training.plcDesc'), 
      duration: t('training.weeks4'), 
      maxStudents: 12, 
      image: img(2),
      learnTitle: t('training.plcLearn'),
      learnItems: [
        t('training.plc1'),
        t('training.plc2'),
        t('training.plc3'),
        t('training.plc4')
      ],
      targetTitle: t('training.plcTarget'),
      targetText: t('training.plcTargetText')
    }
  ]
})

const selectCourse = (course) => {
  // Set the selected course in the form
  registrationForm.value.course = course.id
  
  // Scroll to the registration form smoothly
  setTimeout(() => {
    formSection.value?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }, 100)
}

const submitRegistration = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1200))
  // eslint-disable-next-line no-console
  console.log('Registration submitted:', registrationForm.value)
  isSubmitting.value = false

  registrationForm.value = {
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    message: ''
  }

  alert(t('training.registrationSuccess'))
}
</script>

<style scoped>
.training-page {
  font-family: 'Tajawal', sans-serif;
}



.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
