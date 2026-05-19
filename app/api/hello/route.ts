import { NextResponse } from 'next/server';

export async function GET() {
  const currentTime = new Date().toISOString();
  
  return NextResponse.json({
    message: 'Hello from the serverless API!',
    timestamp: currentTime,
    student: process.env.NEXT_PUBLIC_STUDENT_NAME,
  });
}
