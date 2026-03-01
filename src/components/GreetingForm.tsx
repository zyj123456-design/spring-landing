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
      setError('请填写拜年信息');
      return;
    }

    const result = await onSubmit(message.trim(), senderName.trim() || undefined);

    if (result.success) {
      setMessage('');
      setSenderName('');
      setError('');
    } else {
      setError(result.error || '发送失败，请稍后重试');
    }
  };

  const messageLength = message.length;
  const isValidLength = messageLength >= 10 && messageLength <= 100;

  return (
    <div id="greetings" className="relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-spring-red/5 via-orange-50/30 to-gold-50/20 rounded-3xl"></div>
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-gold-400 to-yellow-500 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      <div className="relative backdrop-blur-sm bg-white/80 rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50">
        {/* 标题区域 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-spring-red to-spring-gold rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">💌</span>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-spring-dark-red to-spring-gold bg-clip-text text-transparent">
              发送新春祝福
            </h3>
          </div>
          <p className="text-gray-600 text-sm">分享您的祝福，与大家共庆佳节</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 发送者姓名 */}
          <div className="group">
            <label htmlFor="senderName" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-spring-red">👤</span>
              您的姓名（可选）
            </label>
            <div className="relative">
              <input
                type="text"
                id="senderName"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value.slice(0, 20))}
                placeholder="请输入您的姓名"
                className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-spring-red/20 focus:border-spring-red transition-all duration-300 bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                disabled={isLoading}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-spring-red transition-colors">
                <span className="text-lg">✍️</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
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
              <span className="text-spring-red">🎊</span>
              新春祝福语
            </label>
            <div className="relative">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 100))}
                placeholder="写下您的春节祝福，让这个节日更加温暖..."
                rows={5}
                className={`w-full px-5 py-4 pl-12 border-2 rounded-2xl focus:ring-4 transition-all duration-300 bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-400 resize-none ${
                  !isValidLength && messageLength > 0
                    ? 'border-red-300 focus:ring-red-100 focus:border-red-400'
                    : 'border-gray-200 focus:ring-spring-red/20 focus:border-spring-red'
                }`}
                disabled={isLoading}
              />
              <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-spring-red transition-colors">
                <span className="text-xl">💝</span>
              </div>
            </div>

            {/* 字符计数和验证 */}
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full transition-colors ${
                  messageLength === 0 ? 'bg-gray-300' :
                  messageLength < 10 ? 'bg-red-400' :
                  messageLength <= 100 ? 'bg-green-400' : 'bg-red-400'
                }`}></div>
                <p className={`text-xs font-medium ${
                  messageLength === 0 ? 'text-gray-500' :
                  isValidLength ? 'text-green-600' :
                  'text-red-600'
                }`}>
                  {messageLength}/100 字符
                </p>
              </div>

              {messageLength > 0 && (
                <div className="flex items-center gap-1 text-xs">
                  {isValidLength ? (
                    <span className="text-green-600 flex items-center gap-1">
                      <span>✅</span> 长度合适
                    </span>
                  ) : messageLength < 10 ? (
                    <span className="text-red-600 flex items-center gap-1">
                      <span>⚠️</span> 至少需要10字符
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center gap-1">
                      <span>⚠️</span> 超出长度限制
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

          {/* 提交按钮 */}
          <button
            type="submit"
            disabled={isLoading || !isValidLength}
            className={`group relative w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden ${
              isLoading || !isValidLength
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-spring-red to-spring-dark-red text-white shadow-xl hover:shadow-2xl hover:shadow-spring-red/30 transform hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  发送祝福中...
                </>
              ) : (
                <>
                  <span className="text-xl">🎊</span>
                  发送祝福
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </>
              )}
            </span>
            {!isLoading && isValidLength && (
              <div className="absolute inset-0 bg-gradient-to-r from-spring-dark-red to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </button>
        </form>

        {/* 温馨提示 */}
        <div className="mt-8 p-5 bg-gradient-to-r from-spring-red/5 to-gold-50/30 rounded-2xl border-2 border-spring-red/10">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-spring-red to-spring-gold rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white text-lg">💝</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">温馨提示</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                您的祝福将与其他人的新春祝福一起展示，让我们共同营造欢乐祥和的节日氛围！
                <br />
                <span className="text-spring-red font-medium">每条祝福都承载着新年的美好祝愿 ✨</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
