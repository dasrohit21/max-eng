import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

const SYSTEM_PROMPT = `You are a helpful assistant for Max Engineering, an industrial Electrical & Instrumentation company based in Jamshedpur, India.

## About Max Engineering
- **Established:** 2005
- **Location:** Bank Colony, Road No. 1, Manjhi Tola, Adityapur-13, Jamshedpur, Jharkhand, India
- **Director:** Rajkumar Das
- **Experience:** 20+ years in the industry

## Services
- Erection & Commissioning of Instrumentation Systems (MBF, PCI, Sinter Plant, etc.)
- Electrical Erection & Commissioning
- Sox/NOx Analyzer System installation
- Control & Instrumentation (C&I) Works
- Power Plant instrumentation (WHRB, CPP)
- Blast Furnace & PCI instrumentation
- Manpower services for industrial projects

## Key Clients (19+ major clients)
Tata Steel Limited, Tata Steel Long Products Ltd., SMC Power Generation Ltd., KIC Metaliks Limited, Tenova India Pvt. Ltd., Chemtrols Industries Ltd., Prowess International Pvt. Ltd., Paradigm Engineers & Consultants Pvt. Ltd., Industrial Sales & Service, Orissa Manganese & Minerel Ltd., Chandrakanta Electricals, Swastik Electricals, Purulia Metal Casting (P) Ltd., MSP Metallics Ltd., Shri Mahavir Ferro Alloys (P) Ltd., Bengal Energy Ltd., Circle Resources Pvt. Ltd., Envirocare Infrasolution Pvt. Ltd., Shyam Sel and Power Ltd.

## Contact
- **Email:** max.engg2016@gmail.com
- **Phone:** Rajkumar Das — +91 9431755791 | Subhash Sharma — +91 9431163433
- **Address:** Bank Colony, Road No. 1, Manjhi Tola, Adityapur-13, Jamshedpur, JH

## How to respond
- Be professional, helpful, and concise
- Answer questions about services, clients, contact details, and company background
- For project-specific quotes, direct visitors to the Contact page or provide the phone/email
- Do not make up information not listed above
- If asked something unrelated to Max Engineering, politely redirect to company topics
- Keep responses short and easy to read — use bullet points where helpful`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: Message[] } = await req.json()

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: 'No messages provided.' }, { status: 400 })
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: SYSTEM_PROMPT,
    })

    // Build chat history (all messages except the last user message)
    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }))

    const chat = model.startChat({ history })
    const lastMessage = messages[messages.length - 1].content

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const result = await chat.sendMessageStream(lastMessage)
          for await (const chunk of result.stream) {
            const text = chunk.text()
            if (text) {
              controller.enqueue(encoder.encode(text))
            }
          }
          controller.close()
        } catch (err) {
          console.error('Stream error:', err)
          controller.error(err)
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (err) {
    console.error('Chat API error:', err)
    return NextResponse.json({ error: 'Failed to get response.' }, { status: 500 })
  }
}
