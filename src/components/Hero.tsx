export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-spring-red via-spring-light-red to-spring-gold">
      {/* 马年背景装饰 - 移动端优化 */}
      <div className="absolute inset-0">
        {/* 祥云纹 - 移动端简化 */}
        <div className="absolute top-16 left-6 w-32 h-20 bg-gradient-to-r from-spring-ivory/15 to-transparent rounded-full blur-xl animate-pulse md:top-20 md:left-10 md:w-40 md:h-24"></div>
        <div className="absolute top-28 right-12 w-24 h-16 bg-gradient-to-l from-spring-gold/10 to-transparent rounded-full blur-lg animate-pulse md:top-32 md:right-20 md:w-32 md:h-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-12 w-36 h-20 bg-gradient-to-r from-spring-red/8 to-spring-light-red/8 rounded-full blur-2xl animate-pulse md:bottom-40 md:left-20 md:w-48 md:h-28" style={{ animationDelay: '2s' }}></div>

        {/* 抽象马鬃流动曲线 - 移动端适配 */}
        <div className="absolute top-1/4 left-12 w-1.5 h-24 bg-gradient-to-b from-transparent via-spring-burnished-gold/25 to-transparent animate-pulse md:top-1/3 md:left-16 md:w-2 md:h-32"></div>
        <div className="absolute top-1/5 right-16 w-1.5 h-18 bg-gradient-to-b from-transparent via-spring-red/20 to-transparent animate-pulse md:top-1/4 md:right-24 md:w-2 md:h-24" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-20 w-1.5 h-20 bg-gradient-to-b from-transparent via-spring-light-red/15 to-transparent animate-pulse md:bottom-1/3 md:left-32 md:w-2 md:h-28" style={{ animationDelay: '1.5s' }}></div>

        {/* 马蹄金装饰 - 移动端尺寸优化 */}
        <div className="absolute top-20 right-8 w-6 h-8 bg-gradient-to-b from-spring-burnished-gold to-spring-gold rounded-t-full opacity-60 animate-float md:top-24 md:right-12 md:w-8 md:h-10"></div>
        <div className="absolute bottom-24 left-16 w-5 h-7 bg-gradient-to-b from-spring-burnished-gold to-spring-gold rounded-t-full opacity-50 animate-float md:bottom-32 md:left-24 md:w-6 md:h-8" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* 浮动灯笼装饰 - 移动端优化 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-12 h-16 bg-gradient-to-b from-red-400 to-red-600 rounded-full opacity-80 animate-lantern shadow-lg md:top-20 md:left-16 md:w-16 md:h-24">
          <div className="w-8 h-8 bg-yellow-300 rounded-full mx-auto mt-1.5 opacity-90 md:w-12 md:h-12 md:mt-2"></div>
        </div>
        <div className="absolute top-28 right-16 w-10 h-14 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full opacity-70 animate-lantern shadow-lg md:top-32 md:right-20 md:w-12 md:h-18" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-yellow-200 rounded-full mx-auto mt-1 opacity-90 md:w-8 md:h-8 md:mt-1.5"></div>
        </div>
        <div className="absolute bottom-32 left-16 w-14 h-18 bg-gradient-to-b from-red-500 to-red-700 rounded-full opacity-60 animate-lantern shadow-xl md:bottom-40 md:left-24 md:w-20 md:h-28" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 bg-yellow-400 rounded-full mx-auto mt-2 opacity-90 md:w-14 md:h-14 md:mt-3"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* 主标题 */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            {/* 马年主视觉 */}
            <div className="relative inline-block mb-6">
              <div className="text-8xl md:text-9xl font-black text-white drop-shadow-2xl animate-pulse">
                🐎
              </div>
              <div className="absolute inset-0 text-8xl md:text-9xl font-black text-spring-burnished-gold opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}>
                🐎
              </div>
              {/* 动态光晕 */}
              <div className="absolute inset-0 bg-gradient-to-r from-spring-burnished-gold to-spring-gold rounded-full opacity-20 blur-2xl animate-pulse"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-spring-ivory to-spring-burnished-gold bg-clip-text text-transparent drop-shadow-2xl block">
                马年吉祥
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-spring-burnished-gold via-spring-gold to-spring-light-red bg-clip-text text-transparent drop-shadow-2xl">
                骏马奔腾
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-spring-burnished-gold to-transparent mx-auto mb-6 md:mb-8 rounded-full"></div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-6 md:mb-8 leading-relaxed drop-shadow-lg max-w-4xl mx-auto px-2">
              新春马到成功，骏马奔腾四海
              <br className="hidden md:block" />
              <span className="text-spring-ivory font-semibold">技术创新 · 马年新起点 · 共创辉煌未来</span>
            </p>
          </div>

          {/* 操作按钮 - 移动端优化 */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
            <button
              onClick={() => {
                const element = document.getElementById('greetings');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group relative w-full sm:w-auto min-h-[48px] px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-spring-dark-red font-bold text-lg md:text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 active:scale-95 transition-all duration-200 overflow-hidden focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
              aria-label="开始发送新春祝福"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">🎊</span>
                <span className="font-bold">开始互动拜年</span>
                <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group relative w-full sm:w-auto min-h-[48px] px-8 py-4 border-3 border-white/80 text-white font-bold text-lg md:text-lg rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/30"
              aria-label="联系我们获取更多信息"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="text-2xl">�</span>
                <span>联系我们</span>
                <span className="group-hover:translate-x-1 transition-transform text-xl">↗</span>
              </span>
            </button>
          </div>

          {/* 滚动提示 - 移动端优化 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/70">
              <span className="text-sm font-medium">向下滚动探索</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部装饰元素 */}
        <div className="mt-16 flex justify-center items-center gap-8 text-6xl">
          <div className="animate-bounce text-yellow-300 drop-shadow-lg">🎊</div>
          <div className="animate-pulse text-red-300 drop-shadow-lg">🧧</div>
          <div className="animate-bounce text-orange-300 drop-shadow-lg" style={{ animationDelay: '0.5s' }}>🐉</div>
          <div className="animate-pulse text-gold-300 drop-shadow-lg">✨</div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
