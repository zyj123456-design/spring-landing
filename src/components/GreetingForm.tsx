'use client';

import { useState } from 'react';
import { Greeting } from '@/types/greeting';

interface GreetingFormProps {
  onSubmit: (message: string, senderName?: string) => Promise<{ success: boolean; error?: string }>;
  isLoading: boolean;
}

export default function GreetingForm({ onSubmit, isLoading }: GreetingFormProps) {
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!message.trim()) {
      setError('请分享您的祝福语，让这个节日更加温暖');
      return;
    }

    const result = await onSubmit(message.trim(), senderName.trim() || undefined);

    if (result.success) {
      setMessage('');
      setSenderName('');
      setError('');
    } else {
      setError(result.error || '祝福发送遇到小困难，请稍后再试');
    }
  };

  const messageLength = message.length;
  const isValidLength = messageLength >= 10 && messageLength <= 100;

  return (
    <div id="greetings" className="relative">
      {/* 春节视觉盛宴 - 烈焰骏马主题一致性 */}
      <div className="absolute inset-0">
        {/* 第一层：宣纸质感背景 */}
        <div className="absolute inset-0 rice-paper-texture"></div>

        {/* 第二层：剪纸风奔马装饰 */}
        <div className="absolute top-3 left-4 w-16 h-12 horse-paper-cut opacity-15 animate-horse-gallop"></div>
        <div className="absolute bottom-4 right-6 w-14 h-10 horse-paper-cut opacity-10 animate-horse-gallop" style={{ animationDelay: '1s' }}></div>

        {/* 第三层：线描马纹背景 */}
        <div className="absolute inset-0 horse-line-pattern opacity-3"></div>

        {/* 第四层：抽象马鬃装饰 */}
        <div className="absolute top-20 left-8 w-1 h-16 bg-gradient-to-b from-transparent via-spring-burnished-gold/20 to-transparent animate-pulse horse-mane-flow"></div>
        <div className="absolute bottom-16 right-12 w-1 h-14 bg-gradient-to-b from-transparent via-spring-red/15 to-transparent animate-pulse horse-mane-flow" style={{ animationDelay: '1.5s' }}></div>

        {/* 第五层：飘落的梅花瓣 */}
        <div className="absolute top-16 left-8 animate-float opacity-25">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M8,1 Q9,5 14,8 Q9,11 8,15 Q7,11 2,8 Q7,5 8,1" fill="#C0272D" stroke="#8B0000" strokeWidth="0.3"/>
            <circle cx="8" cy="8" r="2" fill="#F5C842"/>
          </svg>
        </div>

        <div className="absolute top-24 right-12 animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M7,1 Q8,4 12,7 Q8,10 7,13 Q6,10 2,7 Q6,4 7,1" fill="#F5C842" stroke="#D4A017" strokeWidth="0.3"/>
            <circle cx="7" cy="7" r="1.5" fill="#FFE4B5"/>
          </svg>
        </div>

        <div className="absolute bottom-20 left-16 animate-float opacity-15" style={{ animationDelay: '3s' }}>
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M9,1 Q10,7 16,9 Q10,11 9,17 Q8,11 2,9 Q8,7 9,1" fill="#FFE4B5" stroke="#F5C842" strokeWidth="0.3"/>
          </svg>
        </div>

        {/* 第六层：传统纹样边框 */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-spring-red/15 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-spring-gold/10 to-transparent rounded-full"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-spring-red/15 to-transparent"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-spring-gold/10 to-transparent"></div>
      </div>

      <div className="relative backdrop-blur-sm bg-white/80 rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50">
        {/* 标题区域 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-spring-red to-spring-gold rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🐴</span>
              <span className="text-2xl">💌</span>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-spring-dark-red to-spring-gold bg-clip-text text-transparent">
              发送新春祝福
            </h3>
          </div>
          <p className="text-gray-600 text-sm">分享您的祝福，与大家共庆佳节</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
          {/* 发送者姓名 */}
          <div className="group">
            <label htmlFor="senderName" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-spring-red text-lg">👨‍👩‍👧‍👦</span>
              <span className="text-sm md:text-base">您的尊称（可选）</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="senderName"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value.slice(0, 20))}
                placeholder="家人朋友怎么称呼您？"
                autoComplete="name"
                autoCapitalize="words"
                autoCorrect="off"
                className="w-full min-h-[48px] px-4 py-4 pl-12 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-spring-red/20 focus:border-spring-red transition-all duration-300 bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-400 text-base md:text-sm focus:outline-none"
                disabled={isLoading}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-spring-red transition-colors">
                <span className="text-xl">💝</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 px-1">
              <p className="text-xs text-gray-500">
                {senderName.length}/20 字符
              </p>
              {senderName && (
                <span className="text-xs text-green-600 flex items-center gap-1">
                  <span>✓</span> 有效
                </span>
              )}
            </div>
          </div>

          {/* 拜年信息 */}
          <div className="group">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-spring-red text-lg">🎊</span>
              <span className="text-sm md:text-base">心意祝福语</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 100))}
                placeholder="愿您新春快乐，万事如意，阖家幸福，岁岁平安..."
                rows={4}
                autoComplete="off"
                autoCapitalize="sentences"
                autoCorrect="on"
                spellCheck="true"
                className={`w-full min-h-[120px] px-4 py-4 pl-12 border-2 rounded-2xl transition-all duration-300 bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-400 text-base resize-none focus:outline-none ${
                  !isValidLength && messageLength > 0
                    ? 'border-red-300 focus:ring-red-100 focus:border-red-400'
                    : 'border-gray-200 focus:ring-spring-red/20 focus:border-spring-red focus:ring-4'
                }`}
                disabled={isLoading}
                style={{ fontSize: '16px' }} // 防止iOS缩放
              />
              <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-spring-red transition-colors">
                <span className="text-xl">💌</span>
              </div>
            </div>

            {/* 字符计数和验证 */}
            <div className="flex justify-between items-center mt-3 px-1">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full transition-colors ${
                  messageLength === 0 ? 'bg-gray-300' :
                  messageLength < 10 ? 'bg-red-400' :
                  messageLength <= 100 ? 'bg-green-400' : 'bg-red-400'
                }`}></div>
                <span className="text-xs text-gray-600">{messageLength}/100</span>
              </div>

              {messageLength > 0 && (
                <div className="flex items-center gap-1 text-xs">
                  {isValidLength ? (
                    <span className="text-green-600 flex items-center gap-1">
                      <span>✅</span> 祝福完美
                    </span>
                  ) : messageLength < 10 ? (
                    <span className="text-red-600 flex items-center gap-1">
                      <span>💝</span> 再加点心意
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center gap-1">
                      <span>📝</span> 祝福太长啦
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 错误信息 */}
          {error && (
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-4 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 text-sm">⚠️</span>
                </div>
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* 提交按钮 - 移动端优化 */}
          <button
            type="submit"
            disabled={!isValidLength || isLoading}
            className={`w-full min-h-[56px] px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 ${
              !isValidLength
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : isLoading
                ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg'
                : 'bg-gradient-to-r from-spring-red to-spring-light-red text-white shadow-xl hover:shadow-2xl transform hover:scale-105'
            }`}
            aria-label={isLoading ? '正在传递祝福...' : '传递祝福'}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>正在传递祝福...</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                <span className="text-2xl">🎊</span>
                <span>传递祝福</span>
                <span className="transition-transform text-xl group-hover:translate-x-1">💫</span>
              </span>
            )}
          </button>
        </form>

        {/* 温馨提示 */}
        <div className="mt-8 p-5 bg-gradient-to-r from-spring-red/5 to-gold-50/30 rounded-2xl border-2 border-spring-red/10">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-spring-red to-spring-gold rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white text-lg">�‍👩‍👧‍👦</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">祝福传递</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                您的每一句祝福，都像春风一样温暖人心。新春佳节，让我们一起传递这份美好祝愿，共同营造欢乐祥和的节日氛围！
                <br />
                <span className="text-spring-red font-medium">🎊 心意虽轻，祝福绵长 ✨</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
