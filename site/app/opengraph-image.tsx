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
          background: '#f3efe6',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          border: '12px solid #c9a55c',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <img src="https://malabarwatchesofficial.vercel.app/logo.png" height="80" alt="M&W Logo" style={{ objectFit: 'contain' }} />
          <span style={{ fontSize: '42px', fontWeight: 700, color: '#1a1610', letterSpacing: '0.15em', marginLeft: '24px', fontFamily: 'sans-serif' }}>
            MALABARWATCHESOFFICIAL
          </span>
        </div>
        <p
          style={{
            fontSize: '36px',
            color: '#3b3226',
            marginTop: '20px',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.5,
            fontFamily: 'sans-serif',
          }}
        >
          {SITE_CONFIG.description}
        </p>
      </div>
    ),
    { ...size }
  );
}
