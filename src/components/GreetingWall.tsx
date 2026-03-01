'use client';

import { Greeting } from '@/types/greeting';

interface GreetingWallProps {
  greetings: Greeting[];
}

export default function GreetingWall({ greetings }: GreetingWallProps) {
  const formatTime = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diff = now.getTime() - dateObj.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return '刚刚';
    if (minutes < 60) return `${minutes}分钟前`;
    if (hours < 24) return `${hours}小时前`;
    return `${days}天前`;
  };

  const getBorderColor = (index: number) => {
    const colors = ['border-l-accent-primary', 'border-l-accent-secondary', 'border-l-border-active'];
    return colors[index % 3];
  };

  return (
    <div className="relative">
      {/* Section label */}
      <div className="section-label">// 实时墙</div>

      {/* Counter */}
      <div className="mb-8 text-center">
        <div className="font-bebas-neue text-6xl md:text-7xl text-accent-primary leading-none">
          {greetings.length.toString().padStart(3, '0')}
        </div>
        <div className="font-dm-mono text-sm uppercase tracking-wider text-text-secondary mt-2">
          祝福
        </div>
      </div>

      {/* Greetings list */}
      <div className="relative space-y-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-accent-primary scrollbar-track-bg-elevated">
        {greetings.length === 0 ? (
          <div className="text-center py-16">
            <div className="font-noto-serif-sc text-8xl font-thin text-text-muted mb-4">
              空
            </div>
            <div className="font-dm-mono text-sm uppercase tracking-wider text-text-secondary">
              暂无祝福
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {greetings.map((greeting, index) => (
              <div
                key={greeting.id}
                className={`group relative bg-bg-elevated border border-border-subtle border-l-4 ${getBorderColor(index)} p-6 hover:border-accent-primary hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 animate-fade-in-up`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="w-10 h-10 bg-accent-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-text-primary font-dm-mono text-sm">•</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-noto-serif-sc font-medium text-text-primary text-sm truncate">
                        {greeting.senderName || '匿名祝福者'}
                      </h4>
                      <p className="font-dm-mono text-xs text-text-muted uppercase tracking-wider">
                        {formatTime(greeting.timestamp)}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="w-7 h-7 border border-transparent hover:border-accent-primary transition-colors rounded-none flex items-center justify-center text-text-secondary hover:text-accent-primary"
                      aria-label="点赞"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add like functionality here
                      }}
                    >
                      <span className="text-sm">♥</span>
                    </button>
                    <button
                      className="w-7 h-7 border border-transparent hover:border-accent-primary transition-colors rounded-none flex items-center justify-center text-text-secondary hover:text-accent-primary"
                      aria-label="分享"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.share?.({
                          title: '新春祝福',
                          text: greeting.message,
                          url: window.location.href
                        }).catch(() => {
                          navigator.clipboard?.writeText(`${greeting.message} - ${greeting.senderName || '匿名祝福者'}`);
                        });
                      }}
                    >
                      <span className="text-sm">↗</span>
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div className="font-noto-serif-sc font-light text-text-primary text-base leading-relaxed">
                  {greeting.message}
                </div>

                {/* Footer */}
                <div className="pt-4 mt-4 border-t border-border-subtle flex justify-between items-center">
                  <div className="font-dm-mono text-xs text-text-muted uppercase tracking-wider">
                    #{greetings.length - index}
                  </div>
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
