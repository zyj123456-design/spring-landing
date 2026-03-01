export default function FactoryIntelligence() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-slate-50/30 to-zinc-50/20 overflow-hidden">
      {/* 春节视觉盛宴 - 烈焰骏马工业主题 */}
      <div className="absolute inset-0">
        {/* 第一层：宣纸质感背景 */}
        <div className="absolute inset-0 rice-paper-texture"></div>

        {/* 第二层：工业灯笼装饰 */}
        <div className="absolute top-16 right-8 animate-lantern">
          <div className="relative">
            <div className="w-14 h-18 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full shadow-lg border-2 border-gold-400">
              <div className="w-9 h-10 bg-yellow-300 rounded-full mx-auto mt-1 opacity-90 animate-pulse"></div>
              <div className="text-center text-gray-800 font-bold text-xs mt-1">智</div>
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-600 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-20 left-12 animate-lantern" style={{ animationDelay: '1.5s' }}>
          <div className="relative">
            <div className="w-12 h-16 bg-gradient-to-b from-slate-500 to-slate-700 rounded-full shadow-lg border-2 border-gold-400">
              <div className="w-8 h-9 bg-yellow-200 rounded-full mx-auto mt-1 opacity-90 animate-pulse"></div>
              <div className="text-center text-slate-800 font-bold text-xs mt-1">造</div>
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-14 h-1.5 bg-slate-600 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-14 h-1.5 bg-slate-600 rounded-full"></div>
          </div>
        </div>

        {/* 第三层：工业火花效果 */}
        <div className="absolute top-20 left-1/3">
          <div className="relative">
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-firework opacity-70"></div>
            <div className="absolute inset-0 w-6 h-6 border-2 border-gray-300 rounded-full animate-ping opacity-50"></div>
            <div className="absolute inset-0 w-8 h-8 border border-slate-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        <div className="absolute bottom-16 right-1/3">
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-zinc-400 rounded-full animate-firework opacity-60" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute inset-0 w-5 h-5 border-2 border-zinc-300 rounded-full animate-ping opacity-40"></div>
            <div className="absolute inset-0 w-7 h-7 border border-gray-400 rounded-full animate-pulse opacity-25" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* 第四层：工业对联装饰 */}
        <div className="absolute top-1/4 right-4 transform rotate-3 opacity-12">
          <div className="bg-gradient-to-b from-gray-600 to-gray-800 text-white px-2 py-4 rounded-md shadow-md border border-gold-400">
            <div className="text-xs font-bold writing-vertical">工</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">业</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">智</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">能</div>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-6 transform -rotate-3 opacity-12">
          <div className="bg-gradient-to-b from-slate-600 to-slate-800 text-white px-2 py-4 rounded-md shadow-md border border-gold-400">
            <div className="text-xs font-bold writing-vertical">自</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">动</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">化</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">未</div>
            <div className="text-xs font-bold writing-vertical mt-0.5">来</div>
          </div>
        </div>

        {/* 第五层：飘落的齿轮和电路板 */}
        <div className="absolute top-24 right-20 animate-float opacity-25">
          <div className="relative">
            <div className="w-7 h-7 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full shadow-md border border-gold-400 flex items-center justify-center">
              <span className="text-gold-800 font-bold text-sm">⚙️</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-28 left-16 animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <div className="relative">
            <div className="w-6 h-8 bg-gradient-to-b from-slate-500 to-slate-700 rounded-sm shadow-md border border-gold-400 flex items-center justify-center">
              <span className="text-gold-800 font-bold text-xs">🔌</span>
            </div>
          </div>
        </div>

        {/* 第六层：工业吉祥图案 */}
        <div className="absolute top-8 right-1/3 opacity-6">
          <svg width="45" height="45" viewBox="0 0 45 45" className="animate-pulse">
            <circle cx="22.5" cy="22.5" r="18" fill="none" stroke="#6B7280" strokeWidth="2"/>
            <path d="M13.5,22.5 Q22.5,9 31.5,22.5 Q22.5,36 13.5,22.5" fill="#64748B" stroke="#6B7280" strokeWidth="1"/>
            <circle cx="22.5" cy="18" r="2.5" fill="#6B7280"/>
            <circle cx="22.5" cy="27" r="2.5" fill="#64748B"/>
            <text x="22.5" y="40" textAnchor="middle" fill="#F5C842" fontSize="7" fontWeight="bold">工</text>
          </svg>
        </div>

        {/* 第七层：动态工业流光 */}
        <div className="absolute top-1/6 left-1/6 w-px h-14 bg-gradient-to-b from-transparent via-gray-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-1/5 w-px h-16 bg-gradient-to-b from-transparent via-slate-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/5 left-2/3 w-px h-18 bg-gradient-to-b from-transparent via-zinc-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-xl">
              <span className="text-3xl">🏭</span>
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              工厂智能化改造
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            实时数据监控，AI驱动决策，生产效率全面提升
            <br />
            <span className="text-blue-600 font-semibold">智慧工厂 · 未来已来</span>
          </p>
        </div>

        {/* 功能展示卡片 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* 实时监控面板 */}
          <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* 装饰元素 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="text-center mb-8">
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <span className="text-4xl">📊</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">实时监控中心</h3>
              <p className="text-gray-600 text-sm">全厂设备状态一目了然</p>
            </div>

            <div className="space-y-6">
              {/* 生产效率指标 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-4 border border-blue-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-gray-700">生产效率</span>
                  <span className="text-2xl font-black text-green-600 animate-pulse">94.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full animate-pulse transition-all duration-1000" style={{ width: '94%' }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">目标: 95%</span>
                  <span className="text-xs text-green-600 font-medium">↑ +2.1%</span>
                </div>
              </div>

              {/* 设备状态 */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-4 border border-green-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700">设备状态</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-lg font-bold text-green-600">正常</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="text-center p-2 bg-green-100 rounded-lg">
                    <div className="text-lg">⚙️</div>
                    <div className="text-xs text-green-700">机床A</div>
                  </div>
                  <div className="text-center p-2 bg-green-100 rounded-lg">
                    <div className="text-lg">🔧</div>
                    <div className="text-xs text-green-700">机床B</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI智能决策 */}
          <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* 装饰元素 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="text-center mb-8">
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <span className="text-4xl">🧠</span>
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">AI智能决策</h3>
              <p className="text-gray-600 text-sm">预测性维护与优化建议</p>
            </div>

            <div className="space-y-4">
              {/* 预测性维护 */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-5 animate-fade-in">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-800">预测性维护提醒</h4>
                    <p className="text-xs text-yellow-600">AI检测到潜在问题</p>
                  </div>
                </div>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  机床A轴承温度异常上升，建议在24小时内进行维护，可避免生产中断。
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full">紧急度: 中</span>
                  <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">置信度: 92%</span>
                </div>
              </div>

              {/* 产量优化 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-lg">📈</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800">产量优化建议</h4>
                    <p className="text-xs text-blue-600">基于大数据分析</p>
                  </div>
                </div>
                <p className="text-sm text-blue-700 leading-relaxed">
                  调整生产线参数可提升15%效率，预计每日增产120件产品。
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">收益: 高</span>
                  <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">实施周期: 2天</span>
                </div>
              </div>
            </div>
          </div>

          {/* 生产线可视化 */}
          <div className="group relative backdrop-blur-sm bg-white/80 rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* 装饰元素 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="text-center mb-8">
              <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <span className="text-4xl">🏭</span>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">生产线监控</h3>
              <p className="text-gray-600 text-sm">实时状态可视化展示</p>
            </div>

            <div className="space-y-4">
              {/* 生产线状态网格 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="text-3xl mb-2 animate-spin" style={{ animationDuration: '3s' }}>🔄</div>
                  <div className="text-sm font-bold text-yellow-800">加工中</div>
                  <div className="text-xs text-yellow-600 mt-1">机床A-01</div>
                </div>

                <div className="relative bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-3xl mb-2">✅</div>
                  <div className="text-sm font-bold text-green-800">已完成</div>
                  <div className="text-xs text-green-600 mt-1">质量检测</div>
                </div>

                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="text-3xl mb-2 animate-bounce">🚚</div>
                  <div className="text-sm font-bold text-blue-800">运输中</div>
                  <div className="text-xs text-blue-600 mt-1">AGV小车</div>
                </div>

                <div className="relative bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="text-3xl mb-2">🔧</div>
                  <div className="text-sm font-bold text-red-800">维护中</div>
                  <div className="text-xs text-red-600 mt-1">定期保养</div>
                </div>
              </div>

              {/* 生产进度条 */}
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-4 border border-indigo-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">今日生产进度</span>
                  <span className="text-lg font-bold text-indigo-600">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-2 rounded-full animate-pulse" style={{ width: '78%' }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">目标: 850件</span>
                  <span className="text-xs text-indigo-600 font-medium">已完成: 663件</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 技术特性标签 */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-gradient-to-r from-blue-500/10 via-indigo-50/20 to-purple-50/10 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-xl border border-white/50">
            <div className="flex items-center gap-2 bg-white/80 rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-2xl">📡</span>
              <span className="text-blue-600 font-bold">IoT联网</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-2xl">🤖</span>
              <span className="text-blue-600 font-bold">AI决策</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-2xl">⚡</span>
              <span className="text-blue-600 font-bold">实时监控</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-2xl">📊</span>
              <span className="text-blue-600 font-bold">大数据分析</span>
            </div>
          </div>

          <p className="mt-6 text-gray-600 text-lg">
            <span className="text-blue-600 font-semibold">🚀 智能制造 · 引领未来</span>
          </p>
        </div>
      </div>
    </section>
  );
}
