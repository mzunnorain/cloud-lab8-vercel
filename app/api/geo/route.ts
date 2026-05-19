import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  // This endpoint only works in production (Vercel Edge Network)
  // Returns country and city based on request headers
  
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
  const city = request.headers.get('x-vercel-ip-city') || 'Unknown';
  const region = request.headers.get('x-vercel-ip-country-region') || 'Unknown';
  
  // For localhost/development, return a message
  const isProduction = process.env.VERCEL_ENV === 'production';
  
  if (!isProduction) {
    return NextResponse.json({
      message: 'Geo location only available on production (Vercel)',
      note: 'Deploy to Vercel to test this endpoint',
      development: true,
    });
  }
  
  return NextResponse.json({
    country,
    city,
    region,
    timestamp: new Date().toISOString(),
  });
}
