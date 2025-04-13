<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import ChatBubble from './ChatBubble.vue';
import { nextTick, ref, watch } from 'vue';
;

interface Props {
  messages: ChatMessage[];
  isTyping: boolean;
}
const props = defineProps<Props>();


const chatRef = ref<HTMLElement | null>(null);

watch(props.messages, async () => {
  await nextTick();
  if (chatRef.value) {
    chatRef.value.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }
});

</script>

<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <div v-if="isTyping" class="flex">
        <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
          <span class="italic">Answering...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
