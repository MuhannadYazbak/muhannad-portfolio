import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'downloadsCounter.json');

export async function POST(req: NextRequest) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.portfolioDownloads += 1;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  
  return NextResponse.json({ count: data.portfolioDownloads });
}

export async function GET() {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return NextResponse.json({ count: data.portfolioDownloads });
}
