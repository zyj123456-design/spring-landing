export default function FactoryIntelligence() {
  return (
    <section className="py-24 px-6 bg-bg-surface">
      {/* Section label */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="section-label">// 工厂智能</div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bebas-neue text-text-primary mb-6 leading-tight">
            智能
            <br />
            制造
          </h2>
          <div className="w-24 h-0.5 bg-accent-primary mx-auto mb-8"></div>
          <p className="text-text-secondary font-dm-mono text-sm uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            工业物联网 • 预测性维护 • 数字化转型
            <br />
            智能工厂自动化解决方案
          </p>
        </div>

        {/* Smart Factory Hero Image */}
        <div className="mb-20 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80"
            alt="智能化工厂自动化生产线"
            style={{
              width: '100%',
              height: '320px',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '2px',
              border: '1px solid rgba(255,255,255,0.06)',
              filter: 'brightness(0.8) contrast(1.05)',
            }}
          />
        </div>

        {/* Feature cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* IoT Integration */}
          <div className="card-modern group">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent-primary rounded-none flex items-center justify-center mx-auto mb-6 group-hover:bg-text-primary group-hover:text-accent-primary transition-colors">
                <span className="text-2xl">📡</span>
              </div>
              <h3 className="font-noto-serif-sc text-xl font-medium text-text-primary mb-3">物联网集成</h3>
              <p className="font-dm-mono text-xs text-text-secondary uppercase tracking-wider">连接 • 实时 • 可扩展</p>
            </div>

            {/* Industrial IoT Sensors Image */}
            <div className="mb-6 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="工业物联网传感器监控"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '2px',
                  border: '1px solid rgba(220,38,38,0.15)',
                  filter: 'brightness(0.75)',
                }}
              />
            </div>

            <div className="space-y-4 font-dm-mono text-xs">
              <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                <span className="text-text-secondary">传感器</span>
                <span className="text-accent-primary">工业物联网</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                <span className="text-text-secondary">协议</span>
                <span className="text-accent-primary">MQTT • MODBUS</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                <span className="text-text-secondary">平台</span>
                <span className="text-accent-primary">AZURE IoT • AWS</span>
              </div>
            </div>
          </div>

          {/* Predictive Analytics */}
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
              预测分析
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              AI驱动的预防性维护和智能决策
            </div>
          </div>

          {/* Digital Twin */}
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
              数字孪生
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              虚拟工厂模型实现优化生产流程
            </div>
          </div>
        </div>
      </div>

      {/* Secondary images row */}
      <div style={{
        marginTop: '3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '2px'
        }}>
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
            alt="工业物联网传感器监控"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '2px',
              border: '1px solid rgba(220,38,38,0.15)',
              filter: 'brightness(0.75)',
            }}
          />
        </div>

        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '2px'
        }}>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
            alt="工厂数据可视化分析"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '2px',
              filter: 'brightness(0.8) saturate(0.9)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          />
        </div>

        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '2px'
        }}>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
            alt="工业机器人精密制造"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              borderRadius: '2px',
              filter: 'brightness(0.7) contrast(1.1)',
            }}
          />
        </div>
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
      
      /* Stack secondary images vertically */
      section > div > div > div:nth-child(3) {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
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
