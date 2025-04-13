import { ref } from "vue";
import type { ChatMessage } from '@/interfaces/chat-message-interface';
export const useChat = () => {

  const messages = ref<ChatMessage[]>([
    {
      id: "1",
      message: 'Hola, ¿cómo estás?',
      itsMine: true,
      image: 'https://example.com/image1.jpg',
    },
    {
      id: "2",
      message: 'Estoy así. ¿Y tú?',
      itsMine: false,
      image: 'https://yesno.wtf/assets/no/23-5fe6c1ca6c78e7bf9a7cf43e406fb8db.gif',
    },
  ]);

  const addNewMessage = (message: string) => {
    messages.value.push({
      id: String(messages.value.length + 1),
      message,
      itsMine: true,
    });
  };

return {

  messages,
  addNewMessage,
}
}
