<template>
  <div>
    <h2 class="text-xl mb-4">History Chat</h2>
    <div v-if="selectedChat" class="bg-white p-4 rounded shadow-sm">
      <p>{{ selectedChat.content }}</p>
    </div>
    <div v-else>
      <p>No chat selected</p>
    </div>
  </div>
</template>

<script setup>
import { useChatStore } from '~/store/useChatStore'
const chatStore = useChatStore()

const { selectedChat } = chatStore
</script>
