export default function SoftwareDev() {
  return (
    <section id="software" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-spring-dark-red mb-4">
            软件开发能力
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            全栈开发解决方案，AI集成与自动化，极简美学设计系统
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* UI界面展示 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dashboard界面</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-inner">
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="flex space-x-2">
                  <div className="h-8 w-8 bg-blue-200 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-green-200 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-yellow-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 移动应用 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg border-2 border-green-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">移动应用</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-inner">
              <div className="space-y-3">
                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                <div className="flex justify-center">
                  <div className="h-10 w-20 bg-green-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Web应用 */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">响应式Web</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-inner">
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <div className="h-4 w-4 bg-purple-200 rounded animate-pulse"></div>
                  <div className="h-4 w-4 bg-purple-200 rounded animate-pulse"></div>
                  <div className="h-4 w-4 bg-purple-200 rounded animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-spring-red/10 rounded-full px-6 py-3">
            <span className="text-spring-dark-red font-semibold">✨ 全栈开发</span>
            <span className="text-spring-dark-red font-semibold">🤖 AI集成</span>
            <span className="text-spring-dark-red font-semibold">🎨 极简设计</span>
          </div>
        </div>
      </div>
    </section>
  );
}
