// FILE: app/work/page.tsx

export default function WorkPage() {
  const impacts = [
    { 
      label: "에어컨 청소 주문", 
      value: "1.5만건", 
      description: "성수기 운영",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      label: "GMV", 
      value: "약 20억", 
      description: "에어컨 청소 기준",
      color: "from-purple-500 to-pink-500"
    },
    { 
      label: "CS 대응", 
      value: "최대 480건/일", 
      description: "피크 데이 기준",
      color: "from-orange-500 to-red-500"
    },
    { 
      label: "CRM 발송", 
      value: "655만+", 
      description: "캠페인 운영",
      color: "from-green-500 to-emerald-500"
    },
  ];

  const projects = [
    {
      id: 1,
      title: "에어컨 청소 기획전 성수기 운영 고도화",
      timeline: "2025 (성수기)",
      problem:
        "성수기에는 주문이 급증하면서 해피콜 지연, 일정 미업데이트, 추가금/견적 불만, 취소·정산 이슈가 한 번에 발생하기 쉬움. 고객 경험 저하가 곧 CS 폭증/취소로 이어지는 구조.",
      approach:
        "문의/취소 사유를 유형화해(연락·일정·추가금·환불·A/S·정산) 우선순위를 세우고, 파트너 운영 가이드/관리지표를 표준화. 운영 현황을 대시보드로 모니터링하며 리마인드·에스컬레이션 기준을 명확히 해 병목을 줄임.",
      result:
        "주문 1.5만건 규모를 운영하며 GMV 약 20억 달성. 피크 데이에는 최대 480건/일 수준의 CS를 대응하며 운영 안정성을 확보(고객/파트너 커뮤니케이션, 일정·정산 이슈 핸들링 포함).",
      role: "PM (운영 설계 · 데이터 기반 개선 · 파트너 협업 · 실행)",
      tags: ["O2O 운영", "프로세스 표준화", "CS", "파트너 매니지먼트"],
      accent: "blue",
    },
    {
      id: 2,
      title: "채널톡 상담: 셀프해결형 정보 구조(CTA/Depth) 설계",
      timeline: "2026.01–",
      problem:
        "상담원 연결 중심 구조는 성수기 문의 폭증 시 대기/불만을 키움. 단순 문의는 1~2 depth에서 자가 해결되어야 CS 병목이 줄어듦.",
      approach:
        "작년 주요 문의와 운영 이슈를 기준으로 '자가 해결 가능한 질문'을 깊이별로 재구성하고, 상담원 연결 CTA는 정말 필요한 지점에만 배치. 고객이 막히는 지점을 기준으로 카테고리를 재매핑해 탐색 비용을 줄임.",
      result:
        "구조 개편 이후 상담원 연결(또는 직접 대응 필요 건)이 일 평균 49.8건, 최대 87건까지 감소하여 운영 병목을 완화.",
      role: "PM (정보 구조 설계 · 운영 데이터 기반 개선)",
      tags: ["CS UX", "FAQ/CTA", "정보 구조", "운영 개선"],
      accent: "purple",
    },
    {
      id: 3,
      title: "파트너 배정 로직: 비율 변경 시점부터 자동 반영(운영 자동화)",
      timeline: "2025–2026",
      problem:
        "파트너별 물량 배분 비율이 바뀔 때 수동 반영/혼선이 생기면 배정 오류로 이어지고, 운영 신뢰도와 처리 속도가 떨어짐.",
      approach:
        "'비율 변경 시점 이후부터 신규 비율 적용' 원칙으로 로직을 정리하고, 예외 케이스(취소/중복/누락) 검증 포인트와 로그/알림 기준을 함께 설계.",
      result:
        "수작업으로 하루 2시간+ 투입하던 배정/반영 작업을 자동화하여 운영 리소스를 절감하고, 변경 적용 속도와 일관성을 확보.",
      role: "PM (요구사항 정의 · 로직 설계 · 구현/검증)",
      tags: ["Google Apps Script", "자동화", "배정 로직", "운영 효율"],
      accent: "orange",
    },
    {
      id: 4,
      title: "지역별 수요 분석('시' 단위 정규화) & 타겟 전략 근거 확보",
      timeline: "2026.01 (In progress)",
      problem:
        "주소 포맷이 지역/유형별로 달라 시 단위 분석에서 null/미상이 발생. 수도권 이후 '다음 타겟' 의사결정 근거가 약해짐.",
      approach:
        "도로명 주소에서 시/시군구를 안정적으로 추출하도록 정규식/전처리를 개선하고, '미상' 케이스는 별도 분리해 패턴을 확인. Looker Studio 시각화에 맞게 지역 단위를 표준화.",
      result:
        "현재 분석 진행 중이며, 전체 지역 분포를 기반으로 '수도권 이후 타겟' 후보를 도출해 마케팅/운영 의사결정에 연결하는 것을 목표로 함.",
      role: "PM/Analyst (데이터 가공 · 분석 · 시각화 · 공유)",
      tags: ["Looker Studio", "Regex", "지역 분석", "타겟팅"],
      accent: "green",
    },
  ];

  const strengths = [
    { 
      title: "소통과 조율", 
      desc: "효과적인 소통으로 팀의 의견을 조율하고 발전시킵니다.",
      emoji: "💬"
    },
    { 
      title: "문제 해결", 
      desc: "문제 해결 능력을 바탕으로 새로운 기회를 찾아냅니다.",
      emoji: "🎯"
    },
    { 
      title: "적응력과 유연함", 
      desc: "다양한 상황에 맞는 해결책을 제시합니다.",
      emoji: "🌊"
    },
  ];

  const howIWork = [
    "저의 에너지는 성장과 배움에서 나옵니다. 새로운 지식을 습득하고 적용하는 과정에서 동기부여를 얻습니다.",
    "회사와 사람들에 긍정적 영향을 주는 일이 동기부여가 됩니다.",
    "효율성을 중시하며 일을 체계적이고 빠르게 처리하는 것을 중요하게 생각합니다.",
  ];

  const accentColors: Record<string, string> = {
    blue: "border-l-blue-500 bg-blue-50/50",
    purple: "border-l-purple-500 bg-purple-50/50",
    orange: "border-l-orange-500 bg-orange-50/50",
    green: "border-l-green-500 bg-green-50/50",
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

      <div className="relative">
        {/* Hero */}
        <section className="max-w-content mx-auto px-6 pt-20 pb-16">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4">
              Product Manager Portfolio
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
              황진규
            </h1>
            <p className="text-3xl font-semibold text-gray-700">
              데이터 기반 실행형 PM
            </p>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              O2O 생활서비스(에어컨 청소 등) 성수기 운영에서 발생하는 병목을 데이터로 정의하고,
              <br />
              <span className="text-blue-600 font-medium">운영 프로세스·파트너 관리·자동화</span>로 안정성과 확장성을 만드는 일을 합니다.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="mailto:contact@example.com"
                className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  연락하기
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                프로젝트 보기
              </a>
              <a
                href="/human"
                className="px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 rounded-xl font-semibold border-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                인간 황진규 보기 ✨
              </a>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="max-w-content mx-auto px-6 pb-12">
          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((s, idx) => (
              <div 
                key={s.title} 
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{s.emoji}</div>
                <div className="text-base font-bold text-gray-900 mb-2">{s.title}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-content mx-auto px-6 py-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Impact */}
        <section className="max-w-content mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-3xl">⚡</span>
            <h2 className="text-2xl font-bold text-gray-900">Impact</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${impact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`text-5xl font-black bg-gradient-to-br ${impact.color} bg-clip-text text-transparent mb-3`}>
                    {impact.value}
                  </div>
                  <div className="text-base font-semibold text-gray-900 mb-2">
                    {impact.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {impact.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-content mx-auto px-6 py-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Projects */}
        <section id="projects" className="max-w-content mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-3xl">🚀</span>
            <h2 className="text-2xl font-bold text-gray-900">Selected Projects</h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`group bg-white border-l-4 ${accentColors[project.accent]} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                    {project.timeline}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                        Problem
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed pl-4">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                        Approach
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed pl-4">
                      {project.approach}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                        Result
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed pl-4">
                      {project.result}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                        Role
                      </h4>
                    </div>
                    <p className="text-gray-700 mb-4 pl-4">
                      {project.role}
                    </p>
                    <div className="flex flex-wrap gap-2 pl-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 text-sm bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 rounded-full font-medium border border-gray-200 hover:border-gray-400 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-content mx-auto px-6 py-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* How I work */}
        <section className="max-w-content mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🙋</span>
            <h2 className="text-2xl font-bold text-gray-900">How I work</h2>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-gray-200 rounded-2xl p-8">
            <ul className="space-y-4">
              {howIWork.map((text, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-content mx-auto px-6 py-20">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="relative">
              <div className="text-5xl mb-6">👋</div>
              <h2 className="text-4xl font-bold text-white mb-4">
                인간 황진규가 궁금하신가요?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                일 밖에서는 어떤 사람인지, 짧고 가볍게 정리해뒀어요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/human"
                  className="group inline-block px-10 py-5 bg-white text-gray-900 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Human 페이지로
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="inline-block px-10 py-5 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  이메일 보내기
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}