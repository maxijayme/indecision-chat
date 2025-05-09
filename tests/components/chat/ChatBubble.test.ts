import ChatBubble from "@/components/chat/ChatBubble.vue"
import { mount } from "@vue/test-utils"

describe('<ChatBubble>', () => {
  test('render own message', () => {
    const message = "Hello"
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true,
      },
    })
    const mineMessage = wrapper.get('[data-vtest="mine-message"]')
    const otherMessage = wrapper.find('[data-vtest="other-user-message"]')
    expect(mineMessage
      .text())
      .toContain(message)
    expect(otherMessage.exists())
      .toBe(false)
  })

  test('render other message', () => {
    const message = "Hello"
    const itsMine = false
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine
      },
    })
    const mineMessage = wrapper.find('[data-vtest="mine-message"]')
    const otherMessage = wrapper.get('[data-vtest="other-user-message"]')
    const messageImage = wrapper.find('[data-vtest="other-user-message-image"]')
    expect(mineMessage.exists())
      .toBe(false)
    expect(otherMessage
      .text())
      .toContain(message)
    expect(messageImage.exists())
      .toBe(false)
  })
  test('render other message with image', () => {
    const message = "Hello"
    const itsMine = false
    const image = "https://example.com/image.jpg"
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine,
        image
      },
    })
    const mineMessage = wrapper.find('[data-vtest="mine-message"]')
    const otherMessage = wrapper.get('[data-vtest="other-user-message"]')
    const messageImage = wrapper.find('[data-vtest="other-user-message-image"]')
    expect(mineMessage.exists())
      .toBe(false)
    expect(otherMessage
      .text())
      .toContain(message)
    expect(messageImage.attributes('src')).toBe(image)
  })
})
