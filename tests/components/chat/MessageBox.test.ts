import MessageBox from "@/components/chat/MessageBox.vue"
import { mount } from "@vue/test-utils"

describe('<MessageBox>', () => {
  const wrapper = mount(MessageBox)
  test('render should match with snapshot', () => {
    expect(wrapper.html())
      .toMatchSnapshot()
  })
  test('shoul have text input and a button', () => {
    const input = wrapper.find('input[type="text"]')
    const button = wrapper.find('button')
    expect(input.exists())
      .toBe(true)
    expect(button.exists())
      .toBe(true)
    expect(wrapper.find('button svg').exists())
      .toBe(true)
  })

  test('should emit sendMessage event with input value', async () => {
    const message = "Hello"
    const input = wrapper.find('input[type="text"]')

    const button = wrapper.find('button')
    await input.setValue(message)
    await button.trigger('click')
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message])
    expect(wrapper.vm.newMessage).toBe('')
  })

  test('should emit sendMessage on key press enter', async () => {
    const message = "Hello"
    const input = wrapper.find('input[type="text"]')
    const button = wrapper.find('button')
    await input.setValue('')

    await button.trigger('keydown.enter')

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message])
  })

  test('should not emit empty sendMessage', async () => {
    const wrapper = mount(MessageBox)
    const input = wrapper.find('input[type="text"]')
    const button = wrapper.find('button')
    await input.setValue('')
    await button.trigger('click')
    await button.trigger('keydown.enter')

    expect(wrapper.emitted('sendMessage')?.[0]).toBeUndefined()
    expect(wrapper.emitted('sendMessage')?.[0]).toBeFalsy()
  })
})
