'use client';

import { useState } from 'react';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      height: 56,
      background: 'rgba(10,10,15,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 clamp(1.5rem, 5vw, 4rem)'
    }}>
      {/* Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.5rem',
          cursor: 'pointer'
        }}
        onClick={() => scrollToSection('hero')}
      >
        <span style={{
          fontFamily: 'Noto Serif SC',
          fontSize: '1.2rem',
          fontWeight: 500,
          color: 'var(--accent-primary)',
          lineHeight: 1
        }}>
          骏
        </span>
        <span style={{
          fontFamily: 'DM Mono',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase'
        }}>
          JUNJIMA
        </span>
      </div>

      {/* Desktop Nav Links */}
      <div style={{
        display: 'none',
        alignItems: 'center',
        gap: '2rem'
      }}
      className="desktop-nav"
      >
        {[
          { label: '软件开发', id: 'software-dev' },
          { label: '智能工厂', id: 'factory-intelligence' },
          { label: '祝福墙', id: 'greetings' },
          { label: '哲学', id: 'philosophy' },
          { label: '联系我们', id: 'contact' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              fontFamily: 'DM Mono',
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              padding: '0.5rem 0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={() => scrollToSection('greetings')}
        style={{
          padding: '0.5rem 1.5rem',
          border: '1px solid rgba(220,38,38,0.55)',
          background: 'transparent',
          color: 'var(--accent-primary)',
          fontFamily: 'DM Mono',
          fontSize: '11px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          borderRadius: '2px'
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
        发送祝福
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: 'block',
          background: 'none',
          border: 'none',
          color: 'var(--text-primary)',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0.25rem'
        }}
        className="mobile-menu-btn"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(10,10,15,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '1rem clamp(1.5rem, 5vw, 4rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {[
            { label: '软件开发', id: 'software-dev' },
            { label: '智能工厂', id: 'factory-intelligence' },
            { label: '祝福墙', id: 'greetings' },
            { label: '哲学', id: 'philosophy' },
            { label: '联系我们', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                fontFamily: 'DM Mono',
                fontSize: '13px',
                letterSpacing: '0.1em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none !important;
          }
          .desktop-nav {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
