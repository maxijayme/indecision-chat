import ChatMessages from "@/components/chat/ChatMessages.vue"
import MessageBox from "@/components/chat/MessageBox.vue"
import IndecisionView from "@/views/IndecisionView.vue"
import { mount } from "@vue/test-utils"


describe('<IndecisionView />', () => {
  const wrapper = mount(IndecisionView)
  const messageBoxComponent = wrapper.findComponent(MessageBox)
  const chatMessagesComponent = wrapper.findComponent(ChatMessages)

  test('should render IndecisionView component', () => {
    expect(messageBoxComponent.exists()).toBe(true)
    expect(chatMessagesComponent.exists()).toBe(true)
  })

  test('calls onMessage when sending a message', () => {
    messageBoxComponent.vm.$emit('sendMessage', 'chau')

    expect(chatMessagesComponent.props('messages')[0].message).toBe('chau')
  })
})
