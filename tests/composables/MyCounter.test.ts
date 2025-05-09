import { useCounter } from "@/composables/useCounter"

describe('MyCounter', () => {
  const { counter } = useCounter(10)
  test('should return counter value', () => {
    expect(counter.value).toBe(10)
  })

  test('should return square counter value', () => {
    const { squareCounter } = useCounter(10)
    expect(squareCounter.value).toBe(counter.value * counter.value)
  })
})
