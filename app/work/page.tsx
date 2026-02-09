"use client";

import { useState } from "react";

export default function WorkPage() {
  const [showAllPrinciples, setShowAllPrinciples] = useState(false);

  const heroBullets = [
    "병목을 정의하고 (Problem)",
    "기준을 만들고 (Process)",
    "자동화로 확장합니다 (System)",
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
      context: "캠페인 운영 및 세그먼트 실험 포함",
    },
  ];

  const workPrinciples = [
    {
      title: "문제를 숫자로 시작합니다",
      detail: "감이 아니라 데이터로 병목을 먼저 보이게 만듭니다.",
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
      detail: "리포트에서 멈추지 않고 운영 액션과 책임자까지 연결합니다.",
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
    <main className="min-h-screen bg-[#f5f4ef] text-[#171717]">
      <section className="relative overflow-hidden border-b-2 border-[#171717] bg-[radial-gradient(circle_at_top_right,_#e2e8d8_0%,_#f5f4ef_52%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8 md:gap-10 items-start">
            <div>
              <p className="text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-[#4c4c4c]">
                Work / Portfolio
              </p>
              <h1 className="mt-3 text-4xl md:text-7xl font-black leading-[1.02] tracking-tight">
                데이터를 기반으로
              </h1>
              <h1 className="mt-2 text-4xl md:text-7xl font-black leading-[1.02] tracking-tight">
                복잡한 운영을 효율화 합니다.
              </h1>
              <p className="mt-6 text-base md:text-xl text-[#353535] font-medium max-w-3xl leading-relaxed">
                O2O 생활서비스 성수기 운영을 지표·프로세스·자동화로 안정화합니다.
              </p>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {heroBullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-xl border-2 border-[#171717] bg-white/80 px-4 py-3 text-sm font-bold"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
                <a
                  href="mailto:contact@example.com"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#171717] text-white text-base sm:text-lg font-bold hover:bg-black transition-colors text-center"
                >
                  연락하기
                </a>
                <a
                  href="/human"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border-2 border-[#171717] text-[#171717] text-base sm:text-lg font-bold hover:bg-white transition-colors text-center"
                >
                  Human 보기 →
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border-2 border-[#171717] bg-white p-6 md:p-7 shadow-[8px_8px_0px_#171717]">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#5a5a5a]">Core Lens</p>
              <ul className="mt-4 space-y-3">
                <li className="text-sm md:text-base font-medium">운영을 시스템으로 만듭니다.</li>
                <li className="text-sm md:text-base font-medium">병목을 숫자로 먼저 정의합니다.</li>
                <li className="text-sm md:text-base font-medium">표준화와 자동화로 재현성을 만듭니다.</li>
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <span className="rounded-lg bg-[#f0eddf] px-3 py-2 text-xs font-bold text-center">PM</span>
                <span className="rounded-lg bg-[#f0eddf] px-3 py-2 text-xs font-bold text-center">Ops</span>
                <span className="rounded-lg bg-[#f0eddf] px-3 py-2 text-xs font-bold text-center">CS</span>
                <span className="rounded-lg bg-[#f0eddf] px-3 py-2 text-xs font-bold text-center">Automation</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {impacts.map((impact) => (
            <article
              key={impact.label}
              className="rounded-2xl border-2 border-[#171717] bg-white p-4 sm:p-5"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#171717]">{impact.value}</p>
              <p className="mt-2 text-xs sm:text-sm font-bold text-[#171717]">{impact.label}</p>
              <p className="mt-1 text-[11px] sm:text-xs text-[#5b5b5b]">{impact.desc}</p>
              <p className="mt-2 text-[11px] sm:text-xs text-[#7a7a7a]">{impact.context}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="flex items-end justify-between gap-3 mb-6 md:mb-8">
          <div>
            <p className="text-xs md:text-sm font-bold tracking-[0.14em] uppercase text-[#5a5a5a]">
              Work Principles
            </p>
            <h2 className="mt-1 text-3xl md:text-5xl font-black text-[#171717]">운영을 대하는 태도</h2>
          </div>
          <button
            type="button"
            onClick={() => setShowAllPrinciples((prev) => !prev)}
            className="rounded-lg border-2 border-[#171717] px-4 py-2 text-sm font-bold hover:bg-white transition-colors"
          >
            {showAllPrinciples ? "접기" : "+ 더보기"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {visiblePrinciples.map((principle) => (
            <article key={principle.title} className="rounded-2xl border-2 border-[#171717] bg-white p-5 sm:p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {principle.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-md bg-[#171717] px-2.5 py-1 text-xs font-bold text-white"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-black text-[#171717] mb-2">{principle.title}</h3>
              <p className="text-sm sm:text-base text-[#444] leading-relaxed">{principle.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 pb-20">
        <div className="space-y-8 md:space-y-10">
          {projects.map((project) => (
            <article key={project.id} className="rounded-2xl border-2 border-[#171717] bg-white p-5 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-8">
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#5a5a5a]">Project 0{project.id}</p>
                  <p className="mt-3 inline-block rounded-md bg-[#171717] px-3 py-1 text-xs font-bold text-white">
                    {project.highlight}
                  </p>
                  <p className="mt-3 text-sm text-[#555] font-medium">{project.timeline}</p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-4xl font-black leading-tight text-[#171717]">{project.title}</h3>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#616161]">문제</p>
                      <p className="mt-2 text-sm sm:text-base text-[#444] leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#616161]">접근</p>
                      <p className="mt-2 text-sm sm:text-base text-[#444] leading-relaxed">{project.approach}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#616161]">결과</p>
                      <p className="mt-2 text-sm sm:text-base text-[#444] leading-relaxed">{project.result}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#616161]">역할</p>
                      <p className="mt-2 text-sm sm:text-base text-[#444] leading-relaxed">{project.role}</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border-2 border-[#171717] bg-[#f7f5ea] p-4">
                    <p className="text-sm font-black text-[#171717]">내가 여기서 한 일</p>
                    <p className="mt-1 text-sm sm:text-base text-[#444] leading-relaxed">
                      데이터로 병목을 정의하고, 운영 기준/프로세스를 설계한 뒤, 자동화와 루틴으로 확장했습니다.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border-2 border-[#171717] px-3 py-1.5 text-xs sm:text-sm font-bold text-[#171717]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
