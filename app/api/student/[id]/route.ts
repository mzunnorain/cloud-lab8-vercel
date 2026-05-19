import { NextResponse } from 'next/server';

// Mock student database
const students: Record<string, { id: string; name: string; rollNumber: string; email: string }> = {
  '1': {
    id: '1',
    name: 'M.Zunnorain',
    rollNumber: '01-131232-072',
    email: 'zunnorain@example.com',
  },
  '2': {
    id: '2',
    name: 'John Doe',
    rollNumber: '01-131232-001',
    email: 'john@example.com',
  },
  '3': {
    id: '3',
    name: 'Jane Smith',
    rollNumber: '01-131232-002',
    email: 'jane@example.com',
  },
};

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  
  const student = students[id];
  
  if (!student) {
    return NextResponse.json(
      { error: 'Student not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(student);
}
