export default function Hero() {
  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-r from-spring-red via-spring-light-red to-spring-gold overflow-hidden">
      {/* 装饰元素 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-float"></div>
        <div className="absolute top-20 right-16 w-24 h-24 bg-white rounded-full animate-lantern opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border-4 border-white transform rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          新春快乐
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-md">
          技术创新 · 龙年新起点
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-sm">
          探索我们的软件开发、智能工厂改造和数据主权理念
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('greetings')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-spring-dark-red font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            开始互动拜年
          </button>
          <button
            onClick={() => document.getElementById('software')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-spring-dark-red transition-all duration-200"
          >
            了解我们的能力
          </button>
        </div>
      </div>

      {/* 春节装饰 */}
      <div className="absolute bottom-4 left-4 text-white/30 text-6xl animate-bounce">🎊</div>
      <div className="absolute bottom-4 right-4 text-white/30 text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🧧</div>
      <div className="absolute top-4 right-4 text-white/30 text-6xl animate-pulse">🐉</div>
    </section>
  );
}
