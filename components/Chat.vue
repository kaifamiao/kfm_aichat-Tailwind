<template>
  <div>
    <div v-for="(message, index) in messages" :key="index" class="flex mb-4">
      <div class="flex-shrink-0">
        <img v-if="message.role === 'ai'" src="/ai-avatar.svg" alt="AI Avatar" class="h-8 w-8" />
        <img v-else src="/user-avatar.svg" alt="User Avatar" class="h-8 w-8" />
      </div>
      <div class="ml-4 bg-white p-4 rounded shadow-sm">
        {{ message.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  messages: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.ml-4 {
  margin-left: 1rem;
}
.bg-white {
  background-color: #ffffff;
}
.p-4 {
  padding: 1rem;
}
</style>
