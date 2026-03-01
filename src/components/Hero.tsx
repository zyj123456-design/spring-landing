export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-spring-dark-red via-spring-red to-spring-gold overflow-hidden">
      {/* 背景装饰 - 动态烟花效果 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-firework"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-firework" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-red-200 rounded-full animate-firework" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-orange-300 rounded-full animate-firework" style={{ animationDelay: '1.5s' }}></div>
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
        {/* 主要标题区域 - 现代化设计 */}
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-wider drop-shadow-2xl">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              新春快乐
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-8 rounded-full"></div>

          <p className="text-2xl md:text-4xl font-light text-white mb-6 drop-shadow-lg">
            技术创新 · <span className="font-bold text-yellow-300">龙年</span>新起点
          </p>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            探索我们的软件开发、智能工厂改造和数据主权理念
            <br />
            <span className="text-yellow-200 font-medium">让我们一起开启智能化新纪元</span>
          </p>

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
