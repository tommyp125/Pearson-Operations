export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, service, message } = body

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Name, email, and service are required" },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        company: company || null,
        phone: phone || null,
        service,
        message: message || null,
      },
    })

    return NextResponse.json({ success: true, lead }, { status: 201 })
  } catch (error) {
    console.error("Error creating lead:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({ leads }, { status: 200 })
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}