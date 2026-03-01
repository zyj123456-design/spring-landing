export default function Philosophy() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-violet-50 via-purple-50/30 to-pink-50/20 overflow-hidden">
      {/* 春节视觉盛宴 - 哲学主题装饰 */}
      <div className="absolute inset-0">
        {/* 第一层：祥云智慧纹理 */}
        <div className="absolute top-16 left-12 w-36 h-24 bg-gradient-to-r from-purple-200/15 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-32 h-20 bg-gradient-to-l from-pink-200/10 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-18 bg-gradient-to-br from-violet-300/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* 第二层：智慧灯笼装饰 */}
        <div className="absolute top-20 right-8 animate-lantern">
          <div className="relative">
            <div className="w-12 h-16 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full shadow-lg border-2 border-gold-400">
              <div className="w-8 h-9 bg-yellow-300 rounded-full mx-auto mt-1 opacity-90 animate-pulse"></div>
              <div className="text-center text-purple-800 font-bold text-xs mt-1">智</div>
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-14 h-1.5 bg-purple-600 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-14 h-1.5 bg-purple-600 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-16 left-8 animate-lantern" style={{ animationDelay: '1.5s' }}>
          <div className="relative">
            <div className="w-10 h-14 bg-gradient-to-b from-pink-500 to-pink-700 rounded-full shadow-lg border-2 border-gold-400">
              <div className="w-7 h-8 bg-yellow-200 rounded-full mx-auto mt-1 opacity-90 animate-pulse"></div>
              <div className="text-center text-pink-800 font-bold text-xs mt-0.5">慧</div>
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-pink-600 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-pink-600 rounded-full"></div>
          </div>
        </div>

        {/* 第三层：智慧之光效果 */}
        <div className="absolute top-12 left-1/3">
          <div className="relative">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-firework opacity-70"></div>
            <div className="absolute inset-0 w-6 h-6 border-2 border-purple-300 rounded-full animate-ping opacity-50"></div>
            <div className="absolute inset-0 w-8 h-8 border border-pink-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        <div className="absolute bottom-12 right-1/3">
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-pink-400 rounded-full animate-firework opacity-60" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute inset-0 w-5 h-5 border-2 border-pink-300 rounded-full animate-ping opacity-40"></div>
            <div className="absolute inset-0 w-7 h-7 border border-purple-400 rounded-full animate-pulse opacity-25" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* 第四层：哲学对联装饰 */}
        <div className="absolute top-1/3 right-4 transform rotate-3 opacity-12">
          <div className="bg-gradient-to-b from-purple-600 to-purple-800 text-white px-2 py-4 rounded-md shadow-md border border-gold-400">
            <div className="text-xs font-bold writing-vertical">数</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">据</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">主</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">权</div>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-4 transform -rotate-3 opacity-12">
          <div className="bg-gradient-to-b from-pink-600 to-pink-800 text-white px-2 py-4 rounded-md shadow-md border border-gold-400">
            <div className="text-xs font-bold writing-vertical">智</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">慧</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">未</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">来</div>
          </div>
        </div>

        {/* 第五层：飘落的智慧之书和数据晶体 */}
        <div className="absolute top-24 left-16 animate-float opacity-25">
          <div className="relative">
            <div className="w-6 h-8 bg-gradient-to-b from-purple-500 to-purple-700 rounded-sm shadow-md border border-gold-400 flex items-center justify-center">
              <span className="text-gold-800 font-bold text-xs">📚</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 right-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <div className="relative">
            <div className="w-5 h-7 bg-gradient-to-b from-pink-500 to-pink-700 rounded-sm shadow-md border border-gold-400 flex items-center justify-center">
              <span className="text-gold-800 font-bold text-xs">💎</span>
            </div>
          </div>
        </div>

        {/* 第六层：哲学吉祥图案 */}
        <div className="absolute top-8 right-1/3 opacity-6">
          <svg width="45" height="45" viewBox="0 0 45 45" className="animate-pulse">
            <circle cx="22.5" cy="22.5" r="18" fill="none" stroke="#8B5CF6" strokeWidth="2"/>
            <path d="M13.5,22.5 Q22.5,9 31.5,22.5 Q22.5,36 13.5,22.5" fill="#EC4899" stroke="#8B5CF6" strokeWidth="1"/>
            <circle cx="22.5" cy="18" r="2.5" fill="#8B5CF6"/>
            <circle cx="22.5" cy="27" r="2.5" fill="#EC4899"/>
            <text x="22.5" y="40" textAnchor="middle" fill="#F59E0B" fontSize="7" fontWeight="bold">哲</text>
          </svg>
        </div>

        {/* 第七层：动态数据流光 */}
        <div className="absolute top-1/4 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-px h-16 bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-px h-18 bg-gradient-to-b from-transparent via-violet-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-xl">
              <span className="text-3xl">🔑</span>
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 bg-clip-text text-transparent">
              产品理念：数据主权
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            在AI时代，数据不仅是信息，更是每个人的数字资产
            <br />
            <span className="text-purple-600 font-semibold">我们致力于构建尊重用户数据主权的生态</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* 理念说明卡片 */}
          <div className="space-y-8">
            {/* 数据隐私保护 */}
            <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
              {/* 装饰元素 */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-4 left-4 w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <span className="text-3xl">🔒</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    保护每个人的个人数据价值
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    在AI时代，数据不仅是信息，更是每个人的数字资产。我们致力于构建一个尊重用户数据主权的生态，让每个人都能真正拥有和控制自己的数据。
                  </p>
                  <div className="inline-flex items-center gap-2 bg-red-50 border-2 border-red-200 rounded-2xl px-4 py-2">
                    <span className="text-red-600 font-bold">🔒 数据隐私保护</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 用户自主控制 */}
            <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
              {/* 装饰元素 */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <span className="text-3xl">🎯</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
                    让用户在AI时代重新拿回主动权
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    AI技术正在改变世界，但我们相信，用户应该始终掌握主动权。通过透明的AI决策过程和用户友好的控制界面，让每个人都能从容应对AI时代的机遇与挑战。
                  </p>
                  <div className="inline-flex items-center gap-2 bg-yellow-50 border-2 border-yellow-200 rounded-2xl px-4 py-2">
                    <span className="text-yellow-600 font-bold">🎯 用户自主控制</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 数据主权可视化 */}
          <div className="relative">
            <div className="backdrop-blur-sm bg-white/80 rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="text-center mb-8">
                <div className="relative w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-5xl">🔑</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  数据主权之钥
                </h3>
                <p className="text-gray-600 text-sm">数据在用户控制下安全流动</p>
              </div>

              {/* 增强版数据流动动画 */}
              <div className="relative h-64 flex items-center justify-center">
                {/* 中心用户节点 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                      <span className="text-white text-2xl">👤</span>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl blur-lg animate-pulse"></div>
                  </div>
                </div>

                {/* 数据节点 */}
                <div className="absolute top-4 left-8">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                      <span className="text-white text-lg">📊</span>
                    </div>
                    <div className="absolute -inset-1 bg-blue-400/20 rounded-2xl blur-md"></div>
                  </div>
                </div>

                <div className="absolute top-4 right-8">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                      <span className="text-white text-lg">🔐</span>
                    </div>
                    <div className="absolute -inset-1 bg-green-400/20 rounded-2xl blur-md"></div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-12">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                      <span className="text-white text-lg">🎯</span>
                    </div>
                    <div className="absolute -inset-1 bg-indigo-400/20 rounded-2xl blur-md"></div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-12">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1.5s' }}>
                      <span className="text-white text-lg">⚡</span>
                    </div>
                    <div className="absolute -inset-1 bg-orange-400/20 rounded-2xl blur-md"></div>
                  </div>
                </div>

                {/* 增强版连接线 */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                  <defs>
                    <marker id="data-arrow" markerWidth="12" markerHeight="8" refX="2" refY="4" orient="auto">
                      <polygon points="2 2, 12 4, 2 6" fill="#9333ea" opacity="0.8" />
                    </marker>
                    <linearGradient id="data-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" stopOpacity="0" />
                      <stop offset="50%" stopColor="#9333ea" stopOpacity="1" />
                      <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* 流动数据线条 */}
                  <path d="M150,150 L60,60" stroke="url(#data-flow)" strokeWidth="3" fill="none" markerEnd="url(#data-arrow)" className="animate-pulse">
                    <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M150,150 L240,60" stroke="url(#data-flow)" strokeWidth="3" fill="none" markerEnd="url(#data-arrow)" className="animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M150,150 L90,240" stroke="url(#data-flow)" strokeWidth="3" fill="none" markerEnd="url(#data-arrow)" className="animate-pulse" style={{ animationDelay: '1s' }}>
                    <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M150,150 L210,240" stroke="url(#data-flow)" strokeWidth="3" fill="none" markerEnd="url(#data-arrow)" className="animate-pulse" style={{ animationDelay: '1.5s' }}>
                    <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">数据在用户控制下安全流动，每一个数据点都承载着信任</p>
                <div className="inline-flex items-center gap-2 bg-purple-50 border-2 border-purple-200 rounded-2xl px-4 py-2">
                  <span className="text-purple-600 font-bold">✨ 数据主权 · 用户至上</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 核心价值观网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-bold text-red-600 mb-2">隐私保护</h4>
              <p className="text-sm text-gray-600">您的个人数据受到严格保护</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-bold text-yellow-600 mb-2">自主控制</h4>
              <p className="text-sm text-gray-600">您决定数据的去向与用途</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">🌟</span>
              </div>
              <h4 className="font-bold text-green-600 mb-2">价值实现</h4>
              <p className="text-sm text-gray-600">数据创造的价值归属于您</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-bold text-blue-600 mb-2">创新赋能</h4>
              <p className="text-sm text-gray-600">AI技术为您创造更多可能</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* 底部标语 */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 via-pink-50/20 to-violet-50/10 backdrop-blur-sm rounded-3xl px-8 py-4 shadow-xl border border-white/50">
            <span className="text-3xl animate-pulse">💎</span>
            <span className="text-purple-600 font-bold text-lg">数据主权 · 未来已来</span>
            <span className="text-3xl animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
