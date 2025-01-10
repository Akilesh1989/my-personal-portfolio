import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/data/profile.yaml');
  const file = fs.readFileSync(filePath, 'utf8');
  const profile = yaml.parse(file);
  
  return NextResponse.json(profile);
} 