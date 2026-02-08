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
      detail: "응원하는 팀의 경기를 직접 보러 갑니다",
      icon: "⚾"
    },
    { 
      label: "재즈·인디 음악", 
      detail: "플레이리스트 수집과 공유를 즐깁니다",
      icon: "🎧"
    },
    { 
      label: "여행 & 산책", 
      detail: "새로운 장소를 탐험하는 것을 좋아합니다",
      icon: "✈️"
    },
    { 
      label: "데이터 덕질", 
      detail: "일상의 패턴을 숫자로 분석합니다",
      icon: "📊"
    },
    { 
      label: "자동화 만들기", 
      detail: "반복 작업을 줄이는 도구를 만듭니다",
      icon: "🔧"
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
      desc: "반복 업무는 반드시 줄이고, 시간을 '생각'에 쓰고 싶습니다.",
      highlight: "자동화",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="relative">
          {/* Main Typography */}
          <div className="pt-16">
            <h1 className="text-8xl font-black text-gray-900 leading-tight mb-2">
              일할 땐
            </h1>
            <h1 className="text-8xl font-black text-gray-900 leading-tight">
              <div className="relative inline-block mr-4">
                <span className="relative z-10 text-white px-6 py-2">진지하고</span>
                <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
              </div>
              ,
            </h1>
            <h1 className="text-8xl font-black text-gray-900 leading-tight mt-4">
              일 밖에선
            </h1>
            <h1 className="text-8xl font-black text-gray-900 leading-tight">
              <div className="relative inline-block mr-4">
                <span className="relative z-10 text-white px-6 py-2">호기심</span>
                <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
              </div>
              많은
            </h1>
            <h1 className="text-8xl font-black text-gray-900 leading-tight">
              사람입니다
              <span className="inline-block w-8 h-8 bg-cyan-400 rounded-full ml-4 mb-2"></span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-12">
            <a
              href="/work"
              className="px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-none hover:bg-gray-800 transition-colors"
            >
              Work 보기 →
            </a>
            <a
              href="mailto:contact@example.com"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 text-lg font-bold rounded-none hover:bg-gray-50 transition-colors"
            >
              연락하기
            </a>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="relative">
          <div className="border-2 border-gray-900 p-12 bg-white">
            <p className="text-4xl font-black text-gray-900 leading-relaxed">
              새로운 걸
              <div className="relative inline-block mx-3">
                <span className="relative z-10 text-white px-4 py-1">배우는</span>
                <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
              </div>
              걸 좋아하고,
            </p>
            <p className="text-4xl font-black text-gray-900 leading-relaxed mt-4">
              귀찮은 건
              <div className="relative inline-block mx-3">
                <span className="relative z-10 text-white px-4 py-1">자동화</span>
                <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
              </div>
              하고,
            </p>
            <p className="text-4xl font-black text-gray-900 leading-relaxed mt-4">
              사람들과 같이
              <div className="relative inline-block mx-3">
                <span className="relative z-10 text-white px-4 py-1">성장</span>
                <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
              </div>
              하는
            </p>
            <p className="text-4xl font-black text-gray-900 leading-relaxed mt-4">
              순간에서 가장 큰 동기부여를 받습니다
              <span className="inline-block w-6 h-6 bg-cyan-400 rounded-full ml-3 mb-1"></span>
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-5xl font-black text-gray-900 mb-8">
          빠르게 알아보는
          <div className="relative inline-block mx-3">
            <span className="relative z-10 text-white px-4 py-1">나</span>
            <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
          </div>
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {facts.map((fact, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-900 p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base font-medium text-gray-900">{fact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-6xl font-black text-gray-900 mb-12">
          내가
          <div className="relative inline-block mx-4">
            <span className="relative z-10 text-white px-6 py-2">좋아하는</span>
            <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
          </div>
          것들
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

      {/* How I Work */}
      <section className="max-w-6xl mx-auto px-8 py-16 mb-20">
        <h2 className="text-6xl font-black text-gray-900 mb-12">
          나는 이렇게
          <div className="relative inline-block mx-4">
            <span className="relative z-10 text-white px-6 py-2">일합니다</span>
            <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
          </div>
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-900 p-8 hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                {p.title.split(' ')[0]}
                <div className="relative inline-block ml-2">
                  <span className="relative z-10 text-white px-3 py-1 text-2xl">
                    {p.highlight}
                  </span>
                  <div className="absolute inset-0 bg-cyan-400 transform -skew-x-6"></div>
                </div>
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-gray-900 p-20 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-16 h-16 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-12 h-12 bg-purple-600 rounded-full"></div>
          
          <h2 className="text-7xl font-black text-white mb-4 leading-tight">
            내가 만든 것들이
          </h2>
          <h2 className="text-7xl font-black text-white mb-12 leading-tight">
            <div className="relative inline-block mx-4">
              <span className="relative z-10 text-gray-900 px-6 py-2">궁금하신가요</span>
              <div className="absolute inset-0 bg-cyan-400 transform -skew-x-6"></div>
            </div>
            ?
          </h2>
          
          <div className="flex gap-6 justify-center mt-12">
            <a
              href="/work"
              className="px-12 py-5 bg-white text-gray-900 text-xl font-bold hover:bg-gray-100 transition-colors"
            >
              프로젝트 보기 →
            </a>
            <a
              href="mailto:contact@example.com"
              className="px-12 py-5 border-2 border-white text-white text-xl font-bold hover:bg-white hover:text-gray-900 transition-colors"
            >
              연락하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}