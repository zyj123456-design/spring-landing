export default function Contact() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-spring-dark-red via-red-600 to-pink-600 overflow-hidden">
      {/* 背景装饰 - 春节烟花和灯笼 */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-12 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-16 right-12 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-red-400/10 to-gold-400/10 rounded-full blur-xl"></div>

        {/* 动态烟花 */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-yellow-300 rounded-full animate-firework opacity-60"></div>
        <div className="absolute top-32 left-32 w-2 h-2 bg-orange-300 rounded-full animate-firework opacity-70" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-20 left-20 w-2.5 h-2.5 bg-pink-300 rounded-full animate-firework opacity-50" style={{ animationDelay: '1.6s' }}></div>

        {/* 浮动灯笼 */}
        <div className="absolute top-24 right-8 w-8 h-12 bg-gradient-to-b from-red-400 to-red-600 rounded-full opacity-70 animate-lantern shadow-lg">
          <div className="w-6 h-6 bg-yellow-300 rounded-full mx-auto mt-1 opacity-90"></div>
        </div>
        <div className="absolute bottom-24 left-8 w-6 h-10 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full opacity-60 animate-lantern shadow-lg" style={{ animationDelay: '1.5s' }}>
          <div className="w-4 h-4 bg-yellow-200 rounded-full mx-auto mt-0.5 opacity-90"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-xl">
              <span className="text-4xl">📞</span>
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              联系我们
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            春节合作热线，新年新气象，共创美好未来
            <br />
            <span className="text-yellow-200 font-semibold">让我们一起开启智能化新纪元 ✨</span>
          </p>
        </div>

        {/* 主要内容区域 */}
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 联系信息面板 */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                  春节期间联系方式
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  技术咨询、合作洽谈、项目合作，我们随时欢迎您的联系
                  <br />
                  <span className="text-yellow-200 font-medium">专业团队 · 快速响应 · 高质量服务</span>
                </p>
              </div>

              {/* 主要联系电话 */}
              <div className="group relative backdrop-blur-sm bg-white/20 rounded-3xl p-8 border-2 border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105">
                {/* 装饰元素 */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

                <div className="flex items-center justify-center lg:justify-start space-x-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <span className="text-4xl">📞</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-white/70 text-sm font-medium mb-1">24小时热线</p>
                    <p className="text-4xl font-black text-white drop-shadow-lg tracking-wider">
                      19112703601
                    </p>
                    <p className="text-white/60 text-sm mt-2">
                      春节期间全天候在线
                    </p>
                  </div>
                </div>

                {/* 状态指示器 */}
                <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-2xl px-3 py-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-sm font-medium">在线服务</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-2xl px-3 py-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 text-sm font-medium">快速响应</span>
                  </div>
                </div>
              </div>

              {/* 其他联系方式 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative backdrop-blur-sm bg-white/15 rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h4 className="text-white font-bold mb-1">微信咨询</h4>
                    <p className="text-white/60 text-sm">扫码添加企业微信</p>
                  </div>
                </div>

                <div className="group relative backdrop-blur-sm bg-white/15 rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <h4 className="text-white font-bold mb-1">邮箱联系</h4>
                    <p className="text-white/60 text-sm">发送合作邮件</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 春节祝福面板 */}
            <div className="text-center space-y-8">
              {/* 主要装饰 */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                  <span className="text-6xl">🎊</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-orange-400/30 rounded-3xl blur-xl animate-pulse"></div>
              </div>

              {/* 新春祝福卡片 */}
              <div className="relative">
                <div className="backdrop-blur-sm bg-white/20 rounded-3xl p-8 border-2 border-white/30 shadow-xl">
                  <h4 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                    新春祝福
                  </h4>
                  <div className="bg-white/15 rounded-2xl p-6 border border-white/20">
                    <p className="text-white text-lg leading-relaxed font-medium drop-shadow-md">
                      "马年吉祥，骏马奔腾，马到成功，马年新起点，祝您新春快乐，万事如意！"
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-white/70 text-sm">—— 技术创新团队</p>
                      <p className="text-yellow-200 text-xs mt-1">2026 · 马年 · 春节</p>
                    </div>
                  </div>
                </div>

                {/* 装饰边框 */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl opacity-30 animate-pulse"></div>
              </div>

              {/* 装饰元素 */}
              <div className="flex justify-center items-center gap-4">
                <div className="flex gap-3 text-4xl">
                  <span className="animate-bounce text-yellow-300 drop-shadow-lg">🧧</span>
                  <span className="animate-pulse text-red-300 drop-shadow-lg" style={{ animationDelay: '0.3s' }}>🐉</span>
                  <span className="animate-bounce text-orange-300 drop-shadow-lg" style={{ animationDelay: '0.6s' }}>🎊</span>
                  <span className="animate-pulse text-pink-300 drop-shadow-lg" style={{ animationDelay: '0.9s' }}>🎆</span>
                  <span className="animate-bounce text-gold-300 drop-shadow-lg" style={{ animationDelay: '1.2s' }}>✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部信息面板 */}
        <div className="mt-16 backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            <div className="group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-xl">⚙️</span>
              </div>
              <h4 className="text-white font-bold mb-2">技术服务</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                全栈开发、AI集成、智能工厂改造
              </p>
            </div>

            <div className="group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-xl">🤝</span>
              </div>
              <h4 className="text-white font-bold mb-2">合作模式</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                项目合作、技术咨询、长期维护
              </p>
            </div>

            <div className="group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-xl">⭐</span>
              </div>
              <h4 className="text-white font-bold mb-2">服务承诺</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                专业团队、快速响应、高质量交付
              </p>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="pt-8 border-t border-white/20 text-center">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 mb-4">
              <span className="text-2xl animate-pulse">🐉</span>
              <span className="text-white font-bold">© 2026 技术创新团队</span>
              <span className="text-2xl animate-pulse">🎊</span>
            </div>
            <p className="text-white/60 text-sm">
              新春快乐 · 龙年大吉 · 技术创新 · 未来已来
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
