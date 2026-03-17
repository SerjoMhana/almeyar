<template>
  <section class="page-hero relative min-h-[40vh] md:min-h-[350px] flex items-center overflow-hidden">
    <div class="absolute inset-0">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover scale-slow"
      />
      <!-- Modern gradients for better text readability and aesthetics -->
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-black/10"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-transparent"></div>
    </div>
    
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-32 lg:pb-16">
      <div class="max-w-3xl transform transition-all duration-700 translate-y-0 opacity-100">
        <!-- Glassmorphic Badge -->
        <span 
          v-if="badgeText" 
          class="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 font-medium text-sm tracking-wider uppercase shadow-lg shadow-black/20"
        >
          {{ badgeText }}
        </span>
        
        <!-- Animated Title with Glow -->
        <h1 class="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-2xl">
          {{ title }}
        </h1>
        
        <!-- Elegant Description Container -->
        <p v-if="description" class="text-lg md:text-xl text-gray-200 mt-3 max-w-2xl leading-relaxed rtl:border-r-4 rtl:pl-0 rtl:pr-4 border-l-4 border-blue-500 pl-4">
          {{ description }}
        </p>
      </div>
    </div>

    <!-- Decorative Bottom Wave / Divider -->
    <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
      <svg class="block w-full h-10 md:h-16 text-gray-50 dark:text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,155.45,116.79,219,109.11,257.6,104.38,295.4,91.82,321.39,56.44Z" fill="currentColor"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    required: true
  },
  badgeText: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.page-hero .scale-slow {
  animation: scaleSlow 25s ease-in-out infinite alternate;
}

@keyframes scaleSlow {
  from { transform: scale(1); }
  to { transform: scale(1.08); }
}

[dir="rtl"] .rtl\:border-r-4 {
  border-right-width: 4px;
  border-left-width: 0;
}
[dir="rtl"] .rtl\:pr-4 {
  padding-right: 1rem;
  padding-left: 0;
}
</style>
