<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-8 rounded-lg max-w-lg w-full">
      <h2 class="text-xl mb-4">Settings</h2>
      <div>
        <!-- Tabs for system, AI models, prompts, knowledge base, user, and agent settings -->
      </div>
      <div class="mt-4 flex justify-end space-x-2">
        <button class="p-2 bg-gray-500 text-white rounded" @click="cancel">Cancel</button>
        <button class="p-2 bg-blue-500 text-white rounded" @click="save">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useChatStore } from '~/store/useChatStore'

const chatStore = useChatStore()
const isOpen = false

function cancel() {
  // Close modal logic
}

function save() {
  // Save settings logic
}
</script>
