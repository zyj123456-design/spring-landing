export default function SoftwareDev() {
  return (
    <section id="software-dev" className="section-container" style={{ background: 'var(--bg-primary)' }}>
      {/* Section label */}
      <div className="section-label">// 01. 软件开发</div>

      {/* Main heading */}
      <h2 style={{
        fontFamily: 'Noto Serif SC',
        fontSize: '3rem',
        fontWeight: 300,
        color: 'var(--text-primary)',
        marginBottom: '1rem'
      }}>
        软件开发服务
      </h2>

      {/* Sub heading */}
      <p style={{
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        marginBottom: '3rem',
        lineHeight: 1.6
      }}>
        从需求到交付的全链路解决方案
      </p>

      {/* Content grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'start'
      }}>
        {/* Primary Image (left) */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '2px'
        }}>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14431b9?w=1200&q=80"
            alt="软件开发代码编辑器"
            style={{
              width: '100%',
              height: '280px',
              objectFit: 'cover',
              borderRadius: '2px',
              border: '1px solid rgba(255,255,255,0.06)',
              filter: 'brightness(0.85) contrast(1.1)',
            }}
          />
        </div>

        {/* Feature Card Grid (right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
          gap: '1rem'
        }}>
          {/* Web Applications */}
          <div style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            borderLeft: '3px solid var(--accent-primary)',
            padding: '1.25rem',
            borderRadius: '2px',
            transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)'
          }}>
            <div style={{
              fontFamily: 'DM Mono',
              fontSize: 11,
              color: 'var(--text-muted)',
              marginBottom: '0.75rem'
            }}>
              01
            </div>
            <div style={{
              fontFamily: 'Noto Serif SC',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem'
            }}>
              Web应用
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              响应式、可扩展、现代化的前端应用开发
            </div>
          </div>

          {/* AI Integration */}
          <div style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            borderLeft: '3px solid var(--gold-deep)',
            padding: '1.25rem',
            borderRadius: '2px',
            transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)'
          }}>
            <div style={{
              fontFamily: 'DM Mono',
              fontSize: 11,
              color: 'var(--text-muted)',
              marginBottom: '0.75rem'
            }}>
              02
            </div>
            <div style={{
              fontFamily: 'Noto Serif SC',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem'
            }}>
              AI集成
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              智能自动化处理和AI驱动的解决方案
            </div>
          </div>

          {/* Design Systems */}
          <div style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            borderLeft: '3px solid var(--accent-primary)',
            padding: '1.25rem',
            borderRadius: '2px',
            transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)'
          }}>
            <div style={{
              fontFamily: 'DM Mono',
              fontSize: 11,
              color: 'var(--text-muted)',
              marginBottom: '0.75rem'
            }}>
              03
            </div>
            <div style={{
              fontFamily: 'Noto Serif SC',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem'
            }}>
              设计系统
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              一致性、可扩展、极简的设计系统构建
            </div>
          </div>
        </div>
      </div>

      {/* Technology Architecture Image */}
      <div style={{
        marginTop: '3rem',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2px'
      }}>
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
          alt="技术架构"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '2px',
            border: '1px solid rgba(220,38,38,0.2)',
            filter: 'brightness(0.75) saturate(0.8)',
          }}
        />
      </div>

      {/* CTA row */}
      <div style={{
        marginTop: '3rem',
        textAlign: 'right'
      }}>
        <button style={{
          color: 'var(--gold-primary)',
          fontFamily: 'DM Mono',
          fontSize: '13px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem 0',
          transition: 'color 0.2s ease'
        }}>
          了解更多 →
        </button>
      </div>
    </section>
  );

  <style jsx>{`
    @media (max-width: 1024px) {
      /* Tablet: stack content vertically */
      section > div > div {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      /* Make image full width */
      section > div > div > div:first-child {
        order: -1;
      }
    }

    @media (max-width: 640px) {
      /* Mobile: single column layout */
      section > div > div {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      /* Image full width at top */
      section > div > div > div:first-child {
        order: -1;
      }
      
      /* Cards stack vertically */
      section > div > div > div:nth-child(2) {
        grid-template-columns: 1fr !important;
      }
      
      /* Reduce heading size */
      h2 {
        font-size: 2.5rem !important;
      }
      
      /* Center CTA */
      section > div > div:last-child {
        text-align: center !important;
      }
    }
  `}</style>
}
