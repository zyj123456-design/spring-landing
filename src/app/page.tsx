'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import GreetingWall from '@/components/GreetingWall';
import GreetingForm from '@/components/GreetingForm';
import SoftwareDev from '@/components/SoftwareDev';
import FactoryIntelligence from '@/components/FactoryIntelligence';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';

export default function HomePage() {
  const [greetings, setGreetings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 加载拜年信息
  const loadGreetings = async () => {
    try {
      const response = await fetch('/api/greetings');
      const data = await response.json();
      if (data.success) {
        setGreetings(data.greetings);
      }
    } catch (error) {
      console.error('加载拜年信息失败:', error);
    }
  };

  // 发送拜年信息
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
        // 重新加载拜年信息
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

  // 页面加载时获取拜年信息
  useEffect(() => {
    loadGreetings();
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />

      {/* 拜年互动区域 */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-spring-dark-red mb-4">
            新春拜年互动墙
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            发送您的春节祝福，让我们一起迎接马年的到来！
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GreetingForm onSubmit={sendGreeting} isLoading={isLoading} />
          <GreetingWall greetings={greetings} />
        </div>
      </section>

      <SoftwareDev />
      <FactoryIntelligence />
      <Philosophy />
      <Contact />
    </main>
  );
}
