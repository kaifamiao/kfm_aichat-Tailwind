<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <Header class="header"  />

    <div class="flex flex-grow relative">
      <!-- Sidebar (hidden on small screens) -->
      <Sidebar v-if="!isMobile || sidebarVisible" class="sidebar" />

      <!-- Main Content -->
      <div class="flex-grow">
        <button
            @click="toggleSidebar"
            class="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded md:hidden"
        >
          {{ sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar' }}
        </button>

        <MainContent />
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
<style scoped>
/* Ensure the layout takes full height of the viewport */
.flex-grow {
  min-height: 0;
}
</style>
<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'
import MainContent from '~/components/MainContent.vue'
import Footer from '~/components/Footer.vue'

// Reactive state to manage sidebar visibility
const sidebarVisible = ref(false)
const isMobile = ref(false)

// Function to toggle sidebar visibility
const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}

// Detect screen size to determine if we are on mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768 // 768px is the breakpoint for mobile
}

// Ensure we check the screen size on mount and when the window is resized
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
</script>
