import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/lib/config';

export const runtime = 'edge';
export const alt = 'MALABARWATCHESOFFICIAL — Premium Swiss Watches';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080604',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          border: '8px solid #c9a55c',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', color: '#c9a55c' }}>
          <svg width="80" height="60" viewBox="0 0 46 35" fill="none">
            <path d="M3 31h40M3 31l5-19 10.5 9.5L23 5l4.5 16.5L38 12l5 19H3z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
            <circle cx="23" cy="5" r="2.2" fill="currentColor" />
            <circle cx="8" cy="12" r="2.2" fill="currentColor" />
            <circle cx="38" cy="12" r="2.2" fill="currentColor" />
          </svg>
        </div>
        <h1
          style={{
            fontSize: '72px',
            color: '#c9a55c',
            fontWeight: 700,
            margin: 0,
            padding: 0,
            letterSpacing: '0.08em',
            textAlign: 'center',
          }}
        >
          MALABARWATCHESOFFICIAL
        </h1>
        <p
          style={{
            fontSize: '32px',
            color: '#d4af6a',
            marginTop: '30px',
            textAlign: 'center',
            opacity: 0.8,
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          {SITE_CONFIG.description}
        </p>
      </div>
    ),
    { ...size }
  );
}
