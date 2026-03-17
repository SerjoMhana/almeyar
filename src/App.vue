<script setup>
import Header from './components/Header.vue'
import { getCurrentLanguage } from './translations'
import { computed } from 'vue'

const currentLanguage = computed(() => getCurrentLanguage())
const isRtl = computed(() => currentLanguage.value === 'ar')
</script>

<template>
  <div :dir="isRtl ? 'rtl' : 'ltr'" :class="{'font-arabic': isRtl}">
    <Header />
    
    <router-view/>
  </div>
</template>

<style>
.font-arabic {
  font-family: 'Tajawal', 'Arial', sans-serif;
}
</style>
