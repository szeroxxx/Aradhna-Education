import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/types/form'
import { promises as fs } from 'fs'
import path from 'path'

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5 // 5 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= MAX_REQUESTS) {
    return false
  }

  record.count++
  return true
}

async function saveLead(data: any) {
  try {
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'leads.json')

    // Ensure data directory exists
    try {
      await fs.mkdir(dataDir, { recursive: true })
    } catch (err) {
      // Directory might already exist
    }

    // Read existing leads
    let leads = []
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8')
      leads = JSON.parse(fileContent)
    } catch (err) {
      // File doesn't exist yet, start with empty array
    }

    // Add new lead with timestamp
    leads.push({
      ...data,
      timestamp: new Date().toISOString(),
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    })

    // Save back to file
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2))
  } catch (error) {
    console.error('Error saving lead:', error)
    // Don't throw - we still want to return success to user
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
        },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validate the data
    const validatedData = contactFormSchema.parse(body)

    // Save lead to JSON file
    await saveLead(validatedData)

    console.log('New lead received:', validatedData)

    // Return success
    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Lead submission error:', error)

    if (error instanceof Error && 'issues' in error) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit lead',
      },
      { status: 500 }
    )
  }
}
