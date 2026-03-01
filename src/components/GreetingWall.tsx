'use client';

import { Greeting } from '@/types/greeting';

interface GreetingWallProps {
  greetings: Greeting[];
}

export default function GreetingWall({ greetings }: GreetingWallProps) {
  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return '刚刚';
    if (minutes < 60) return `${minutes}分钟前`;
    if (hours < 24) return `${hours}小时前`;
    return `${days}天前`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-spring-gold/20">
      <h3 className="text-2xl font-bold text-spring-dark-red mb-6 text-center">
        新春祝福墙
      </h3>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {greetings.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎊</div>
            <p className="text-gray-500">还没有人发送祝福，快来抢沙发吧！</p>
          </div>
        ) : (
          greetings.map((greeting, index) => (
            <div
              key={greeting.id}
              className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
                index % 2 === 0
                  ? 'bg-spring-red/5 border-spring-red/20'
                  : 'bg-spring-gold/5 border-spring-gold/20'
              }`}
            >
              {/* 发送者信息 */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">👤</span>
                  <span className="font-semibold text-gray-800">
                    {greeting.senderName || '匿名用户'}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {formatTime(greeting.timestamp)}
                </span>
              </div>

              {/* 祝福内容 */}
              <p className="text-gray-700 leading-relaxed">
                {greeting.message}
              </p>

              {/* 装饰元素 */}
              <div className="flex justify-end mt-2 space-x-1">
                <span className="text-red-400">❤️</span>
                <span className="text-yellow-400">🎊</span>
                <span className="text-green-400">🐉</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 统计信息 */}
      {greetings.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            🎉 已有 <span className="font-bold text-spring-dark-red">{greetings.length}</span> 条新春祝福
          </p>
        </div>
      )}
    </div>
  );
}
