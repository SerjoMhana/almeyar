<template>
  <div ref="switcherRef" class="relative">
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-base border border-transparent px-3 py-2 text-sm font-medium leading-5 text-heading hover:bg-neutral-secondary-medium focus:outline-none focus:ring-4 focus:ring-neutral-tertiary"
      :aria-expanded="String(isDropdownOpen)"
      aria-haspopup="menu"
      @click="toggleDropdown"
    >
      <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-[11px] font-bold text-blue-700">
        {{ currentLanguage === 'ar' ? 'ع' : 'EN' }}
      </span>
      {{ languageDisplay }}
    </button>

    <div
      v-show="isDropdownOpen"
      class="absolute right-0 z-50 mt-2 w-44 origin-top-right overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg"
      role="menu"
    >
      <ul class="py-1 text-sm text-gray-700" role="none">
        <li>
          <button
            type="button"
            class="inline-flex w-full items-center gap-2 px-4 py-2.5 text-start transition-colors hover:bg-gray-50 hover:text-brand"
            role="menuitem"
            @click="switchLanguage('en')"
          >
            <span class="grid h-5 w-5 place-items-center rounded-full bg-gray-100 text-[10px] font-bold text-gray-700">EN</span>
            English
          </button>
        </li>
        <li>
          <button
            type="button"
            class="inline-flex w-full items-center gap-2 px-4 py-2.5 text-start transition-colors hover:bg-gray-50 hover:text-brand"
            role="menuitem"
            @click="switchLanguage('ar')"
          >
            <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-[11px] font-bold text-blue-700">ع</span>
            العربية
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  currentLanguage: {
    type: String,
    default: 'en'
  }
})

const emit = defineEmits(['language-changed'])

const isDropdownOpen = ref(false)
const switcherRef = ref(null)

const languageDisplay = computed(() => (props.currentLanguage === 'ar' ? 'العربية' : 'English'))

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const switchLanguage = (lang) => {
  emit('language-changed', lang)
  isDropdownOpen.value = false
}

const handleDocumentClick = (event) => {
  if (switcherRef.value && !switcherRef.value.contains(event.target)) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
})
</script>
