'use client';

import { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import SoftwareDev from '@/components/SoftwareDev';
import SectionDivider from '@/components/SectionDivider';
import FactoryIntelligence from '@/components/FactoryIntelligence';
import GreetingWall from '@/components/GreetingWall';
import GreetingForm from '@/components/GreetingForm';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';

export default function HomePage() {
  const [greetings, setGreetings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 加载祝福信息
  const loadGreetings = async () => {
    try {
      const response = await fetch('/api/greetings');
      const data = await response.json();
      if (data.success) {
        setGreetings(data.greetings);
      }
    } catch (error) {
      console.error('加载祝福信息失败:', error);
    }
  };

  // 发送祝福信息
  const sendGreeting = async (message: string, senderName?: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/greetings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, senderName }),
      });
      const data = await response.json();

      if (data.success) {
        // 重新加载祝福信息
        await loadGreetings();
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: '发送失败，请稍后重试' };
    } finally {
      setIsLoading(false);
    }
  };

  // 页面加载时获取祝福信息
  useEffect(() => {
    loadGreetings();
  }, []);

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 56 }}>
        <Hero />
        <StatsStrip />
        <SoftwareDev />
        <SectionDivider label="// FACTORY INTELLIGENCE" />
        <FactoryIntelligence />
        <SectionDivider label="// COMMUNITY" />

        {/* Greeting Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto" style={{ background: 'var(--bg-secondary)' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              新春拜年互动墙
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              发送您的春节祝福，让我们一起迎接马年的到来！
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <GreetingForm onSubmit={sendGreeting} isLoading={isLoading} />
            <GreetingWall greetings={greetings} />
          </div>
        </section>

        <Philosophy />
        <Contact />
      </main>
    </>
  );
}
