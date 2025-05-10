import { useChat } from "@/composables/useChat"


describe('useChat', ()=>{
  test('add message correctly when onMessage is called', async ()=>{
    const messageContent = 'hola!'
    const { messages, addNewMessage } = useChat()

    await addNewMessage(messageContent)
    expect(messages.value.length).toBe(1)
    expect(messages.value).toEqual([{
      id: expect.any(String),
      itsMine: true,
      message: messageContent
    }])
  })

  test('add response when message ends with "?"', async ()=>{
    const messageContent = 'Voy bien?'
    const { messages, addNewMessage } = useChat()

    await addNewMessage(messageContent)
    expect(messages.value.length).toBe(2)
    expect(messages.value[0]).toEqual({
      id: expect.any(String),
      itsMine: true,
      message: messageContent
    })
    expect(messages.value[1]).toEqual({
      id: expect.any(String),
      itsMine: false,
      message: expect.any(String),
      image: expect.any(String)
    })
  })


  const mockResponse = {
    answer: 'yes',
    image: 'https://yesno.wtf/assets/yes/2.gif'
  }
  test('mock fetch behaviour', async ()=>{

    (window as { fetch: typeof fetch }).fetch = vi.fn(async () => ({
      ok: true,
      status: 200,
      json: async () => mockResponse
    }) as Response)

    const messageContent = 'Vas a responder?'
    const {messages, addNewMessage } = useChat()

    await addNewMessage(messageContent)
    expect(messages.value[1]).toEqual({
      id: expect.any(String),
      itsMine: false,
      message: mockResponse.answer,
      image: mockResponse.image
    })
  })
})
