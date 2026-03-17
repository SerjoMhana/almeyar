<template>
  <nav class="bg-white/95 backdrop-blur-md fixed w-full z-50 top-0 start-0 border-b border-gray-100 shadow-sm transition-all duration-300">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse group">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 transition-transform duration-300 group-hover:scale-105" alt="Flowbite Logo" />
        <span class="self-center text-2xl text-gray-900 font-bold whitespace-nowrap tracking-tight">Flowbite</span>
      </a>
      
      <div class="flex items-center md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
        <LanguageSwitcher 
          :current-language="currentLanguage" 
          @language-changed="handleLanguageChange" 
        />
        
        <button 
          data-collapse-toggle="navbar-language" 
          type="button" 
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors" 
          aria-controls="navbar-language" 
          aria-expanded="false"
          @click="toggleMobileMenu"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      
      <div 
        :class="{'hidden': !isMobileMenuOpen, 'block': isMobileMenuOpen}" 
        class="items-center justify-between w-full md:flex md:w-auto md:order-1" 
        id="navbar-language"
      >
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-xl bg-gray-50 md:flex-row md:gap-8 md:mt-0 md:border-0 md:bg-transparent">
          <li>
            <router-link 
              to="/" 
              class="block py-2 px-3 rounded-lg md:p-0 transition-all duration-200" 
              :class="[
                $route.name === 'home' 
                  ? 'text-white bg-brand md:bg-transparent md:text-brand font-semibold' 
                  : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand'
              ]"
              @click="closeMobileMenu"
            >
              {{ t('navigation.home') }}
            </router-link>
          </li>
          <li>
            <router-link 
              to="/about" 
              class="block py-2 px-3 rounded-lg md:p-0 transition-all duration-200" 
              :class="[
                $route.name === 'about' 
                  ? 'text-white bg-brand md:bg-transparent md:text-brand font-semibold' 
                  : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand'
              ]"
              @click="closeMobileMenu"
            >
              {{ t('navigation.about') }}
            </router-link>
          </li>
          <li>
            <router-link 
              to="/portfolio" 
              class="block py-2 px-3 rounded-lg md:p-0 transition-all duration-200" 
              :class="[
                $route.name === 'portfolio' 
                  ? 'text-white bg-brand md:bg-transparent md:text-brand font-semibold' 
                  : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand'
              ]"
              @click="closeMobileMenu"
            >
              {{ t('navigation.portfolio') }}
            </router-link>
          </li>
          <li>
            <router-link 
              to="/gallery" 
              class="block py-2 px-3 rounded-lg md:p-0 transition-all duration-200" 
              :class="[
                $route.name === 'gallery' 
                  ? 'text-white bg-brand md:bg-transparent md:text-brand font-semibold' 
                  : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand'
              ]"
              @click="closeMobileMenu"
            >
              {{ t('navigation.gallery') }}
            </router-link>
          </li>
          <li>
            <router-link 
              to="/training" 
              class="block py-2 px-3 rounded-lg md:p-0 transition-all duration-200" 
              :class="[
                $route.name === 'training' 
                  ? 'text-white bg-brand md:bg-transparent md:text-brand font-semibold' 
                  : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand'
              ]"
              @click="closeMobileMenu"
            >
              {{ t('navigation.training') }}
            </router-link>
          </li>
          <li>
            <router-link 
              to="/products" 
              class="block py-2 px-3 rounded-lg md:p-0 transition-all duration-200" 
              :class="[
                $route.name === 'products' 
                  ? 'text-white bg-brand md:bg-transparent md:text-brand font-semibold' 
                  : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand'
              ]"
              @click="closeMobileMenu"
            >
              {{ t('navigation.products') }}
            </router-link>
          </li>
          <li>
            <router-link 
              to="/contact" 
              class="block py-2 px-3 rounded-lg md:p-0 transition-all duration-200" 
              :class="[
                $route.name === 'contact' 
                  ? 'text-white bg-brand md:bg-transparent md:text-brand font-semibold' 
                  : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand'
              ]"
              @click="closeMobileMenu"
            >
              {{ t('navigation.contact') }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { translations, getCurrentLanguage, setLanguage } from '../translations'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const currentLanguage = ref(getCurrentLanguage())

const t = (key) => {
  const keys = key.split('.')
  let value = translations[currentLanguage.value]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleLanguageChange = (lang) => {
  currentLanguage.value = lang
  setLanguage(lang)
  // Reload the page to apply the new language
  window.location.reload()
}
</script>