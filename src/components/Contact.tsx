export default function Contact() {
  return (
    <section className="section-container" style={{ background: 'var(--bg-primary)' }}>
      {/* Section label */}
      <div className="section-label">// 04. 联系我们</div>

      {/* Centered content container */}
      <div style={{
        maxWidth: '640px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Main heading */}
        <h2 style={{
          fontFamily: 'Noto Serif SC',
          fontSize: '3rem',
          fontWeight: 300,
          color: 'var(--text-primary)',
          marginBottom: '3rem'
        }}>
          联系我们
        </h2>

        {/* Contact method rows */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          marginBottom: '3rem'
        }}>
          {/* Email */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 0',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'var(--accent-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>✉️</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontFamily: 'DM Mono',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.25rem'
                }}>
                  商务咨询
                </div>
                <div style={{
                  fontFamily: 'DM Mono',
                  fontSize: '13px',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.05em'
                }}>
                  CONTACT@INKFUTURE.DEV
                </div>
              </div>
            </div>
            <button
              onClick={() => window.open('mailto:contact@inkfuture.dev', '_blank')}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid var(--border-active)',
                background: 'transparent',
                color: 'var(--accent-primary)',
                fontFamily: 'DM Mono',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '2px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
            >
              发送邮件
            </button>
          </div>

          {/* LinkedIn */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 0',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'var(--accent-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>💼</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontFamily: 'DM Mono',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.25rem'
                }}>
                  专业网络
                </div>
                <div style={{
                  fontFamily: 'DM Mono',
                  fontSize: '13px',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.05em'
                }}>
                  /COMPANY/INKFUTURE
                </div>
              </div>
            </div>
            <button
              onClick={() => window.open('https://linkedin.com/company/inkfuture', '_blank')}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid var(--border-active)',
                background: 'transparent',
                color: 'var(--accent-primary)',
                fontFamily: 'DM Mono',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '2px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
            >
              访问领英
            </button>
          </div>

          {/* GitHub */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 0',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'var(--accent-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>⚡</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontFamily: 'DM Mono',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.25rem'
                }}>
                  开源代码
                </div>
                <div style={{
                  fontFamily: 'DM Mono',
                  fontSize: '13px',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.05em'
                }}>
                  @INKFUTURE
                </div>
              </div>
            </div>
            <button
              onClick={() => window.open('https://github.com/inkfuture', '_blank')}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid var(--border-active)',
                background: 'transparent',
                color: 'var(--accent-primary)',
                fontFamily: 'DM Mono',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '2px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
            >
              查看GitHub
            </button>
          </div>
        </div>

        {/* Large CTA button */}
        <button
          onClick={() => {
            const element = document.getElementById('greetings');
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          style={{
            width: '100%',
            padding: '1.25rem 2rem',
            background: 'var(--accent-gradient)',
            color: 'var(--text-primary)',
            border: 'none',
            fontFamily: 'DM Mono',
            fontSize: '14px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            borderRadius: '2px',
            boxShadow: 'var(--shadow-red)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(232,74,53,0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-red)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          发起联系
        </button>
      </div>
    </section>
  );
}
