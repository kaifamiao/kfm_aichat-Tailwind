<template>
  <div class="flex flex-col h-full">
    <!-- Header with Dropdowns -->
    <div class="mb-4">
      <select v-model="selectedModel" class="p-2 border rounded">
        <option v-for="model in models" :key="model">{{ model }}</option>
      </select>
      <select v-model="selectedPrompt" class="p-2 border rounded">
        <option v-for="prompt in prompts" :key="prompt">{{ prompt }}</option>
      </select>
      <select v-model="selectedKnowledgeBase" class="p-2 border rounded">
        <option v-for="kb in knowledgeBases" :key="kb">{{ kb }}</option>
      </select>
    </div>

    <!-- Scrollable Chat Component Area -->
    <div ref="chatContainer" class="flex-grow overflow-y-auto p-4 bg-gray-100">
      <Chat :messages="messages" />
    </div>

    <!-- Chat Input at the bottom -->
    <div class="p-4 bg-white">
      <ChatInput />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { useChatStore } from '~/store/useChatStore'
import Chat from '~/components/Chat.vue'
import ChatInput from '~/components/ChatInput.vue'

const chatStore = useChatStore()
const { selectedModel, selectedPrompt, selectedKnowledgeBase, models, prompts, knowledgeBases, messages } = chatStore

// Reference to the chat container (scrollable area)
const chatContainer = ref(null)

// Function to scroll to the bottom of the chat container
const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

// Scroll to bottom when the component is mounted
onMounted(() => {
  scrollToBottom()
})

// Watch the messages array, and scroll to bottom when new messages are added
watch(
    () => messages.length,
    async () => {
      await nextTick() // Wait for DOM to update
      scrollToBottom()
    }
)
</script>

<style scoped>
/* Ensure that the chat area (chatContainer) does not resize the page */
.flex-grow {
  min-height: 0; /* Required to handle scrollable areas inside flex layouts */
}
</style>
