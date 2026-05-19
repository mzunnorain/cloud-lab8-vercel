import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rollNumber } = body;
    
    // Validate input
    if (!name || !rollNumber) {
      return NextResponse.json(
        { error: 'Name and roll number are required' },
        { status: 400 }
      );
    }
    
    // Process submission (in a real app, this would save to a database)
    const submission = {
      id: Date.now().toString(),
      name,
      rollNumber,
      submittedAt: new Date().toISOString(),
      status: 'success',
    };
    
    return NextResponse.json(
      {
        message: 'Submission successful',
        data: submission,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request format' },
      { status: 400 }
    );
  }
}
