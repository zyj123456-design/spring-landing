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
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 border border-white/50 relative overflow-hidden">
      {/* 春节视觉盛宴 - 烈焰骏马主题一致性 */}
      <div className="absolute inset-0">
        {/* 第一层：宣纸质感背景 */}
        <div className="absolute inset-0 rice-paper-texture"></div>

        {/* 第二层：剪纸风奔马装饰 */}
        <div className="absolute top-3 right-3 w-12 h-9 horse-paper-cut opacity-12 animate-horse-gallop"></div>
        <div className="absolute bottom-4 left-4 w-10 h-8 horse-paper-cut opacity-8 animate-horse-gallop" style={{ animationDelay: '0.7s' }}></div>

        {/* 第三层：线描马纹背景 */}
        <div className="absolute inset-0 horse-line-pattern opacity-2"></div>

        {/* 第四层：抽象马鬃装饰 */}
        <div className="absolute top-12 left-6 w-0.5 h-12 bg-gradient-to-b from-transparent via-spring-burnished-gold/15 to-transparent animate-pulse horse-mane-flow"></div>
        <div className="absolute top-20 right-8 w-0.5 h-10 bg-gradient-to-b from-transparent via-spring-red/12 to-transparent animate-pulse horse-mane-flow" style={{ animationDelay: '1.5s' }}></div>

        {/* 第五层：飘落的梅花瓣 */}
        <div className="absolute top-12 left-8 animate-float opacity-20">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6,0.5 Q7,3.5 10.5,6 Q7,8.5 6,11.5 Q5,8.5 1.5,6 Q5,3.5 6,0.5" fill="#C0272D" stroke="#8B0000" strokeWidth="0.2"/>
            <circle cx="6" cy="6" r="1.5" fill="#F5C842"/>
          </svg>
        </div>

        <div className="absolute top-16 right-12 animate-float opacity-15" style={{ animationDelay: '2s' }}>
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M5,0.5 Q6,2.5 9,5 Q6,7.5 5,9.5 Q4,7.5 1,5 Q4,2.5 5,0.5" fill="#F5C842" stroke="#D4A017" strokeWidth="0.2"/>
            <circle cx="5" cy="5" r="1" fill="#FFE4B5"/>
          </svg>
        </div>

        {/* 第六层：传统吉祥字符装饰 */}
        <div className="absolute bottom-6 right-6 opacity-6 text-spring-red font-bold text-base animate-pulse" style={{ animationDelay: '1.5s' }}>
          福
        </div>

        <div className="absolute top-8 left-8 opacity-4 text-spring-gold font-bold text-sm animate-pulse" style={{ animationDelay: '3s' }}>
          喜
        </div>

        {/* 第七层：回纹装饰边框 */}
        <div className="absolute top-2 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-spring-red/10 to-transparent rounded-full"></div>
        <div className="absolute bottom-2 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-spring-gold/6 to-transparent rounded-full"></div>
      </div>

      {/* 标题区域 - 移动端优化 */}
      <div className="relative text-center mb-6 md:mb-8">
        <div className="inline-flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-spring-red to-spring-gold rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl">
            <span className="text-2xl md:text-3xl">📰</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-spring-dark-red via-spring-red to-spring-gold bg-clip-text text-transparent">
            新春祝福墙
          </h3>
        </div>
        <p className="text-gray-600 text-xs md:text-sm max-w-xs md:max-w-md mx-auto px-2">汇聚来自四面八方的美好祝福，共同庆祝马年新春</p>
        <div className="w-16 h-1 md:w-20 md:h-1 bg-gradient-to-r from-transparent via-spring-red to-transparent mx-auto mt-3 md:mt-4 rounded-full"></div>
      </div>

      {/* 祝福列表 - 移动端优化 */}
      <div className="relative space-y-3 md:space-y-6 max-h-[400px] md:max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-spring-red/20 scrollbar-track-transparent">
        {greetings.length === 0 ? (
          <div className="text-center py-12 md:py-16">
            <div className="relative mb-4 md:mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-spring-red/20 to-gold-50/40 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-6xl md:text-8xl animate-bounce">🎊</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <h4 className="text-lg md:text-2xl font-semibold text-gray-700 mb-2">还没有祝福呢</h4>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed px-4">快来发送第一条新春祝福，开启我们的节日狂欢吧！</p>
            <div className="mt-4 md:mt-6 flex justify-center gap-2 md:gap-3 text-2xl md:text-3xl">
              <span className="animate-bounce">🎊</span>
              <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>🧧</span>
              <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🐉</span>
            </div>
          </div>
        ) : (
          <div className="space-y-3 md:space-y-4">
            {greetings.map((greeting, index) => (
              <div
                key={greeting.id}
                className={`group relative backdrop-blur-sm bg-white/90 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 border border-white/50 overflow-hidden active:scale-[0.98] ${
                  index % 3 === 0
                    ? 'hover:shadow-red-500/10 active:bg-red-50/30'
                    : index % 3 === 1
                    ? 'hover:shadow-orange-500/10 active:bg-orange-50/30'
                    : 'hover:shadow-yellow-500/10 active:bg-yellow-50/30'
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

                <div className="p-4 md:p-6">
                  {/* 发送者信息和时间 - 移动端优化 */}
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                      <div className={`w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 ${
                        index % 3 === 0
                          ? 'bg-gradient-to-br from-red-100 to-red-200'
                          : index % 3 === 1
                          ? 'bg-gradient-to-br from-orange-100 to-orange-200'
                          : 'bg-gradient-to-br from-yellow-100 to-yellow-200'
                      }`}>
                        <span className="text-lg md:text-xl">👤</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-gray-800 text-sm md:text-lg truncate">
                          {greeting.senderName || '匿名祝福者'}
                        </h4>
                        <p className="text-xs text-gray-500 flex items-center gap-1 flex-wrap">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse flex-shrink-0"></span>
                          <span className="truncate">{formatTime(greeting.timestamp)}</span>
                        </p>
                      </div>
                    </div>

                    {/* 装饰图标 - 移动端简化 */}
                    <div className="flex gap-1 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                      <span className="text-red-400 text-sm md:text-lg">❤️</span>
                      <span className="text-yellow-400 text-sm md:text-lg">🎊</span>
                    </div>
                  </div>

                  {/* 祝福内容 - 移动端优化 */}
                  <div className="relative mb-3 md:mb-4">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-lg break-words">
                      {greeting.message}
                    </p>

                    {/* 内容装饰 - 移动端适配 */}
                    <div className="absolute -left-1 -top-1 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-spring-red/20 to-transparent rounded-full opacity-50"></div>
                    <div className="absolute -right-1 -bottom-1 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-gold-400/20 to-transparent rounded-full opacity-50"></div>
                  </div>

                  {/* 底部装饰线 - 移动端优化 */}
                  <div className="pt-3 border-t border-gray-100/50 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <span className="w-1 h-1 bg-spring-red rounded-full animate-pulse"></span>
                      <span className="truncate">新春祝福 #{greetings.length - index}</span>
                    </div>
                    <div className="flex gap-1">
                      <button
                        className="text-xs md:text-sm opacity-50 hover:opacity-100 transition-opacity active:scale-110 p-1"
                        aria-label="点赞"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add like functionality here
                        }}
                      >
                        👍
                      </button>
                      <button
                        className="text-xs md:text-sm opacity-50 hover:opacity-100 transition-opacity active:scale-110 p-1"
                        aria-label="分享"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add share functionality here
                          navigator.share?.({
                            title: '新春祝福',
                            text: greeting.message,
                            url: window.location.href
                          }).catch(() => {
                            // Fallback for browsers without Web Share API
                            navigator.clipboard?.writeText(`${greeting.message} - ${greeting.senderName || '匿名祝福者'}`);
                          });
                        }}
                      >
                        📤
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 统计信息 - 移动端优化 */}
      {greetings.length > 0 && (
        <div className="relative mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200/50">
          <div className="bg-gradient-to-r from-spring-red/5 via-orange-50/30 to-gold-50/20 rounded-xl md:rounded-2xl p-4 md:p-6 border border-spring-red/10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-spring-red to-spring-gold rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-base md:text-lg">📊</span>
                </div>
                <h4 className="text-base md:text-xl font-bold text-gray-800">祝福统计</h4>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed px-2">
                🎉 已有 <span className="font-bold text-lg md:text-2xl text-spring-dark-red bg-gradient-to-r from-spring-red to-spring-gold bg-clip-text text-transparent">{greetings.length}</span> 条新春祝福
                <br className="hidden md:block" />
                <span className="text-xs md:text-sm text-gray-500">每一条祝福都承载着新年的美好祝愿 ✨</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
