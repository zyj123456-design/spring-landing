export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden guochao-style lantern-scatter">
      {/* 春节视觉盛宴 - 烈焰骏马主题 */}
      <div className="absolute inset-0">
        {/* 第一层：宣纸质感背景 */}
        <div className="absolute inset-0 rice-paper-texture"></div>

        {/* 第二层：剪纸风奔马 - 主视觉元素 */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-32 h-24 md:w-48 md:h-36 horse-paper-cut opacity-20 animate-horse-gallop"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-spring-red/10 to-spring-light-red/10 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* 第三层：线描马纹背景图案 */}
        <div className="absolute inset-0 horse-line-pattern opacity-5"></div>

        {/* 第四层：抽象马鬃流动曲线 */}
        <div className="absolute top-1/3 left-16 w-2 h-32 bg-gradient-to-b from-transparent via-spring-burnished-gold/30 to-transparent animate-pulse horse-mane-flow"></div>
        <div className="absolute top-1/4 right-24 w-2 h-24 bg-gradient-to-b from-transparent via-spring-red/25 to-transparent animate-pulse horse-mane-flow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-32 w-2 h-28 bg-gradient-to-b from-transparent via-spring-light-red/20 to-transparent animate-pulse horse-mane-flow" style={{ animationDelay: '1.5s' }}></div>

        {/* 第五层：马蹄金装饰元素 */}
        <div className="absolute top-24 right-12 w-8 h-10 horse-hoof-gold opacity-60 animate-float"></div>
        <div className="absolute bottom-32 left-24 w-6 h-8 horse-hoof-gold opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>

        {/* 第六层：水墨骏马装饰 */}
        <div className="absolute bottom-16 right-8 w-24 h-20 horse-ink-wash opacity-15"></div>
        <div className="absolute top-8 left-8 w-20 h-16 horse-ink-wash opacity-10" style={{ animationDelay: '2s' }}></div>
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
            {/* 马年主视觉 - 烫金工艺感 */}
            <div className="relative inline-block mb-6">
              <div className="text-8xl md:text-9xl font-black text-white drop-shadow-2xl animate-pulse">
                🐎
              </div>
              <div className="absolute inset-0 text-8xl md:text-9xl font-black text-spring-burnished-gold opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}>
                🐎
              </div>
              {/* 暖金色光晕 */}
              <div className="absolute inset-0 bg-gradient-to-r from-spring-burnished-gold to-spring-gold rounded-full opacity-20 blur-2xl animate-pulse warm-gold-glow"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight">
              <span className="hot-stamping drop-shadow-2xl block">
                马年吉祥
              </span>
              <br className="hidden sm:block" />
              <span className="hot-stamping drop-shadow-2xl">
                骏马奔腾
              </span>
            </h1>

            <div className="w-24 h-1 md:w-32 md:h-1 gold-foil-texture mx-auto mb-6 md:mb-8 rounded-full"></div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-6 md:mb-8 leading-relaxed drop-shadow-lg max-w-4xl mx-auto px-2">
              新春马到成功，骏马奔腾四海
              <br className="hidden md:block" />
              <span className="text-spring-ivory font-semibold candle-glow px-4 py-2 rounded-lg">技术创新 · 马年新起点 · 共创辉煌未来</span>
            </p>
          </div>

          {/* 操作按钮 - 金箔质感设计 */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
            <button
              onClick={() => {
                const element = document.getElementById('greetings');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group relative w-full sm:w-auto min-h-[48px] px-8 py-4 gold-foil-texture text-spring-dark-red font-bold text-lg md:text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 active:scale-95 transition-all duration-200 overflow-hidden focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
              aria-label="开始发送新春祝福"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">🎊</span>
                <span className="font-bold">开始互动拜年</span>
                <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-spring-burnished-gold to-spring-gold opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group relative w-full sm:w-auto min-h-[48px] px-8 py-4 silk-texture text-white font-bold text-lg md:text-lg rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/30"
              aria-label="联系我们获取更多信息"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="text-2xl">📞</span>
                <span>联系我们</span>
                <span className="group-hover:translate-x-1 transition-transform text-xl">↗</span>
              </span>
            </button>
          </div>

          {/* 滚动提示 - 烛火微光效果 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="candle-glow text-white/70 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium">向下滚动探索</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mx-auto mt-2">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部装饰元素 - 留白东方美学 */}
        <div className="mt-16 flex justify-center items-center gap-8 oriental-whitespace">
          <div className="animate-bounce text-yellow-300 drop-shadow-lg">🎊</div>
          <div className="animate-pulse text-red-300 drop-shadow-lg">🧧</div>
          <div className="animate-bounce text-orange-300 drop-shadow-lg" style={{ animationDelay: '0.5s' }}>🐉</div>
          <div className="animate-pulse text-gold-300 drop-shadow-lg">✨</div>
        </div>
      </div>
    </section>
  );
}
