'use client';

import { useState } from 'react';

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
      setError('请分享您的祝福信息');
      return;
    }

    const result = await onSubmit(message.trim(), senderName.trim() || undefined);

    if (result.success) {
      setMessage('');
      setSenderName('');
      setError('');
    } else {
      setError(result.error || '发送祝福失败');
    }
  };

  const messageLength = message.length;
  const isValidLength = messageLength >= 10 && messageLength <= 100;

  return (
    <div id="greetings" className="relative">
      {/* Section label */}
      <div className="section-label">// 提交祝福</div>

      <div className="relative bg-bg-elevated border border-border-subtle p-8 md:p-10">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sender Name */}
          <div className="group relative">
            <label
              htmlFor="senderName"
              className={`absolute left-4 transition-all duration-200 pointer-events-none font-dm-mono text-xs uppercase tracking-wider ${
                senderName
                  ? 'top-0 text-accent-primary'
                  : 'top-1/2 -translate-y-1/2 text-text-muted'
              }`}
            >
              姓名（可选）
            </label>
            <input
              type="text"
              id="senderName"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value.slice(0, 20))}
              className="form-input pt-6 pb-2"
              maxLength={20}
            />
            <div className="flex justify-end mt-1">
              <span className="font-dm-mono text-xs text-text-muted">{senderName.length}/20</span>
            </div>
          </div>

          {/* Message */}
          <div className="group relative">
            <label
              htmlFor="message"
              className={`absolute left-4 transition-all duration-200 pointer-events-none font-dm-mono text-xs uppercase tracking-wider ${
                message
                  ? 'top-4 text-accent-primary'
                  : 'top-6 text-text-muted'
              }`}
            >
              祝福信息
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 100))}
              rows={4}
              className="form-input pt-8 pb-2 resize-none"
              style={{ fontSize: '16px' }}
            />
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full transition-colors ${
                  messageLength === 0 ? 'bg-text-muted' :
                  messageLength < 10 ? 'bg-accent-primary' :
                  messageLength <= 100 ? 'bg-accent-secondary' : 'bg-accent-primary'
                }`}></div>
                <span className="font-dm-mono text-xs text-text-secondary">{messageLength}/100</span>
              </div>
              {messageLength > 0 && (
                <span className={`font-dm-mono text-xs ${
                  isValidLength ? 'text-accent-secondary' : 'text-accent-primary'
                }`}>
                  {isValidLength ? '有效' : '无效'}
                </span>
              )}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="form-error">
              <span className="font-dm-mono text-sm uppercase">{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="relative">
            <button
              type="submit"
              disabled={!isValidLength || isLoading}
              className={`w-full h-12 border transition-all duration-200 font-dm-mono text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed ${
                isLoading
                  ? 'bg-accent-primary text-text-primary border-accent-primary'
                  : 'bg-transparent text-accent-primary border-accent-primary hover:bg-accent-primary hover:text-text-primary'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  发送中...
                </span>
              ) : (
                '提交祝福'
              )}
            </button>

            {/* Loading scan line */}
            {isLoading && (
              <div className="absolute inset-0 overflow-hidden rounded-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-accent-secondary/20 to-transparent animate-loading-scan"></div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
