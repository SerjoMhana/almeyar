<script setup>
import Header from './components/Header.vue'
import { getCurrentLanguage } from './translations'
import { computed, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { refreshScrollReveal } from './utils/scrollReveal'

const route = useRoute()
const currentLanguage = computed(() => getCurrentLanguage())
const isRtl = computed(() => currentLanguage.value === 'ar')

onMounted(() => {
  nextTick(refreshScrollReveal)
})
</script>

<template>
  <div :dir="isRtl ? 'rtl' : 'ltr'" :class="{'font-arabic': isRtl}">
    <div class="route-loading-bar" aria-hidden="true"></div>
    <Header />

    <main>
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in" @after-enter="refreshScrollReveal">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </router-view>
    </main>
  </div>
</template>

<style>
.font-arabic {
  font-family: 'Tajawal', 'Arial', sans-serif;
}
</style>
