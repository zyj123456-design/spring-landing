'use client';

import { useEffect, useState } from 'react';

export default function StatsStrip() {
  const [animatedValues, setAnimatedValues] = useState({
    projects: 0,
    experience: 0,
    nodes: 0,
    satisfaction: 0
  });

  const stats = [
    { value: 50, suffix: '+', label: '项目交付' },
    { value: 8, suffix: '', label: '行业经验' },
    { value: 200, suffix: '+', label: '工厂节点' },
    { value: 99, suffix: '%', label: '客户满意度' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start counting animation
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = duration / steps;

          stats.forEach((stat, index) => {
            let currentValue = 0;
            const targetValue = stat.value;
            const stepValue = targetValue / steps;

            const timer = setInterval(() => {
              currentValue += stepValue;
              if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
              }

              setAnimatedValues(prev => ({
                ...prev,
                [index === 0 ? 'projects' : index === 1 ? 'experience' : index === 2 ? 'nodes' : 'satisfaction']: Math.round(currentValue)
              }));
            }, increment);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-strip');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="stats-strip"
      style={{
        height: 80,
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3rem'
      }}
    >
      {stats.map((stat, index) => {
        const animatedValue = [
          animatedValues.projects,
          animatedValues.experience,
          animatedValues.nodes,
          animatedValues.satisfaction
        ][index];

        return (
          <div
            key={index}
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: '2rem',
                lineHeight: 1,
                background: 'var(--gold-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.25rem'
              }}
            >
              {animatedValue}
              {stat.suffix}
            </div>
            <div
              style={{
                fontFamily: 'DM Mono',
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase'
              }}
            >
              {stat.label}
            </div>
          </div>
        );
      })}

      {/* Vertical separators */}
      <style jsx>{`
        div:nth-child(1)::after,
        div:nth-child(2)::after,
        div:nth-child(3)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 40px;
          background: var(--border-subtle);
        }

        @media (max-width: 640px) {
          div:nth-child(1)::after,
          div:nth-child(2)::after,
          div:nth-child(3)::after {
            display: none;
          }
          
          /* Mobile: 2x2 grid layout */
          div {
            flex: 1 1 50%;
            max-width: 50%;
          }
          
          /* Hide some stats on very small screens */
          div:nth-child(3),
          div:nth-child(4) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
