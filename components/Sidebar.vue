<template>
  <aside class="flex flex-col h-full bg-gray-700 text-white p-4">
    <!-- New Chat Button (at the top) -->
    <button class="mb-4 p-2 bg-blue-500 rounded" @click="startNewChat">
      New Chat
    </button>

    <!-- Scrollable Chat History (middle) -->
    <div class="flex-grow overflow-y-auto">
      <h2 class="text-lg mb-2">History</h2>
      <ul>
        <li v-for="(chat, index) in historyChats" :key="index" @click="selectHistoryChat(chat)">
          {{ chat.title }}
        </li>
      </ul>
    </div>

    <!-- Settings Button (fixed at the bottom) -->
    <button class="p-2 bg-gray-500 rounded mt-auto" @click="openSettings">
      Settings
    </button>

    <!-- Settings Modal -->
    <SettingsModal :isOpen="isModalOpen" @close="closeSettingsModal" />
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useChatStore } from '~/store/useChatStore'
import SettingsModal from '~/components/SettingsModal.vue'

const chatStore = useChatStore()
const { historyChats, startNewChat, showHistoryChat } = chatStore

// Modal visibility state
const isModalOpen = ref(false)

// Function to open the modal
const openSettings = () => {
  isModalOpen.value = true
}

// Function to close the modal
const closeSettingsModal = () => {
  isModalOpen.value = false
}

// Function to select and show history chat
const selectHistoryChat = (chat) => {
  showHistoryChat(chat)
}
</script>
