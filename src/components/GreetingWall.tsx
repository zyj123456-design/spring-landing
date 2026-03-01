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

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-spring-red/5 via-transparent to-gold-50/20 rounded-3xl"></div>
      <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-spring-red to-spring-gold rounded-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-8 h-8 bg-gradient-to-br from-gold-400 to-yellow-500 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* 标题区域 */}
      <div className="relative text-center mb-8">
        <div className="inline-flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-spring-red to-spring-gold rounded-3xl flex items-center justify-center shadow-xl">
            <span className="text-3xl">📰</span>
          </div>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-spring-dark-red via-spring-red to-spring-gold bg-clip-text text-transparent">
            新春祝福墙
          </h3>
        </div>
        <p className="text-gray-600 text-sm max-w-md mx-auto">汇聚来自四面八方的美好祝福，共同庆祝马年新春</p>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-spring-red to-transparent mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative space-y-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-spring-red/20 scrollbar-track-transparent">
        {greetings.length === 0 ? (
          <div className="text-center py-16">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-spring-red/20 to-gold-50/40 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-8xl animate-bounce">🎊</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <h4 className="text-2xl font-semibold text-gray-700 mb-2">还没有祝福呢</h4>
            <p className="text-gray-500 leading-relaxed">快来发送第一条新春祝福，开启我们的节日狂欢吧！</p>
            <div className="mt-6 flex justify-center gap-3 text-3xl">
              <span className="animate-bounce">🎊</span>
              <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>🧧</span>
              <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🐉</span>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 md:gap-6">
            {greetings.map((greeting, index) => (
              <div
                key={greeting.id}
                className={`group relative backdrop-blur-sm bg-white/90 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden ${
                  index % 3 === 0
                    ? 'hover:shadow-red-500/10'
                    : index % 3 === 1
                    ? 'hover:shadow-orange-500/10'
                    : 'hover:shadow-yellow-500/10'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* 装饰边框 */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                  index % 3 === 0
                    ? 'from-red-400 to-red-600'
                    : index % 3 === 1
                    ? 'from-orange-400 to-orange-600'
                    : 'from-yellow-400 to-yellow-600'
                }`}></div>

                <div className="p-6 md:p-8">
                  {/* 发送者信息和时间 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
                        index % 3 === 0
                          ? 'bg-gradient-to-br from-red-100 to-red-200'
                          : index % 3 === 1
                          ? 'bg-gradient-to-br from-orange-100 to-orange-200'
                          : 'bg-gradient-to-br from-yellow-100 to-yellow-200'
                      }`}>
                        <span className="text-xl">👤</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">
                          {greeting.senderName || '匿名祝福者'}
                        </h4>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                          {formatTime(greeting.timestamp)}
                        </p>
                      </div>
                    </div>

                    {/* 装饰图标 */}
                    <div className="flex gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="text-red-400 text-lg">❤️</span>
                      <span className="text-yellow-400 text-lg">🎊</span>
                      <span className="text-green-400 text-lg">🐉</span>
                    </div>
                  </div>

                  {/* 祝福内容 */}
                  <div className="relative">
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">
                      {greeting.message}
                    </p>

                    {/* 内容装饰 */}
                    <div className="absolute -left-2 -top-2 w-6 h-6 bg-gradient-to-br from-spring-red/20 to-transparent rounded-full opacity-50"></div>
                    <div className="absolute -right-2 -bottom-2 w-4 h-4 bg-gradient-to-br from-gold-400/20 to-transparent rounded-full opacity-50"></div>
                  </div>

                  {/* 底部装饰线 */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-spring-red rounded-full animate-pulse"></span>
                      <span>新春祝福 #{greetings.length - index}</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="text-sm opacity-50 hover:opacity-100 transition-opacity cursor-pointer">👍</span>
                      <span className="text-sm opacity-50 hover:opacity-100 transition-opacity cursor-pointer">❤️</span>
                      <span className="text-sm opacity-50 hover:opacity-100 transition-opacity cursor-pointer">🎊</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 统计信息 */}
      {greetings.length > 0 && (
        <div className="relative mt-8 pt-6 border-t border-gray-200/50">
          <div className="bg-gradient-to-r from-spring-red/5 via-orange-50/30 to-gold-50/20 rounded-2xl p-6 border border-spring-red/10">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-spring-red to-spring-gold rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">📊</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">祝福统计</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                🎉 已有 <span className="font-bold text-2xl text-spring-dark-red bg-gradient-to-r from-spring-red to-spring-gold bg-clip-text text-transparent">{greetings.length}</span> 条新春祝福
                <br />
                <span className="text-sm text-gray-500">每一条祝福都承载着新年的美好祝愿 ✨</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
