export default function FactoryIntelligence() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-spring-dark-red mb-4">
            工厂智能化改造
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            实时数据监控，智能决策系统，生产效率优化
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 数据监控 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">实时监控</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">生产效率</span>
                <span className="text-lg font-bold text-green-600">94.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full animate-pulse" style={{ width: '94%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">设备状态</span>
                <span className="text-lg font-bold text-blue-600">正常</span>
              </div>
            </div>
          </div>

          {/* 智能决策 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">智能决策</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-600">⚡</span>
                  <span className="font-semibold text-green-800">预测性维护</span>
                </div>
                <p className="text-sm text-green-700">
                  检测到设备异常，建议提前维护
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-blue-600">📈</span>
                  <span className="font-semibold text-blue-800">产量优化</span>
                </div>
                <p className="text-sm text-blue-700">
                  建议调整参数可提升15%效率
                </p>
              </div>
            </div>
          </div>

          {/* 生产线可视化 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">生产线监控</h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-2xl mb-1">🔄</div>
                  <div className="text-xs text-yellow-800">加工中</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl mb-1">✅</div>
                  <div className="text-xs text-green-800">完成</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl mb-1">🚚</div>
                  <div className="text-xs text-blue-800">运输中</div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-2xl mb-1">🔧</div>
                  <div className="text-xs text-red-800">维护中</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-spring-gold/10 rounded-full px-6 py-3">
            <span className="text-spring-dark-red font-semibold">📡 实时监控</span>
            <span className="text-spring-dark-red font-semibold">🎯 智能决策</span>
            <span className="text-spring-dark-red font-semibold">⚡ 效率优化</span>
          </div>
        </div>
      </div>
    </section>
  );
}
