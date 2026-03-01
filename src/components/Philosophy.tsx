export default function Philosophy() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-spring-dark-red mb-8">
          产品理念：数据主权
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 理念说明 */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-spring-red/10 to-spring-gold/10 p-8 rounded-2xl border-2 border-spring-red/20">
              <h3 className="text-2xl font-bold text-spring-dark-red mb-4">
                保护每个人的个人数据价值
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                在AI时代，数据不仅是信息，更是每个人的数字资产。我们致力于构建一个尊重用户数据主权的生态，让每个人都能真正拥有和控制自己的数据。
              </p>
              <div className="flex items-center space-x-3 text-spring-dark-red">
                <span className="text-2xl">🔒</span>
                <span className="font-semibold">数据隐私保护</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-spring-gold/10 to-orange-100 p-8 rounded-2xl border-2 border-spring-gold/20">
              <h3 className="text-2xl font-bold text-spring-dark-red mb-4">
                让用户在AI时代重新拿回主动权
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                AI技术正在改变世界，但我们相信，用户应该始终掌握主动权。通过透明的AI决策过程和用户友好的控制界面，让每个人都能从容应对AI时代的机遇与挑战。
              </p>
              <div className="flex items-center space-x-3 text-spring-dark-red">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold">用户自主控制</span>
              </div>
            </div>
          </div>

          {/* 可视化元素 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-spring-red to-spring-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔑</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">数据主权之钥</h3>
              </div>

              {/* 数据流动动画 */}
              <div className="relative h-48 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-spring-red rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xl">👤</span>
                  </div>
                </div>

                <div className="absolute top-4 left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white text-lg">📊</span>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <span className="text-white text-lg">🔐</span>
                </div>

                <div className="absolute bottom-4 left-8 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                  <span className="text-white text-lg">🎯</span>
                </div>

                <div className="absolute bottom-4 right-8 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <span className="text-white text-lg">⚡</span>
                </div>

                {/* 连接线 */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
                    </marker>
                  </defs>
                  <path d="M100,100 L40,40" stroke="#DC2626" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" className="animate-pulse" />
                  <path d="M100,100 L160,40" stroke="#DC2626" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <path d="M100,100 L60,160" stroke="#DC2626" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <path d="M100,100 L140,160" stroke="#DC2626" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                </svg>
              </div>

              <p className="text-center text-sm text-gray-600 mt-4">
                数据在用户控制下安全流动
              </p>
            </div>
          </div>
        </div>

        {/* 核心价值观 */}
        <div className="mt-16">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-spring-red/5 rounded-xl border border-spring-red/20">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-bold text-spring-dark-red mb-2">隐私保护</h4>
              <p className="text-sm text-gray-600">您的个人数据受到严格保护</p>
            </div>

            <div className="text-center p-6 bg-spring-gold/5 rounded-xl border border-spring-gold/20">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-spring-dark-red mb-2">自主控制</h4>
              <p className="text-sm text-gray-600">您决定数据的去向与用途</p>
            </div>

            <div className="text-center p-6 bg-green-100 rounded-xl border border-green-200">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="font-bold text-green-800 mb-2">价值实现</h4>
              <p className="text-sm text-gray-600">数据创造的价值归属于您</p>
            </div>

            <div className="text-center p-6 bg-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-blue-800 mb-2">创新赋能</h4>
              <p className="text-sm text-gray-600">AI技术为您创造更多可能</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
