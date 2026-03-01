export default function Contact() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-spring-red to-spring-dark-red text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          联系我们
        </h2>
        <p className="text-xl mb-8 opacity-90">
          春节合作热线，新年新气象，共创美好未来
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* 联系信息 */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">春节期间联系方式</h3>
                <p className="text-white/80 mb-6">
                  技术咨询、合作洽谈、项目合作，我们随时欢迎您的联系
                </p>
              </div>

              {/* 电话号码 */}
              <div className="bg-white/20 rounded-xl p-6 border border-white/30">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">联系电话</p>
                    <p className="text-2xl font-bold">19112703601</p>
                  </div>
                </div>
                <p className="text-sm opacity-75 mt-4 text-center md:text-left">
                  春节期间24小时在线，随时为您提供专业服务
                </p>
              </div>

              {/* 其他联系方式 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-xl p-4 border border-white/30 text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="text-sm font-medium">微信咨询</p>
                  <p className="text-xs opacity-75">扫码添加</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4 border border-white/30 text-center">
                  <div className="text-2xl mb-2">✉️</div>
                  <p className="text-sm font-medium">邮箱联系</p>
                  <p className="text-xs opacity-75">发送邮件</p>
                </div>
              </div>
            </div>

            {/* 春节祝福 */}
            <div className="text-center space-y-6">
              <div className="text-6xl animate-bounce">🎊</div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold">新春祝福</h4>
                <div className="bg-white/20 rounded-xl p-6 border border-white/30">
                  <p className="text-lg leading-relaxed">
                    "龙年大吉，技术创新，合作共赢，祝您新春快乐，万事如意！"
                  </p>
                  <p className="text-sm opacity-75 mt-4">—— 技术团队</p>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="flex justify-center space-x-4 text-3xl">
                <span className="animate-pulse">🧧</span>
                <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>🐉</span>
                <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>🎊</span>
                <span className="animate-pulse" style={{ animationDelay: '0.9s' }}>🎆</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-bold mb-2">技术服务</h4>
              <p className="text-sm opacity-75">
                全栈开发、AI集成、智能工厂改造
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">合作模式</h4>
              <p className="text-sm opacity-75">
                项目合作、技术咨询、长期维护
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">服务承诺</h4>
              <p className="text-sm opacity-75">
                专业团队、快速响应、高质量交付
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm opacity-60">
              © 2026 技术创新团队 · 新春快乐 · 龙年大吉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
