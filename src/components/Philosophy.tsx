export default function Philosophy() {
  return (
    <section className="section-container" style={{ background: 'var(--bg-primary)' }}>
      {/* Section label */}
      <div className="section-label">// 03. 理念</div>

      {/* Asymmetric two-column layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gap: '4rem',
        alignItems: 'center',
        marginTop: '2rem'
      }}>
        {/* Left column: Content with background number */}
        <div style={{
          position: 'relative',
          paddingRight: '2rem'
        }}>
          {/* Background watermark number */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Bebas Neue',
            fontSize: '8rem',
            color: 'rgba(255,228,181,0.025)',
            zIndex: 1,
            pointerEvents: 'none'
          }}>
            03
          </div>

          {/* Content overlay */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Main heading */}
            <h2 style={{
              fontFamily: 'Noto Serif SC',
              fontSize: '3rem',
              fontWeight: 300,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem'
            }}>
              数据主权
            </h2>

            {/* Manifesto text */}
            <div style={{
              fontFamily: 'Noto Serif SC',
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                在数字时代，数据是新的石油。但与石油不同，数据是无限的、个人的、不可替代的。
                我们相信，每个人和每个组织都应该对自己的数字资产拥有完全的主权。
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                我们的承诺很简单：构建赋能的技术，而非剥削。创建保护的系统，而非暴露。
                开发服务于人类最高愿望的解决方案，而非企业贪婪。
              </p>
              <p>
                这不仅仅是理念——这是我们的工程准则。每行我们编写的代码，每个我们设计的系统，
                都推进了数字自治和伦理创新的愿景。
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Philosophy pillars */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {/* Data Ownership Pillar */}
          <div style={{
            background: 'var(--bg-surface)',
            borderTop: '2px solid var(--accent-primary)',
            padding: '2rem',
            borderRadius: '2px'
          }}>
            <h3 style={{
              fontFamily: 'Noto Serif SC',
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              数据所有权
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              您的个人数据受到严格保护，绝不用于商业目的
            </p>
          </div>

          {/* Ethical AI Pillar */}
          <div style={{
            background: 'var(--bg-surface)',
            borderTop: '2px solid var(--gold-deep)',
            padding: '2rem',
            borderRadius: '2px'
          }}>
            <h3 style={{
              fontFamily: 'Noto Serif SC',
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              伦理AI
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              透明、公平、负责的AI开发和应用准则
            </p>
          </div>

          {/* Future Proofing Pillar */}
          <div style={{
            background: 'var(--bg-surface)',
            borderTop: '2px solid var(--accent-primary)',
            padding: '2rem',
            borderRadius: '2px'
          }}>
            <h3 style={{
              fontFamily: 'Noto Serif SC',
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              未来保障
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              可持续、可扩展的技术架构设计理念
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
