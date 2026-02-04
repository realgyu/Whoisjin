// FILE: app/human/page.tsx

export default function HumanPage() {
  const facts = [
    "ENFJ · 사람 만나는 거 좋아함",
    "재즈 / 인디 음악 플레이리스트 수집가",
    "고수, 민트초코 호(好)",
    "새로운 툴/자동화/AI 만지작거리는 걸 즐김",
    "'더 효율적으로 할 방법 없나?'가 기본 사고방식",
  ];

  const hobbies = [
    { emoji: "⚾", label: "야구 직관", color: "from-red-500 to-orange-500" },
    { emoji: "🎧", label: "재즈·인디 음악", color: "from-purple-500 to-pink-500" },
    { emoji: "✈️", label: "여행 & 산책", color: "from-blue-500 to-cyan-500" },
    { emoji: "📊", label: "데이터 덕질", color: "from-green-500 to-emerald-500" },
    { emoji: "🤖", label: "자동화 만들기", color: "from-yellow-500 to-orange-500" },
  ];

  const principles = [
    {
      title: "사람 먼저",
      desc: "결국 서비스는 사람이 쓰는 것. 고객/동료/파트너 입장에서 먼저 생각합니다.",
      emoji: "👥",
      color: "blue",
    },
    {
      title: "빠른 실행 → 빠른 학습",
      desc: "완벽한 계획보다 빠른 실험과 검증을 선호합니다.",
      emoji: "⚡",
      color: "purple",
    },
    {
      title: "작은 자동화의 힘",
      desc: "반복 업무는 반드시 줄이고, 시간을 '생각'에 쓰고 싶습니다.",
      emoji: "🔧",
      color: "green",
    },
  ];

  const bgColors: Record<string, string> = {
    blue: "bg-blue-50 border-blue-200",
    purple: "bg-purple-50 border-purple-200",
    green: "bg-green-50 border-green-200",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-content mx-auto px-6 py-20 space-y-20">
        {/* Hero */}
        <section className="space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4">
            Human, not just PM
          </div>

          <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
            인간 황진규 👋
          </h1>

          <p className="text-2xl text-gray-700 leading-relaxed max-w-2xl">
            일할 때는 꽤 진지하지만,
            <br />
            일 밖에서는 그냥 <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">호기심 많은 사람</span>입니다.
          </p>

          <div className="flex gap-3 pt-4">
            <a
              href="/work"
              className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Work 페이지로
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              연락하기
            </a>
          </div>
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* 한줄 소개 카드 */}
        <section>
          <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-gray-200 rounded-3xl p-12 overflow-hidden group">
            {/* Decorative circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative">
              <div className="text-5xl mb-6">💡</div>
              <p className="text-2xl text-gray-800 leading-relaxed font-medium">
                새로운 걸 배우는 걸 좋아하고,
                <br />
                귀찮은 건 자동화하고,
                <br />
                사람들과 같이 성장하는 순간에서 가장 큰 동기부여를 받습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* Quick facts */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">✨</span>
            <h2 className="text-2xl font-bold text-gray-900">
              Quick facts
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {facts.map((fact, idx) => (
              <span
                key={fact}
                className="px-5 py-3 bg-white border-2 border-gray-200 text-gray-800 rounded-full text-sm font-semibold hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {fact}
              </span>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* Hobbies */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🎨</span>
            <h2 className="text-2xl font-bold text-gray-900">
              좋아하는 것들
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {hobbies.map((hobby, idx) => (
              <div
                key={hobby.label}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {hobby.emoji}
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    {hobby.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* 가치관 */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">💪</span>
            <h2 className="text-2xl font-bold text-gray-900">
              제가 일하는 방식
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p, idx) => (
              <div
                key={p.title}
                className={`group ${bgColors[p.color]} border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {p.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* CTA - Work 페이지로 */}
        <section>
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="relative">
              <div className="text-5xl mb-6">💼</div>
              <h2 className="text-4xl font-bold text-white mb-4">
                일하는 황진규가 궁금하신가요?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                데이터로 운영을 만들고, 프로세스를 개선하는 이야기를 확인해보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/work"
                  className="group inline-block px-10 py-5 bg-white text-gray-900 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Work 페이지 보기
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="inline-block px-10 py-5 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  이메일로 연락하기
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Links */}
        <section>
          <div className="text-center text-gray-500 text-sm space-y-2">
            <p>
              더 자세한 이력이나 프로젝트가 궁금하시다면
            </p>
            <div className="flex justify-center gap-6">
              <a href="/work" className="text-blue-600 hover:underline font-medium">
                Work 페이지 →
              </a>
              <a href="mailto:contact@example.com" className="text-blue-600 hover:underline font-medium">
                이메일 보내기 →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}