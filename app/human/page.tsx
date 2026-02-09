// FILE: app/human/page.tsx

export default function HumanPage() {
  const facts = [
    "ENFJ",
    "사람 만나는 거 좋아함",
    "재즈 / 인디 음악 플레이리스트 수집가",
    "고수, 민트초코 호(好)",
    "새로운 툴/자동화/AI 만지작거리는 걸 즐김",
    "'더 효율적으로 할 방법 없나?'가 기본 사고방식",
  ];

  const hobbies = [
    {
      label: "야구 직관",
      detail: "응원하는 팀(삼성 라이온즈) 경기 보러 가는 편",
      icon: "⚾",
    },
    {
      label: "재즈·인디 음악",
      detail: "플레이리스트 수집 + 공유 (가끔은 혼자 감상)",
      icon: "🎧",
    },
    {
      label: "여행 & 산책",
      detail: "관광지도 좋고, 친구 동네 탐험하는 것도 좋아함",
      icon: "✈️",
    },
    {
      label: "데이터 덕질",
      detail: "일상의 패턴을 숫자로 보고 싶어짐",
      icon: "📊",
    },
    {
      label: "자동화 만들기",
      detail: "반복 작업 줄이는 도구 만들면 쾌감 옴",
      icon: "🔧",
    },
  ];

  const principles = [
    {
      title: "사람 먼저",
      desc: "결국 서비스는 사람이 쓰는 것. 고객/동료/파트너 입장에서 먼저 생각합니다.",
      highlight: "사람",
    },
    {
      title: "빠른 실행",
      desc: "완벽한 계획보다 빠른 실험과 검증을 선호합니다.",
      highlight: "실행",
    },
    {
      title: "자동화의 힘",
      desc: "반복 업무는 줄이고, 시간을 ‘생각’에 쓰고 싶습니다.",
      highlight: "자동화",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <div className="relative">
          {/* Main Typography */}
          <div className="pt-2 md:pt-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight mb-2">
              황진규의
            </h1>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
              <span className="relative inline-block mr-2 sm:mr-4">
                <span className="relative z-10 text-white px-3 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2">
                  인간적인
                </span>
                <span className="absolute inset-0 bg-purple-600 -skew-x-6" />
              </span>
              면을
            </h1>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
              만나보세요
              <span className="inline-block w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-cyan-400 rounded-full ml-3 sm:ml-4 align-middle" />
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mt-6 md:mt-8 max-w-2xl">
            일할 땐 진지하고,
            <br className="hidden sm:block" />
            일 밖에선 호기심 많은 사람입니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-12">
            <a
              href="/work"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gray-900 text-white text-base sm:text-lg font-bold rounded-none hover:bg-gray-800 transition-colors text-center"
            >
              Work 보기 →
            </a>
            <a
              href="mailto:contact@example.com"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-gray-900 text-gray-900 text-base sm:text-lg font-bold rounded-none hover:bg-gray-50 transition-colors text-center"
            >
              연락하기
            </a>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="border-2 border-gray-900 p-6 sm:p-10 md:p-12 bg-white">
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-relaxed">
            새로운 걸
            <span className="relative inline-block mx-2 sm:mx-3">
              <span className="relative z-10 text-white px-3 py-1 sm:px-4 sm:py-1">
                배우는
              </span>
              <span className="absolute inset-0 bg-purple-600 -skew-x-6" />
            </span>
            걸 좋아하고,
          </p>

          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-relaxed mt-3 sm:mt-4">
            귀찮은 건
            <span className="relative inline-block mx-2 sm:mx-3">
              <span className="relative z-10 text-white px-3 py-1 sm:px-4 sm:py-1">
                자동화
              </span>
              <span className="absolute inset-0 bg-purple-600 -skew-x-6" />
            </span>
            하고,
          </p>

          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-relaxed mt-3 sm:mt-4">
            사람들과 같이
            <span className="relative inline-block mx-2 sm:mx-3">
              <span className="relative z-10 text-white px-3 py-1 sm:px-4 sm:py-1">
                성장
              </span>
              <span className="absolute inset-0 bg-purple-600 -skew-x-6" />
            </span>
            하는
          </p>

          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-relaxed mt-3 sm:mt-4">
            순간에서 가장 큰 동기부여를 받습니다
            <span className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-cyan-400 rounded-full ml-2 sm:ml-3 align-middle" />
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 md:mb-8">
          빠르게 알아보는
          <span className="relative inline-block mx-2 sm:mx-3">
            <span className="relative z-10 text-white px-3 py-1">나</span>
            <span className="absolute inset-0 bg-purple-600 -skew-x-6" />
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {facts.map((fact, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-900 p-5 sm:p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-base font-medium text-gray-900">{fact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-8 md:mb-12">
          내가
          <span className="relative inline-block mx-2 sm:mx-4">
            <span className="relative z-10 text-white px-4 py-1.5 sm:px-6 sm:py-2">
              좋아하는
            </span>
            <span className="absolute inset-0 bg-purple-600 -skew-x-6" />
          </span>
          것들
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-900 p-6 sm:p-8 md:p-10 hover:bg-gray-50 transition-colors"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">
                {hobby.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 md:mb-4">
                {hobby.label}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {hobby.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 mb-10 md:mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-8 md:mb-12">
          나는 이렇게
          <span className="relative inline-block mx-2 sm:mx-4">
            <span className="relative z-10 text-white px-4 py-1.5 sm:px-6 sm:py-2">
              일합니다
            </span>
            <span className="absolute inset-0 bg-purple-600 -skew-x-6" />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-900 p-6 sm:p-8 hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 md:mb-6">
                {p.title.split(" ")[0]}
                <span className="relative inline-block ml-2">
                  <span className="relative z-10 text-white px-2 py-0.5 text-xl md:text-2xl">
                    {p.highlight}
                  </span>
                  <span className="absolute inset-0 bg-cyan-400 -skew-x-6" />
                </span>
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <div className="bg-gray-900 p-10 sm:p-14 md:p-20 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-10 h-10 sm:w-16 sm:h-16 bg-cyan-400 rounded-full" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 bg-purple-600 rounded-full" />

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 sm:mb-4 leading-tight">
            내가 만든 것들이
          </h2>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 md:mb-12 leading-tight">
            <span className="relative inline-block mx-2 sm:mx-4">
              <span className="relative z-10 text-gray-900 px-4 py-1.5 sm:px-6 sm:py-2">
                궁금하신가요
              </span>
              <span className="absolute inset-0 bg-cyan-400 -skew-x-6" />
            </span>
            ?
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mt-8 md:mt-12">
            <a
              href="/work"
              className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-gray-900 text-base sm:text-lg md:text-xl font-bold hover:bg-gray-100 transition-colors"
            >
              프로젝트 보기 →
            </a>
            <a
              href="mailto:contact@example.com"
              className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-white text-white text-base sm:text-lg md:text-xl font-bold hover:bg-white hover:text-gray-900 transition-colors"
            >
              연락하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
