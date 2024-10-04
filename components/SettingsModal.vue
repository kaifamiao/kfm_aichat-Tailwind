<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Settings</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-800">&times;</button>
      </div>

      <!-- Tabs for Settings -->
      <div class="mb-4">
        <ul class="flex border-b">
          <li class="mr-1" v-for="tab in tabs" :key="tab">
            <button @click="activeTab = tab" :class="{'text-blue-500 border-blue-500': activeTab === tab}" class="p-2 text-gray-600 border-b-2 hover:text-blue-500">
              {{ tab }}
            </button>
          </li>
        </ul>
      </div>

      <!-- Tab content -->
      <div class="p-4">
        <div v-if="activeTab === 'System Settings'">System settings content...</div>
        <div v-else-if="activeTab === 'AI Models'">AI model settings content...</div>
        <div v-else-if="activeTab === 'Knowledge Base'">Knowledge base settings content...</div>
        <div v-else-if="activeTab === 'Prompt Settings'">Prompt settings content...</div>
        <div v-else-if="activeTab === 'User Settings'">User settings content...</div>
        <div v-else-if="activeTab === 'Agent Settings'">Agent settings content...</div>
      </div>

      <!-- Modal Buttons -->
      <div class="flex justify-end mt-4">
        <button @click="saveSettings" class="px-4 py-2 bg-blue-500 text-white rounded mr-2">Save</button>
        <button @click="closeModal" class="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

// Props to control modal visibility
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

// Tabs for settings
const tabs = ['System Settings', 'AI Models', 'Knowledge Base', 'Prompt Settings', 'User Settings', 'Agent Settings']
const activeTab = ref(tabs[0]) // Default tab is the first one

// Close modal
const closeModal = () => {
  emit('close')
}

// Save settings
const saveSettings = () => {
  // Logic to save settings
  closeModal()
}
</script>
