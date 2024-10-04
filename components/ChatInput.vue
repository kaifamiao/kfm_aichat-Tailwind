<template>
  <div class="flex items-center space-x-2">
    <input v-model="inputText" class="flex-grow p-2 border rounded" placeholder="Type your message..." />
    <button @click="sendMessage" class="p-2 bg-blue-500 text-white rounded">Send</button>
  </div>
</template>

<script setup>
import { useChatStore } from '~/store/useChatStore'

const chatStore = useChatStore()
let inputText = ''

function sendMessage() {
  if (inputText.trim()) {
    chatStore.sendMessage(inputText)
    inputText = ''
  }
}
</script>
