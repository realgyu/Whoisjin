"use client";

import { useState } from "react";

export default function WorkPage() {
  const [showAllPrinciples, setShowAllPrinciples] = useState(false);

  const heroBullets = [
    "병목을 정의하고",
    "기준을 만들고",
    "자동화로 확장합니다",
  ];

  const impacts = [
    {
      label: "에어컨 청소 주문",
      value: "1.5만건",
      desc: "성수기 운영",
      context: "성수기 피크데이 대응 포함",
    },
    {
      label: "GMV",
      value: "약 20억",
      desc: "에어컨 청소 기준",
      context: "수요 급증 구간 운영 포함",
    },
    {
      label: "CS 대응",
      value: "최대 480건/일",
      desc: "피크 데이 기준",
      context: "취소·일정·환불 이슈 동시 대응",
    },
    {
      label: "CRM 발송",
      value: "655만+",
      desc: "캠페인 운영",
      context: "세그먼트 실험 및 운영 포함",
    },
  ];

  const workPrinciples = [
    {
      title: "문제를 숫자로 시작합니다",
      detail: "감으로 정하지 않고 데이터로 병목을 먼저 보이게 만듭니다.",
      keywords: ["데이터", "병목"],
    },
    {
      title: "복잡한 운영을 구조화합니다",
      detail: "흐름을 쪼개고 우선순위를 세워 운영 난이도를 낮춥니다.",
      keywords: ["구조", "우선순위"],
    },
    {
      title: "기준 없는 일은 오래 못 갑니다",
      detail: "의사결정 기준과 운영 룰을 문서화해 재현 가능하게 만듭니다.",
      keywords: ["기준", "문서화"],
    },
    {
      title: "재발 이슈는 표준화로 막습니다",
      detail: "원인-대응-재발방지 흐름으로 표준 운영안을 만듭니다.",
      keywords: ["표준화", "운영"],
    },
    {
      title: "반복 업무는 자동화합니다",
      detail: "사람 시간을 줄이고 판단이 필요한 일에 집중합니다.",
      keywords: ["자동화", "효율"],
    },
    {
      title: "작게 실험하고 빠르게 수정합니다",
      detail: "작은 단위로 실행하고 결과를 보고 바로 다음 액션으로 연결합니다.",
      keywords: ["실험", "실행"],
    },
    {
      title: "현장 언어로 커뮤니케이션합니다",
      detail: "파트너·운영·CS와 같은 그림을 보도록 표현을 맞춥니다.",
      keywords: ["협업", "정렬"],
    },
    {
      title: "운영을 시스템으로 만듭니다",
      detail: "개인 역량에 의존하지 않도록 구조와 루틴을 설계합니다.",
      keywords: ["시스템", "스케일"],
    },
    {
      title: "지표는 행동으로 끝나야 합니다",
      detail: "리포트로 끝내지 않고 운영 액션과 책임자까지 연결합니다.",
      keywords: ["지표", "액션"],
    },
    {
      title: "기획-실행-개선을 한 흐름으로 봅니다",
      detail: "문제 정의부터 개선 루프까지 끊기지 않게 가져갑니다.",
      keywords: ["개선", "루프"],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "에어컨 청소 기획전 성수기 운영 고도화",
      timeline: "2025 (성수기)",
      highlight: "성수기 운영",
      problem:
        "주문이 몰리면 연락 지연, 일정 누락, 추가금 불만, 취소 이슈가 동시에 터졌습니다.",
      approach:
        "문의·취소 사유를 유형화하고 우선순위를 정했습니다. 파트너 운영 기준과 에스컬레이션 룰을 표준화했습니다.",
      result:
        "주문 1.5만건, GMV 약 20억을 운영했습니다. 피크데이 최대 480건/일 CS를 안정적으로 처리했습니다.",
      role: "PM (운영 설계 · 지표 기반 개선 · 파트너 협업)",
      tags: ["O2O 운영", "프로세스 표준화", "CS", "파트너 매니지먼트"],
    },
    {
      id: 2,
      title: "채널톡 상담 정보 구조(CTA/Depth) 재설계",
      timeline: "2026.01–",
      highlight: "정보 구조",
      problem:
        "상담원 연결 중심 구조라 단순 문의도 대기로 쌓이며 운영 병목이 커졌습니다.",
      approach:
        "자가 해결 질문을 깊이별로 재배치하고 상담원 연결 CTA를 필요한 지점에만 남겼습니다.",
      result:
        "개편 후 상담원 연결/직접 대응 건이 일 평균 49.8건, 최대 87건 수준으로 감소했습니다.",
      role: "PM (정보 구조 설계 · 운영 데이터 개선)",
      tags: ["CS UX", "FAQ/CTA", "정보 구조", "운영 개선"],
    },
    {
      id: 3,
      title: "파트너 배정 로직 자동 반영",
      timeline: "2025–2026",
      highlight: "자동화",
      problem:
        "배분 비율 변경을 수동으로 반영하면 누락과 혼선이 반복됐습니다.",
      approach:
        "변경 시점 이후 신규 비율이 자동 적용되도록 로직을 설계하고 예외 검증 포인트를 정의했습니다.",
      result:
        "하루 2시간+ 들던 반복 작업을 자동화해 반영 속도와 일관성을 함께 올렸습니다.",
      role: "PM (요구사항 정의 · 로직 설계 · 검증)",
      tags: ["Google Apps Script", "자동화", "배정 로직", "운영 효율"],
    },
    {
      id: 4,
      title: "지역별 수요 분석(시 단위 정규화)",
      timeline: "2026.01 (In progress)",
      highlight: "데이터 분석",
      problem:
        "주소 포맷 불일치로 시 단위 분석에서 null/미상이 발생해 타겟 판단이 느렸습니다.",
      approach:
        "주소 전처리와 정규식 기준을 고도화해 지역 단위를 표준화하고 미상 케이스를 분리했습니다.",
      result:
        "수도권 이후 타겟 후보를 데이터로 도출할 수 있는 분석 기반을 구축 중입니다.",
      role: "PM/Analyst (데이터 가공 · 분석 · 시각화)",
      tags: ["Looker Studio", "Regex", "지역 분석", "타겟팅"],
    },
  ];

  const visiblePrinciples = showAllPrinciples
    ? workPrinciples
    : workPrinciples.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
          데이터를 기반으로
        </h1>
        <h1 className="mt-2 text-4xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
          복잡한 운영을 효율화 합니다.
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-600 font-medium max-w-3xl leading-relaxed">
          O2O 생활서비스 성수기 운영을 지표·프로세스·자동화로 안정화합니다.
        </p>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {heroBullets.map((bullet) => (
            <li
              key={bullet}
              className="border-2 border-gray-900 px-4 py-3 text-sm md:text-base font-bold text-gray-900"
            >
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
          <a
            href="mailto:contact@example.com"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gray-900 text-white text-base sm:text-lg font-bold hover:bg-gray-800 transition-colors text-center"
          >
            연락하기
          </a>
          <a
            href="/human"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-gray-900 text-gray-900 text-base sm:text-lg font-bold hover:bg-gray-50 transition-colors text-center"
          >
            Human 보기 →
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {impacts.map((impact) => (
            <div key={impact.label} className="border-2 border-gray-900 p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2">
                {impact.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                {impact.label}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-600">{impact.desc}</div>
              <div className="mt-2 text-[11px] sm:text-xs text-gray-500">{impact.context}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="flex items-end justify-between gap-3 mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">운영을 대하는 태도</h2>
          <button
            type="button"
            onClick={() => setShowAllPrinciples((prev) => !prev)}
            className="px-4 py-2 border-2 border-gray-900 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors"
          >
            {showAllPrinciples ? "접기" : "+ 더보기"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {visiblePrinciples.map((principle) => (
            <article key={principle.title} className="border-2 border-gray-900 p-5 sm:p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {principle.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-2.5 py-1 bg-gray-900 text-white text-xs font-bold"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">{principle.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{principle.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 mb-16 md:mb-20">
        <div className="space-y-16 md:space-y-24">
          {projects.map((project) => (
            <article key={project.id} className="relative">
              <div className="mb-8 md:mb-12">
                <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight mb-3 md:mb-4">
                  <span className="block">{project.title}</span>
                  <span className="mt-3 inline-flex items-center gap-3 flex-wrap">
                    <span className="px-3 sm:px-4 py-1 bg-purple-600 text-white text-sm sm:text-base font-bold">
                      {project.highlight}
                    </span>
                    <span className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
                      {project.timeline}
                    </span>
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">문제</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">접근</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{project.approach}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">결과</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{project.result}</p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">역할</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{project.role}</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-900 mt-6 sm:mt-8 p-4 sm:p-5 bg-gray-50">
                <p className="text-sm font-black text-gray-900 mb-1">내가 여기서 한 일</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  데이터로 병목을 정의하고, 운영 기준/프로세스를 설계한 뒤, 자동화와 루틴으로 확장했습니다.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-2 border-2 border-gray-900 text-xs sm:text-sm font-bold text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
