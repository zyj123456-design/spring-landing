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
    <div id="greetings" className="bg-white rounded-2xl shadow-lg p-6 border-2 border-spring-red/20">
      <h3 className="text-2xl font-bold text-spring-dark-red mb-6 text-center">
        发送新春祝福
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 发送者姓名 */}
        <div>
          <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 mb-2">
            您的姓名（可选）
          </label>
          <input
            type="text"
            id="senderName"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value.slice(0, 20))}
            placeholder="请输入您的姓名"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spring-red focus:border-transparent transition-colors"
            disabled={isLoading}
          />
          <p className="text-xs text-gray-500 mt-1">
            {senderName.length}/20 字符
          </p>
        </div>

        {/* 拜年信息 */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            新春祝福语
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 100))}
            placeholder="写下您的春节祝福..."
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-spring-red focus:border-transparent transition-colors resize-none ${
              !isValidLength && messageLength > 0 ? 'border-red-300' : 'border-gray-300'
            }`}
            disabled={isLoading}
          />
          <div className="flex justify-between items-center mt-2">
            <p className={`text-xs ${isValidLength ? 'text-green-600' : messageLength > 0 ? 'text-red-600' : 'text-gray-500'}`}>
              {messageLength}/100 字符 {messageLength > 0 && (isValidLength ? '✓' : '✗')}
            </p>
            {messageLength > 0 && messageLength < 10 && (
              <span className="text-xs text-red-600">至少需要10个字符</span>
            )}
          </div>
        </div>

        {/* 错误信息 */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* 提交按钮 */}
        <button
          type="submit"
          disabled={isLoading || !isValidLength}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
            isLoading || !isValidLength
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-spring-red hover:bg-spring-dark-red hover:shadow-lg transform hover:scale-105'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              发送中...
            </span>
          ) : (
            '发送祝福 🎊'
          )}
        </button>
      </form>

      {/* 温馨提示 */}
      <div className="mt-6 p-4 bg-spring-red/5 rounded-lg border border-spring-red/10">
        <p className="text-sm text-gray-600">
          💝 <strong>温馨提示：</strong>您的祝福将与其他人的新春祝福一起展示，让我们共同营造欢乐祥和的节日氛围！
        </p>
      </div>
    </div>
  );
}
