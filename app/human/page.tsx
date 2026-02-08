// FILE: app/human/page.tsx

export default function HumanPage() {
  const facts = [
    "ENFJ · 사람 만나면 에너지 충전",
    "재즈·인디 음악 좋아함 (플레이리스트 수집)",
    "고수·민트초코 호(好)",
    "삼성라이온즈 팬",
    "자동화/툴 좋아함 (\"더 효율적으로\"가 기본값)",
    "요즘은 요리 자주 해먹음",
    "국내여행 좋아함 (친구 동네 탐험 포함)",
  ];

  const hobbies = [
    {
      label: "야구 직관",
      detail: "응원하는 팀(삼성라이온즈) 경기 보러 갑니다",
      icon: "⚾",
    },
    {
      label: "재즈·인디 음악",
      detail: "플레이리스트를 만들고 모읍니다",
      icon: "🎧",
    },
    {
      label: "여행 & 산책",
      detail: "국내 여행과 산책으로 새로운 동네를 탐험합니다",
      icon: "✈️",
    },
    {
      label: "데이터 덕질",
      detail: "패턴을 관찰하고 기록하는 걸 좋아합니다",
      icon: "📊",
    },
    {
      label: "자동화 만들기",
      detail: "반복 작업을 줄이는 작은 도구를 만듭니다",
      icon: "🔧",
    },
  ];

  const principles = [
    {
      title: "사람 먼저",
      desc: "고객·동료·파트너 관점에서 문제를 먼저 정의합니다.",
      highlight: "사람",
    },
    {
      title: "빠른 실행",
      desc: "작게 실험하고 빠르게 검증하는 방식을 선호합니다.",
      highlight: "실행",
    },
    {
      title: "자동화의 힘",
      desc: "반복 업무를 줄여 중요한 의사결정에 시간을 씁니다.",
      highlight: "자동화",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="relative">
          {/* Small intro card */}
          <div className="absolute -top-4 right-0 w-80 bg-white border-2 border-gray-900 p-6 z-10">
            <p className="text-sm text-gray-700 leading-relaxed">
              프로덕트 매니저 · 데이터 기반 실행 · 자동화로 운영을 가볍게 만듭니다.
              <br />
              일 밖에서는 야구 보고, 음악 듣고, 동네를 걷는 사람입니다.
            </p>
          </div>

          {/* Main Typography */}
          <div className="pt-16">
            <h1 className="text-8xl font-black text-gray-900 leading-tight mb-2">
              황진규의
            </h1>
            <h1 className="text-8xl font-black text-gray-900 leading-tight">
              <div className="relative inline-block mr-4">
                <span className="relative z-10 text-white px-6 py-2">
                  인간적인
                </span>
                <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
              </div>
              면을
            </h1>
            <h1 className="text-8xl font-black text-gray-900 leading-tight">
              소개합니다
              <span className="inline-block w-8 h-8 bg-cyan-400 rounded-full ml-4 mb-2"></span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-600 font-medium mt-8 max-w-2xl">
            일할 때는 진지하게,
            <br />
            일 밖에서는 가볍게.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-12">
            <a
              href="/work"
              className="px-8 py-4 bg-gray-900 text-white text-lg font-bold hover:bg-gray-800 transition-colors"
            >
              Work 보기 →
            </a>
            <a
              href="mailto:contact@example.com"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 text-lg font-bold hover:bg-gray-50 transition-colors"
            >
              연락하기
            </a>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="border-2 border-gray-900 p-12">
          <p className="text-4xl font-black text-gray-900 leading-relaxed">
            새로운 걸 배우는 걸 좋아하고,
          </p>
          <p className="text-4xl font-black text-gray-900 leading-relaxed mt-4">
            반복되는 일은 자동화로 줄이고,
          </p>
          <p className="text-4xl font-black text-gray-900 leading-relaxed mt-4">
            사람들과 함께 성장하는 순간에서
          </p>
          <p className="text-4xl font-black text-gray-900 leading-relaxed mt-4">
            가장 큰 동기부여를 얻습니다
            <span className="inline-block w-6 h-6 bg-cyan-400 rounded-full ml-3 mb-1"></span>
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-5xl font-black text-gray-900 mb-8">
          빠르게 알아보는 나
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {facts.map((fact, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-900 p-6 hover:bg-gray-50 transition-colors"
            >
              <span className="text-base font-medium text-gray-900">
                {fact}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-6xl font-black text-gray-900 mb-12">
          좋아하는 것들
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-900 p-10 hover:bg-gray-50 transition-colors"
            >
              <div className="text-7xl mb-6">{hobby.icon}</div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                {hobby.label}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {hobby.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="max-w-6xl mx-auto px-8 py-16 mb-20">
        <h2 className="text-6xl font-black text-gray-900 mb-12">
          일하는 방식
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-900 p-8 hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                {p.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-gray-900 p-20 text-center">
          <h2 className="text-6xl font-black text-white mb-12">
            일하는 황진규가 궁금하신가요?
          </h2>
          <a
            href="/work"
            className="px-12 py-5 bg-white text-gray-900 text-xl font-bold hover:bg-gray-100 transition-colors"
          >
            프로젝트 보기 →
          </a>
        </div>
      </section>
    </div>
  );
}