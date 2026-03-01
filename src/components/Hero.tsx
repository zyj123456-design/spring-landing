export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        minHeight: 640,
        paddingTop: 56,
        background: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Floating particles */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }}>
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              background: 'rgba(245,200,66,0.25)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              animation: 'float-particles 8s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      {/* Main content grid */}
      <div style={{
        width: '100%',
        maxWidth: 'var(--content-max-width)',
        margin: '0 auto',
        padding: '0 var(--section-padding-x)',
        display: 'grid',
        gridTemplateColumns: '55% 45%',
        gap: '2rem',
        alignItems: 'center'
      }}>
        {/* LEFT ZONE: Text content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          {/* Eyebrow */}
          <p style={{
            fontFamily: 'DM Mono',
            fontSize: 11,
            color: 'var(--text-muted)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '2rem'
          }}>
            // YEAR OF THE HORSE — 2026
          </p>

          {/* Title */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h1 style={{
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              fontWeight: 300,
              lineHeight: 1,
              marginBottom: '0.5rem',
              fontFamily: 'Noto Serif SC'
            }}>
              <span style={{
                display: 'block',
                animation: 'stagger-in 0.8s ease-out'
              }}>
                马年吉祥
              </span>
              <br style={{ display: 'none', content: '' }} />
              <span style={{
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'stagger-in 0.8s ease-out 0.15s both'
              }}>
                骏马奔腾
              </span>
            </h1>

            {/* Red accent line */}
            <div style={{
              height: 1,
              width: 120,
              background: 'var(--accent-gradient)',
              animation: 'stagger-in 0.8s ease-out 0.3s both'
            }} />
          </div>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'Noto Serif SC',
            fontSize: '1.1rem',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            animation: 'stagger-in 0.8s ease-out 0.45s both'
          }}>
            以技术重塑产业，以智慧驱动未来
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            alignItems: 'flex-start',
            animation: 'stagger-in 0.8s ease-out 0.6s both'
          }}>
            <button
              onClick={() => {
                const element = document.getElementById('greetings');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              style={{
                padding: '0.75rem 2rem',
                background: 'var(--accent-gradient)',
                color: 'var(--text-primary)',
                border: 'none',
                fontFamily: 'DM Mono',
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderRadius: '2px',
                minHeight: '48px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              // 开始互动
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              style={{
                padding: '0.75rem 2rem',
                border: '1px solid var(--border-gold)',
                background: 'transparent',
                color: 'var(--gold-primary)',
                fontFamily: 'DM Mono',
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderRadius: '2px',
                minHeight: '48px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold-gradient)';
                e.currentTarget.style.color = 'var(--bg-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--gold-primary)';
              }}
            >
              // 联系我们
            </button>
          </div>
        </div>

        {/* RIGHT ZONE: Animated SVG Character */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <svg
            width="clamp(280px, 40vw, 480px)"
            height="clamp(210px, 30vw, 360px)"
            viewBox="0 0 400 300"
            style={{
              transform: 'rotate(-5deg)'
            }}
          >
            <defs>
              <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent-primary)" />
                <stop offset="100%" stopColor="var(--accent-primary-light)" />
              </linearGradient>
            </defs>

            <path
              d="M150 50 L180 40 L200 60 L180 80 L160 70 L140 90 L120 80 L100 100 L80 90 L60 110 L40 100 L20 120 L10 140 L20 160 L40 150 L60 170 L80 160 L100 180 L120 170 L140 190 L160 180 L180 200 L200 190 L220 210 L240 200 L260 220 L280 210 L300 230 L320 220 L340 240 L360 230 L380 250 L390 270 L380 290 L360 280 L340 300 L320 290 L300 310 L280 300 L260 320 L240 310 L220 330 L200 320 L180 340 L160 330 L140 350 L120 340 L100 360 L80 350 L60 370 L40 360 L20 380 L10 400"
              stroke="url(#redGradient)"
              strokeWidth="3"
              fill="rgba(192,39,45,0.05)"
              style={{
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
                animation: 'character-draw 2.5s ease-out forwards'
              }}
            />
            <text
              x="200"
              y="180"
              textAnchor="middle"
              fill="var(--accent-primary)"
              fontSize="120"
              fontFamily="Noto Serif SC"
              fontWeight="300"
              opacity="0.8"
            >
              馬
            </text>
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          color: 'var(--text-muted)',
          fontSize: '13px',
          fontFamily: 'DM Mono',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem'
        }}>
          向下滚动
        </div>
        <div style={{
          width: 24,
          height: 36,
          border: '2px solid var(--text-muted)',
          borderRadius: '12px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: 1,
            height: 8,
            background: 'var(--text-muted)',
            borderRadius: '0.5px',
            marginTop: '6px',
            animation: 'pulse 2s infinite'
          }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.25; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
        }

        @keyframes character-draw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes stagger-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          /* Mobile: single column layout */
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          /* Hide SVG on mobile */
          svg {
            display: none !important;
          }

          /* Adjust title sizes for mobile */
          h1 {
            font-size: clamp(2.5rem, 12vw, 5rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
