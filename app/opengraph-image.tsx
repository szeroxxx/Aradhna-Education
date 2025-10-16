import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Aradhana - Career Guidance Platform'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #DDEFFF 0%, #FFF7EA 100%)',
          fontFamily: 'system-ui',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '900px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#00B3A4',
              textAlign: 'center',
              marginBottom: 30,
              letterSpacing: '-0.02em',
            }}
          >
            Aradhana Education
          </div>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: '#0E2433',
              textAlign: 'center',
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Nursing & Pharmacy Admission in Gujarat
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#41566B',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            GNM, B.Sc, P.B.Sc & Pharmacy • 25K+ Students Guided
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
