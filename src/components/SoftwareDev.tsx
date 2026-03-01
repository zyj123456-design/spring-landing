export default function SoftwareDev() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-cyan-50/20 overflow-hidden">
      {/* 春节视觉盛宴 - 烈焰骏马科技主题 */}
      <div className="absolute inset-0">
        {/* 第一层：宣纸质感背景 */}
        <div className="absolute inset-0 rice-paper-texture"></div>

        {/* 第二层：代码灯笼装饰 */}
        <div className="absolute top-16 left-8 animate-lantern">
          <div className="relative">
            <div className="w-12 h-16 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full shadow-lg border-2 border-gold-400">
              <div className="w-8 h-9 bg-yellow-300 rounded-full mx-auto mt-1 opacity-90 animate-pulse"></div>
              <div className="text-center text-blue-800 font-bold text-xs mt-1">码</div>
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-14 h-1.5 bg-blue-600 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-14 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-20 right-12 animate-lantern" style={{ animationDelay: '1.5s' }}>
          <div className="relative">
            <div className="w-10 h-14 bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-full shadow-lg border-2 border-gold-400">
              <div className="w-7 h-8 bg-yellow-200 rounded-full mx-auto mt-1 opacity-90 animate-pulse"></div>
              <div className="text-center text-indigo-800 font-bold text-xs mt-0.5">智</div>
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-indigo-600 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-indigo-600 rounded-full"></div>
          </div>
        </div>

        {/* 第三层：代码火花效果 */}
        <div className="absolute top-20 right-1/3">
          <div className="relative">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-firework opacity-70"></div>
            <div className="absolute inset-0 w-6 h-6 border-2 border-blue-300 rounded-full animate-ping opacity-50"></div>
            <div className="absolute inset-0 w-8 h-8 border border-indigo-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/3">
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-firework opacity-60" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute inset-0 w-5 h-5 border-2 border-cyan-300 rounded-full animate-ping opacity-40"></div>
            <div className="absolute inset-0 w-7 h-7 border border-blue-400 rounded-full animate-pulse opacity-25" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* 第四层：科技对联装饰 */}
        <div className="absolute top-1/4 left-4 transform -rotate-6 opacity-12">
          <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white px-2 py-4 rounded-md shadow-md border border-gold-400">
            <div className="text-xs font-bold writing-vertical">技</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">术</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">创</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">新</div>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-6 transform rotate-6 opacity-12">
          <div className="bg-gradient-to-b from-indigo-600 to-indigo-800 text-white px-2 py-4 rounded-md shadow-md border border-gold-400">
            <div className="text-xs font-bold writing-vertical">代</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">码</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">无</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">限</div>
          </div>
        </div>

        {/* 第五层：飘落的代码书和算法晶体 */}
        <div className="absolute top-28 left-20 animate-float opacity-25">
          <div className="relative">
            <div className="w-6 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-sm shadow-md border border-gold-400 flex items-center justify-center">
              <span className="text-gold-800 font-bold text-xs">📖</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 right-16 animate-float opacity-20" style={{ animationDelay: '2.5s' }}>
          <div className="relative">
            <div className="w-5 h-7 bg-gradient-to-b from-cyan-500 to-cyan-700 rounded-sm shadow-md border border-gold-400 flex items-center justify-center">
              <span className="text-gold-800 font-bold text-xs">⚡</span>
            </div>
          </div>
        </div>

        {/* 第六层：科技吉祥图案 */}
        <div className="absolute top-8 left-1/3 opacity-6">
          <svg width="40" height="40" viewBox="0 0 40 40" className="animate-pulse">
            <circle cx="20" cy="20" r="16" fill="none" stroke="#3B82F6" strokeWidth="2"/>
            <path d="M12,20 Q20,8 28,20 Q20,32 12,20" fill="#06B6D4" stroke="#3B82F6" strokeWidth="1"/>
            <circle cx="20" cy="16" r="2.5" fill="#3B82F6"/>
            <circle cx="20" cy="24" r="2.5" fill="#06B6D4"/>
            <text x="20" y="35" textAnchor="middle" fill="#F5C842" fontSize="6" fontWeight="bold">码</text>
          </svg>
        </div>

        {/* 第七层：动态代码流光 */}
        <div className="absolute top-1/5 left-1/5 w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-px h-18 bg-gradient-to-b from-transparent via-indigo-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-px h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-spring-red to-spring-gold rounded-3xl flex items-center justify-center shadow-xl">
              <span className="text-3xl">💻</span>
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-spring-dark-red via-spring-red to-spring-gold bg-clip-text text-transparent">
              软件开发能力
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-spring-red to-transparent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            全栈开发解决方案，AI集成与自动化，极简美学设计系统
            <br />
            <span className="text-spring-red font-semibold">从概念到部署，一站式技术服务</span>
          </p>
        </div>

        {/* 功能展示卡片 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Dashboard界面 */}
          <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* 装饰元素 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-spring-red to-spring-gold rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="text-center mb-8">
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <span className="text-4xl">🖥️</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">智能Dashboard</h3>
              <p className="text-gray-600 text-sm">实时数据可视化，AI驱动的智能洞察</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-inner border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-3 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full animate-pulse flex-1 mr-4"></div>
                  <div className="w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                <div className="h-3 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full animate-pulse w-3/4"></div>
                <div className="flex space-x-3">
                  <div className="h-8 w-8 bg-gradient-to-br from-green-400 to-green-500 rounded-xl animate-pulse shadow-lg"></div>
                  <div className="h-8 w-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl animate-pulse shadow-lg" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-8 w-8 bg-gradient-to-br from-red-400 to-red-500 rounded-xl animate-pulse shadow-lg" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 移动应用 */}
          <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* 装饰元素 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-spring-red to-spring-gold rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="text-center mb-8">
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <span className="text-4xl">📱</span>
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">移动应用</h3>
              <p className="text-gray-600 text-sm">原生体验，跨平台兼容，智能化交互</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-inner border border-gray-100">
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-green-200 to-green-300 rounded-full animate-pulse"></div>
                <div className="h-4 bg-gradient-to-r from-green-200 to-green-300 rounded-full animate-pulse w-4/5"></div>
                <div className="flex justify-center">
                  <div className="h-12 w-24 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl animate-pulse shadow-lg"></div>
                </div>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Web应用 */}
          <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* 装饰元素 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-spring-red to-spring-gold rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="text-center mb-8">
              <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <span className="text-4xl">🌐</span>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">现代化Web</h3>
              <p className="text-gray-600 text-sm">响应式设计，极致性能，优雅交互体验</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-inner border border-gray-100">
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <div className="h-3 w-3 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full animate-pulse shadow-sm"></div>
                  <div className="h-3 w-3 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full animate-pulse shadow-sm" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-3 w-3 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full animate-pulse shadow-sm" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <div className="h-3 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full animate-pulse"></div>
                <div className="h-3 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full animate-pulse w-2/3"></div>
                <div className="flex justify-end">
                  <div className="h-8 w-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl animate-pulse shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 技术标签展示 */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-gradient-to-r from-spring-red/10 via-orange-50/20 to-gold-50/10 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-xl border border-white/50">
            <div className="flex items-center gap-2 bg-white/80 rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-2xl">⚡</span>
              <span className="text-spring-dark-red font-bold">Next.js 15</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-2xl">🤖</span>
              <span className="text-spring-dark-red font-bold">AI集成</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-2xl">🎨</span>
              <span className="text-spring-dark-red font-bold">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-2xl">🚀</span>
              <span className="text-spring-dark-red font-bold">TypeScript</span>
            </div>
          </div>

          <p className="mt-6 text-gray-600 text-lg">
            <span className="text-spring-red font-semibold">� 技术驱动 · 创新无限</span>
          </p>
        </div>
      </div>
    </section>
  );
}
