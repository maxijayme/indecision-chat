import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import type { YesOrNot } from '@/interfaces/yes-or-not-interface';
import { sleep } from '@/helpers/sleep';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const isTyping = ref<boolean>(false);

  const getOtherUserResponse = async (): Promise<YesOrNot> => {
    const response = await fetch('https://yesno.wtf/api');
    const data = await response.json();
    return data;
  };

  const addNewMessage = async (message: string) => {
    if (message.length === 0) return;

    messages.value.push({
      id: String(messages.value.length + 1),
      message,
      itsMine: true,
    });

    if (!message.endsWith('?')) return;

    isTyping.value = true;
    await sleep(2000);
    isTyping.value = false;

    const response = await getOtherUserResponse();
    messages.value.push({
      id: 'id-' + crypto.randomUUID(),
      message: response.answer,
      itsMine: false,
      image: response.image,
    });
  };

  return {
    messages,
    isTyping,
    addNewMessage,
  };
};
