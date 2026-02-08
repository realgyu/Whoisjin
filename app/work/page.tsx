// FILE: app/work/page.tsx

export default function WorkPage() {
  const impacts = [
    {
      label: "에어컨 청소 주문",
      value: "1.5만건",
      desc: "성수기 운영",
    },
    {
      label: "GMV",
      value: "약 20억",
      desc: "에어컨 청소 기준",
    },
    {
      label: "CS 대응",
      value: "최대 480건/일",
      desc: "피크 데이 기준",
    },
    {
      label: "CRM 발송",
      value: "655만+",
      desc: "캠페인 운영",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "에어컨 청소 기획전 성수기 운영 고도화",
      timeline: "2025 (성수기)",
      highlight: "성수기 운영",
      problem:
        "성수기에는 주문이 급증하면서 해피콜 지연, 일정 미업데이트, 추가금·견적 불만, 취소·정산 이슈가 동시에 발생합니다. 이 문제들은 곧바로 CS 폭증과 취소로 이어지는 구조였습니다.",
      approach:
        "문의·취소 사유를 기준으로 연락, 일정, 추가금, 환불, A/S, 정산으로 유형을 나누고 우선순위를 정했습니다.\n\n파트너 운영 가이드와 관리 지표를 표준화하고, 운영 현황을 대시보드로 모니터링하며 리마인드·에스컬레이션 기준을 명확히 해 병목을 줄였습니다.",
      result:
        "주문 1.5만건 규모를 운영하며 GMV 약 20억을 달성했습니다. 피크 데이에는 하루 최대 480건 수준의 CS를 대응하며 고객·파트너 커뮤니케이션, 일정·정산 이슈를 안정적으로 처리할 수 있는 운영 구조를 만들었습니다.",
      role: "PM (운영 설계 · 데이터 기반 개선 · 파트너 협업 · 실행)",
      tags: ["O2O 운영", "프로세스 표준화", "CS", "파트너 매니지먼트"],
      color: "blue",
    },
    {
      id: 2,
      title: "채널톡 상담: 셀프해결형 정보 구조(CTA/Depth) 설계",
      timeline: "2026.01–",
      highlight: "정보 구조",
      problem:
        "상담원 연결 중심 구조는 성수기 문의가 몰릴수록 대기 시간과 고객 불만을 키웠습니다. 단순 문의는 1~2 depth에서 자가 해결되어야 CS 병목이 줄어듭니다.",
      approach:
        "작년 성수기 주요 문의와 운영 이슈를 기준으로 ‘자가 해결 가능한 질문’을 depth별로 재구성했습니다.\n\n상담원 연결 CTA는 꼭 필요한 지점에만 배치하고, 고객이 실제로 막히는 흐름을 기준으로 카테고리를 다시 설계해 탐색 비용을 줄였습니다.",
      result:
        "구조 개편 이후 직접 대응이 필요한 상담이 일 평균 49.8건, 최대 87건까지 감소해 운영 병목을 완화했습니다.",
      role: "PM (정보 구조 설계 · 운영 데이터 기반 개선)",
      tags: ["CS UX", "FAQ/CTA", "정보 구조", "운영 개선"],
      color: "purple",
    },
    {
      id: 3,
      title: "파트너 배정 로직: 비율 변경 시점부터 자동 반영(운영 자동화)",
      timeline: "2025–2026",
      highlight: "자동화",
      problem:
        "파트너별 물량 배분 비율이 바뀔 때 수동 반영/혼선이 생기면 배정 오류로 이어지고, 운영 신뢰도와 처리 속도가 떨어집니다.",
      approach:
        "‘비율 변경 시점 이후부터 신규 비율 적용’ 원칙으로 로직을 정리하고, 예외 케이스(취소/중복/누락) 검증 포인트와 로그/알림 기준을 함께 설계했습니다.",
      result:
        "수작업으로 하루 2시간 이상 들이던 배정·반영 작업을 자동화해 운영 리소스를 줄이고, 비율 변경이 즉시 일관되게 적용되는 구조를 만들었습니다.",
      role: "PM (요구사항 정의 · 로직 설계 · 구현/검증)",
      tags: ["Google Apps Script", "자동화", "배정 로직", "운영 효율"],
      color: "orange",
    },
    {
      id: 4,
      title: "지역별 수요 분석('시' 단위 정규화) & 타겟 전략 근거 확보",
      timeline: "2026.01 (In progress)",
      highlight: "데이터 분석",
      problem:
        "주소 포맷이 지역/유형별로 달라 시 단위 분석에서 null/미상이 발생합니다. 수도권 이후 ‘다음 타겟’ 의사결정 근거가 약해지는 문제가 있었습니다.",
      approach:
        "도로명 주소에서 시/시군구를 안정적으로 추출하도록 정규식·전처리를 개선하고, ‘미상’ 케이스는 별도 분리해 패턴을 확인했습니다. Looker Studio 시각화에 맞게 지역 단위를 표준화했습니다.",
      result:
        "전체 지역 분포를 기반으로 ‘수도권 이후 타겟’ 후보를 도출하고, 마케팅·운영 의사결정에 바로 연결하는 것을 목표로 분석을 진행 중입니다.",
      role: "PM/Analyst (데이터 가공 · 분석 · 시각화 · 공유)",
      tags: ["Looker Studio", "Regex", "지역 분석", "타겟팅"],
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="relative">
          {/* Profile Card - 왼쪽 상단 */}
          <div className="absolute -top-4 -left-4 w-72 bg-white border-2 border-gray-900 p-6 z-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white font-black">
                황
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900">황진규</h3>
                <p className="text-sm text-gray-600">프로덕트/데이터 PM</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              데이터로 문제를 정의하고,
              {"\n"}운영을 지표와 자동화로 확장하는 PM입니다.
            </p>
          </div>

          {/* Main Typography */}
          <div className="pt-32">
            <h1 className="text-8xl font-black text-gray-900 leading-tight mb-2">
              나는
              <div className="relative inline-block mx-4">
                <span className="relative z-10 text-white px-6 py-2">시스템</span>
                <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
              </div>
              을
            </h1>
            <h1 className="text-8xl font-black text-gray-900 leading-tight">
              만들고
            </h1>
            <h1 className="text-8xl font-black text-gray-900 leading-tight">
              운영을 확장합니다
              <span className="inline-block w-8 h-8 bg-cyan-400 rounded-full ml-4 mb-2"></span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-12">
            <a
              href="mailto:contact@example.com"
              className="px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-none hover:bg-gray-800 transition-colors"
            >
              연락하기
            </a>
            <a
              href="/human"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 text-lg font-bold rounded-none hover:bg-gray-50 transition-colors"
            >
              나에 대해 →
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-6">
          {impacts.map((impact, idx) => (
            <div key={idx} className="border-2 border-gray-900 p-6">
              <div className="text-4xl font-black text-gray-900 mb-2">
                {impact.value}
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">
                {impact.label}
              </div>
              <div className="text-xs text-gray-600">{impact.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="space-y-24">
          {projects.map((project) => (
            <article key={project.id} className="relative">
              {/* Project Title */}
              <div className="mb-12">
                <h2 className="text-6xl font-black text-gray-900 leading-tight mb-4">
                  {project.title.split(" ").slice(0, 3).join(" ")}
                  <div className="relative inline-block mx-3">
                    <span className="relative z-10 text-white px-4 py-1">
                      {project.highlight}
                    </span>
                    <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
                  </div>
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  {project.timeline}
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left - Problem & Approach */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      문제
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      접근
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                      {project.approach}
                    </p>
                  </div>
                </div>

                {/* Right - Result & Role */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      결과
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                      {project.result}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      역할
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                      {project.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border-2 border-gray-900 text-sm font-bold text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section className="max-w-6xl mx-auto px-8 py-16 mb-20">
        <h2 className="text-5xl font-black text-gray-900 mb-8">
          나는 이렇게
          <div className="relative inline-block mx-3">
            <span className="relative z-10 text-white px-4 py-1">일합니다</span>
            <div className="absolute inset-0 bg-purple-600 transform -skew-x-6"></div>
          </div>
        </h2>

        <div className="border-2 border-gray-900 p-8">
          <ul className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start gap-4">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                저는 성장하고 배우는 과정에서 가장 큰 에너지를 얻습니다.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                제가 한 일이 회사와 사람들에게 실제로 도움이 되는 순간에 가장
                동기부여를 느낍니다.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                비효율을 그냥 넘기지 않습니다. 일은 가능한 한 체계적으로, 그리고
                빠르게 처리하려고 합니다.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}