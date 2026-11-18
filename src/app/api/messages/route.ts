import { NextResponse } from 'next/server';
import { INITIAL_MESSAGES } from '@/data/mockData';
import { SermonMessage } from '@/types';

// In-memory fallback on server
let serverMessages: SermonMessage[] = [...INITIAL_MESSAGES];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';
  const mediaType = searchParams.get('mediaType');
  const series = searchParams.get('series');
  const topic = searchParams.get('topic');

  let results = serverMessages;

  if (q) {
    results = results.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.scriptureReference.toLowerCase().includes(q) ||
        m.summary.toLowerCase().includes(q) ||
        m.series.toLowerCase().includes(q) ||
        m.topics.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (mediaType && mediaType !== 'all') {
    results = results.filter((m) => m.mediaType === mediaType || m.mediaType === 'both');
  }

  if (series && series !== 'all') {
    results = results.filter((m) => m.series.toLowerCase() === series.toLowerCase());
  }

  if (topic && topic !== 'all') {
    results = results.filter((m) => m.topics.some((t) => t.toLowerCase() === topic.toLowerCase()));
  }

  return NextResponse.json(results);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newMsg: SermonMessage = {
      ...body,
      id: `sermon-${Date.now()}`,
      slug: body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      datePreached: body.datePreached || new Date().toISOString().split('T')[0],
      playCount: 0,
      downloadCount: 0
    };

    serverMessages = [newMsg, ...serverMessages];
    return NextResponse.json(newMsg, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create sermon message' }, { status: 400 });
  }
}

