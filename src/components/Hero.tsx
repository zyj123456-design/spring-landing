export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-spring-red via-spring-light-red to-spring-gold">
      {/* 马年背景装饰 */}
      <div className="absolute inset-0">
        {/* 动态祥云纹 */}
        <div className="absolute top-20 left-10 w-40 h-24 bg-gradient-to-r from-spring-ivory/20 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-20 bg-gradient-to-l from-spring-gold/15 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-48 h-28 bg-gradient-to-r from-spring-red/10 to-spring-light-red/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* 抽象马鬃流动曲线 */}
        <div className="absolute top-1/3 left-16 w-2 h-32 bg-gradient-to-b from-transparent via-spring-burnished-gold/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 right-24 w-2 h-24 bg-gradient-to-b from-transparent via-spring-red/25 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-32 w-2 h-28 bg-gradient-to-b from-transparent via-spring-light-red/20 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* 马蹄金装饰 */}
        <div className="absolute top-24 right-12 w-8 h-10 bg-gradient-to-b from-spring-burnished-gold to-spring-gold rounded-t-full opacity-60 animate-float"></div>
        <div className="absolute bottom-32 left-24 w-6 h-8 bg-gradient-to-b from-spring-burnished-gold to-spring-gold rounded-t-full opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* 浮动灯笼装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-16 h-24 bg-gradient-to-b from-red-400 to-red-600 rounded-full opacity-80 animate-lantern shadow-lg">
          <div className="w-12 h-12 bg-yellow-300 rounded-full mx-auto mt-2 opacity-90"></div>
        </div>
        <div className="absolute top-32 right-20 w-12 h-18 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full opacity-70 animate-lantern shadow-lg" style={{ animationDelay: '1s' }}>
          <div className="w-8 h-8 bg-yellow-200 rounded-full mx-auto mt-1 opacity-90"></div>
        </div>
        <div className="absolute bottom-40 left-24 w-20 h-28 bg-gradient-to-b from-red-500 to-red-700 rounded-full opacity-60 animate-lantern shadow-xl" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 bg-yellow-400 rounded-full mx-auto mt-3 opacity-90"></div>
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

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-spring-ivory to-spring-burnished-gold bg-clip-text text-transparent drop-shadow-2xl">
                马年吉祥
              </span>
              <br />
              <span className="bg-gradient-to-r from-spring-burnished-gold via-spring-gold to-spring-light-red bg-clip-text text-transparent drop-shadow-2xl">
                骏马奔腾
              </span>
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-spring-burnished-gold to-transparent mx-auto mb-8 rounded-full"></div>

            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
              新春马到成功，骏马奔腾四海
              <br />
              <span className="text-spring-ivory font-semibold">技术创新 · 马年新起点 · 共创辉煌未来</span>
            </p>
          </div>

          {/* 操作按钮 - 现代化设计 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => document.getElementById('greetings')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-spring-dark-red font-bold text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                🎊 开始互动拜年
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => document.getElementById('software')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-5 border-3 border-white/80 text-white font-bold text-lg rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-white/10 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                🚀 了解我们的能力
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
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
