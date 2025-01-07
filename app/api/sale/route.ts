import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.redirect('https://5f9adlr81nf8mge4hemew16sc2.hop.clickbank.net', { status: 307 })
}

