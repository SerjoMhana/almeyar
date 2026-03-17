<template>
  <div class="relative">
    <button 
      type="button" 
      @click="toggleDropdown"
      class="flex items-center text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
    >
      <svg 
        v-if="currentLanguage === 'ar'" 
        class="h-4 w-5.5 me-1.5 rounded-[2px] object-cover shadow-sm border border-gray-100" 
        viewBox="0 0 144 96" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#e70013" d="M0 0h144v24H0z"/>
        <path fill="#000000" d="M0 24h144v48H0z"/>
        <path fill="#239e46" d="M0 72h144v24H0z"/>
        <path fill="#ffffff" d="M74.8 26.7c-3.5-.2-6.9 1.2-9.2 3.8-2.3 2.6-3.3 6.1-2.7 9.5.6 3.5 2.8 6.5 5.8 8.2 3 1.7 6.6 2.1 9.8 1-3.6 1.9-7.9 1.4-11.1-1.1-3.1-2.6-4.6-6.8-3.6-10.8.9-4 4.1-7.1 8-8 1-.2 2-.3 3.1-.3 1.6 0 3.2.4 4.7 1.1l-4.8-3.4z"/>
        <path fill="#ffffff" d="M79.5 32.8l1.6 5h5.3l-4.3 3.1 1.6 5-4.3-3.1-4.3 3.1 1.6-5-4.3-3.1h5.3z"/>
      </svg>
      <svg 
        v-else
        class="h-4 w-4 me-1.5" 
        viewBox="0 0 18 18" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.00023 16.5C13.1425 16.5 16.5005 13.1421 16.5005 9C16.5005 4.85786 13.1425 1.5 9.00023 1.5C4.85797 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85797 16.5 9.00023 16.5Z" fill="white"/>
        <path d="M8.67548 8.99996H16.5012C16.5012 8.32308 16.4109 7.66735 16.2428 7.04358H8.67548V8.99996Z" fill="#D80027"/>
        <path d="M8.67548 5.08712H15.4004C14.9413 4.338 14.3543 3.67585 13.6699 3.13074H8.67548V5.08712Z" fill="#D80027"/>
        <path d="M9.0005 16.5001C10.7655 16.5001 12.3878 15.89 13.6689 14.8698H4.33209C5.61318 15.89 7.23548 16.5001 9.0005 16.5001Z" fill="#D80027"/>
        <path d="M2.60125 12.9132H15.4C15.7686 12.3118 16.0545 11.6543 16.2425 10.9567H1.75879C1.94679 11.6543 2.23265 12.3118 2.60125 12.9132Z" fill="#D80027"/>
        <path d="M4.97397 2.67114H5.65741L5.0217 3.13297L5.26453 3.88024L4.62884 3.41841L3.99316 3.88024L4.20292 3.23468C3.6432 3.7009 3.15262 4.24713 2.74834 4.85575H2.96732L2.56266 5.14972C2.49962 5.25489 2.43915 5.36173 2.38121 5.47015L2.57444 6.06485L2.21393 5.80293C2.12432 5.99279 2.04235 6.18692 1.96867 6.3851L2.18156 7.04036H2.96732L2.33161 7.50219L2.57444 8.24947L1.93876 7.78764L1.55798 8.0643C1.51986 8.37066 1.5 8.6827 1.5 8.99941H8.99964C8.99964 4.85763 8.99964 4.36934 8.99964 1.5C7.51811 1.5 6.13703 1.92975 4.97397 2.67114ZM5.26453 8.24947L4.62884 7.78764L3.99316 8.24947L4.23599 7.50219L3.60028 7.04036H4.38604L4.62884 6.29309L4.87165 7.04036H5.65741L5.0217 7.50219L5.26453 8.24947ZM5.0217 5.31758L5.26453 6.06485L4.62884 5.60303L3.99316 6.06485L4.23599 5.31758L3.60028 4.85575H4.38604L4.62884 4.10848L4.87165 4.85575H5.65741L5.0217 5.31758ZM7.95461 8.24947L7.31893 7.78764L6.68325 8.24947L6.92608 7.50219L6.29037 7.04036H7.07613L7.31893 6.29309L7.56173 7.04036H8.34749L7.71178 7.50219L7.95461 8.24947ZM7.71178 5.31758L7.95461 6.06485L7.31893 5.60303L6.68325 6.06485L6.92608 5.31758L6.29037 4.85575H7.07613L7.31893 4.10848L7.56173 4.85575H8.34749L7.71178 5.31758ZM7.71178 3.13297L7.95461 3.88024L7.31893 3.41841L6.68325 3.88024L6.92608 3.13297L6.29037 2.67114H7.07613L7.31893 1.92386L7.56173 2.67114H8.34749L7.71178 3.13297Z" fill="#1A47B8"/>
        <circle cx="9" cy="9" r="8.5" stroke="#E5E7EB" stroke-width="0.5"/>
      </svg>
      {{ languageDisplay }}
    </button>
    
    <!-- Dropdown -->
    <div 
      v-show="isDropdownOpen" 
      class="z-50 absolute right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg w-44 overflow-hidden origin-top-right transition-all"
      id="language-dropdown-menu"
    >
      <ul class="py-1 text-sm text-gray-700" role="none">
        <li>
          <button 
            @click="switchLanguage('en')" 
            class="w-full text-start inline-flex items-center px-4 py-2.5 hover:bg-gray-50 hover:text-brand transition-colors"
            role="menuitem"
          >
            <div class="inline-flex items-center font-medium">
              <svg class="h-4 w-4 me-2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00023 16.5C13.1425 16.5 16.5005 13.1421 16.5005 9C16.5005 4.85786 13.1425 1.5 9.00023 1.5C4.85797 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85797 16.5 9.00023 16.5Z" fill="white"/>
                <path d="M8.67548 8.99996H16.5012C16.5012 8.32308 16.4109 7.66735 16.2428 7.04358H8.67548V8.99996Z" fill="#D80027"/>
                <path d="M8.67548 5.08712H15.4004C14.9413 4.338 14.3543 3.67585 13.6699 3.13074H8.67548V5.08712Z" fill="#D80027"/>
                <path d="M9.0005 16.5001C10.7655 16.5001 12.3878 15.89 13.6689 14.8698H4.33209C5.61318 15.89 7.23548 16.5001 9.0005 16.5001Z" fill="#D80027"/>
                <path d="M2.60125 12.9132H15.4C15.7686 12.3118 16.0545 11.6543 16.2425 10.9567H1.75879C1.94679 11.6543 2.23265 12.3118 2.60125 12.9132Z" fill="#D80027"/>
                <path d="M4.97397 2.67114H5.65741L5.0217 3.13297L5.26453 3.88024L4.62884 3.41841L3.99316 3.88024L4.20292 3.23468C3.6432 3.7009 3.15262 4.24713 2.74834 4.85575H2.96732L2.56266 5.14972C2.49962 5.25489 2.43915 5.36173 2.38121 5.47015L2.57444 6.06485L2.21393 5.80293C2.12432 5.99279 2.04235 6.18692 1.96867 6.3851L2.18156 7.04036H2.96732L2.33161 7.50219L2.57444 8.24947L1.93876 7.78764L1.55798 8.0643C1.51986 8.37066 1.5 8.6827 1.5 8.99941H8.99964C8.99964 4.85763 8.99964 4.36934 8.99964 1.5C7.51811 1.5 6.13703 1.92975 4.97397 2.67114ZM5.26453 8.24947L4.62884 7.78764L3.99316 8.24947L4.23599 7.50219L3.60028 7.04036H4.38604L4.62884 6.29309L4.87165 7.04036H5.65741L5.0217 7.50219L5.26453 8.24947ZM5.0217 5.31758L5.26453 6.06485L4.62884 5.60303L3.99316 6.06485L4.23599 5.31758L3.60028 4.85575H4.38604L4.62884 4.10848L4.87165 4.85575H5.65741L5.0217 5.31758ZM7.95461 8.24947L7.31893 7.78764L6.68325 8.24947L6.92608 7.50219L6.29037 7.04036H7.07613L7.31893 6.29309L7.56173 7.04036H8.34749L7.71178 7.50219L7.95461 8.24947ZM7.71178 5.31758L7.95461 6.06485L7.31893 5.60303L6.68325 6.06485L6.92608 5.31758L6.29037 4.85575H7.07613L7.31893 4.10848L7.56173 4.85575H8.34749L7.71178 5.31758ZM7.71178 3.13297L7.95461 3.88024L7.31893 3.41841L6.68325 3.88024L6.92608 3.13297L6.29037 2.67114H7.07613L7.31893 1.92386L7.56173 2.67114H8.34749L7.71178 3.13297Z" fill="#1A47B8"/>
                <circle cx="9" cy="9" r="8.5" stroke="#E5E7EB" stroke-width="0.5"/>
              </svg>             
              English
            </div>
          </button>
        </li>
        <li>
          <button 
            @click="switchLanguage('ar')" 
            class="w-full text-start inline-flex items-center w-full px-4 py-2.5 hover:bg-gray-50 hover:text-brand transition-colors"
            role="menuitem"
          >
            <div class="inline-flex items-center font-medium">
              <svg class="h-4 w-5.5 me-2 rounded-[2px] object-cover shadow-sm border border-gray-100" viewBox="0 0 144 96" xmlns="http://www.w3.org/2000/svg">
                <path fill="#e70013" d="M0 0h144v24H0z"/>
                <path fill="#000000" d="M0 24h144v48H0z"/>
                <path fill="#239e46" d="M0 72h144v24H0z"/>
                <path fill="#ffffff" d="M74.8 26.7c-3.5-.2-6.9 1.2-9.2 3.8-2.3 2.6-3.3 6.1-2.7 9.5.6 3.5 2.8 6.5 5.8 8.2 3 1.7 6.6 2.1 9.8 1-3.6 1.9-7.9 1.4-11.1-1.1-3.1-2.6-4.6-6.8-3.6-10.8.9-4 4.1-7.1 8-8 1-.2 2-.3 3.1-.3 1.6 0 3.2.4 4.7 1.1l-4.8-3.4z"/>
                <path fill="#ffffff" d="M79.5 32.8l1.6 5h5.3l-4.3 3.1 1.6 5-4.3-3.1-4.3 3.1 1.6-5-4.3-3.1h5.3z"/>
              </svg>
              العربية
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  currentLanguage: {
    type: String,
    default: 'en'
  }
})

const emit = defineEmits(['language-changed'])

const isDropdownOpen = ref(false)

const languageDisplay = computed(() => {
  return props.currentLanguage === 'ar' ? 'العربية' : 'English'
})

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const switchLanguage = (lang) => {
  emit('language-changed', lang)
  isDropdownOpen.value = false
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  const dropdown = document.getElementById('language-dropdown-menu')
  if (dropdown && !dropdown.contains(event.target) && !event.target.closest('button')) {
    isDropdownOpen.value = false
  }
})
</script>