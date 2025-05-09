import { mount } from '@vue/test-utils'
import MyCounter from '@/components/counter/MyCounter.vue'

describe('<MyCounter>', () => {
  const counterValue = 10
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: counterValue,
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('should render counter label', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: counterValue,
      },
    })
    const counterLabel = wrapper.get('[data-vtest="counter-label"]')
    expect(counterLabel.text()).toBe(`Counter: ${counterValue}`)
  })

  test('should render both h3 lables', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: counterValue,
      },
    })
    const [ counterLable, SquareLabel ] = wrapper.findAll('h3')
    expect(counterLable.text()).toBe(`Counter: ${counterValue}`)
    expect(SquareLabel.text()).toBe(`Square: ${counterValue * counterValue}`)
  })

  test('should increment counter + 1 on click', async () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: counterValue,
      },
    })

    const incrementButton = wrapper.get('[data-vtest="increment-btn"]')
    const counterLabel = wrapper.get('[data-vtest="counter-label"]')
    await incrementButton.trigger('click')
    expect(counterLabel.text()).toContain(`Counter: ${counterValue + 1}`)
  })
})
