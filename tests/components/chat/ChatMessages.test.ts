import { mount } from '@vue/test-utils'
import ChatMessages from "@/components/chat/ChatMessages.vue"
import type { ChatMessage } from '@/interfaces/chat-message-interface';

const messages: ChatMessage[] = [
  { id: '1', message: 'Hello', itsMine: true },
  { id: '2', message: 'Hi', itsMine: false, image: 'https://example.com/image.png' }
]

describe('<ChatMessages />', () => {
  test('render chat messages correctly', () => {
    const wrapper = mount(ChatMessages,
      {
        props: {
          messages,
          isTyping: false
        }
      }
    )
    const chatMessages = wrapper.findAllComponents({name:'ChatBubble'})
    expect(chatMessages.length).toBe(messages.length)
  })

  test('should scroll on new message', async () => {
    const wrapper = mount(ChatMessages,
      {
        props: {
          messages,
          isTyping: false
        }
      }
    )

    const scrollToMock = vi.fn()
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement
    chatRef.scrollTo = scrollToMock

    await wrapper.setProps({ messages: [...messages, { id: '3', message: 'New message', itsMine: true }] })

    await wrapper.vm.$nextTick()
    expect(scrollToMock).toHaveBeenCalledTimes(1)
  })
})

