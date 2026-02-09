"use client";

import { useState } from "react";

export default function HumanPage() {
  const [showAllManual, setShowAllManual] = useState(false);

  const quickFacts = [
    "ENFJ",
    "삼성 라이온즈 팬",
    "재즈·인디 디깅",
    "고수·민트초코 호",
    "자동화 기본값",
    "더 효율적으로?",
  ];

  const hobbies = [
    {
      label: "야구",
      scene: "삼성 라이온즈 직관 / 시즌 시작하면 일정이 감정선",
      icon: "⚾",
    },
    {
      label: "여행",
      scene: "국내 위주 / 관광지도 좋지만 친구 동네 탐험이 더 재밌음",
      icon: "🧭",
    },
    {
      label: "요리",
      scene: "야구 없는 시즌엔 요리 자주 함 / 레시피 튜닝파",
      icon: "🍳",
    },
    {
      label: "음악",
      scene: "재즈·인디 디깅 / 플레이리스트 저장 습관",
      icon: "🎧",
    },
    {
      label: "데이터 덕질",
      scene: "일상 패턴을 숫자로 보면 재밌음",
      icon: "📊",
    },
    {
      label: "자동화",
      scene: "반복작업 보면 못 참고 만든다",
      icon: "🛠️",
    },
  ];

  const manualItems = [
    "대화 길어질수록 에너지 충전됨",
    "회의는 길게보다 핵심만 짧게 선호",
    "반복/비효율 보면 자동화 버튼 눌림",
    "레시피는 참고용, 튜닝해서 더 존맛",
    "친구 동네 탐험 = 여행 만족도 MAX",
    "플레이리스트는 수집보다 디깅",
    "삼성 라이온즈 얘기 나오면 텐션 올라감",
    "새 툴은 일단 눌러보고 판단",
    "문제 생기면 원인부터 구조로 정리",
    "감보단 로그와 패턴을 먼저 확인",
    "메모는 짧게, 실행 항목은 선명하게",
    "불필요한 반복은 바로 줄일 방법 찾음",
    "좋은 질문 하나가 작업 속도를 바꾼다고 믿음",
    "모호한 지시는 다시 정의해서 시작",
    "혼자 오래 끌기보다 빠르게 공유",
    "오늘 할 일은 오늘 끝내는 편",
    "처음부터 완벽보다 돌아가게 만들기",
    "정리 안 된 화면을 보면 손이 먼저 감",
    "작은 개선도 쌓이면 크게 바뀐다고 믿음",
    "숫자 뒤에 있는 맥락까지 같이 보는 편",
    "새 아이디어는 바로 테스트 가능한 단위로 쪼갬",
    "설명할 때는 전문용어보다 현장 언어 선호",
    "피드백은 빠르게 받고 빠르게 반영",
    "막히면 잠깐 걷고 다시 보면 풀림",
    "야구 경기 있으면 결과 체크는 루틴",
    "좋은 음악 찾으면 주변에 바로 공유",
    "도구는 간지보다 실제 효율이 기준",
    "일정이 빡세도 유머 한 줄은 챙김",
    "문제 탓보다 구조 탓을 먼저 찾음",
    "결론: 기획-실행-디벨롭 흐름을 즐김",
  ];

  const visibleManualItems = showAllManual ? manualItems : manualItems.slice(0, 8);

  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#171717]">
      <section className="relative overflow-hidden border-b-2 border-[#171717] bg-[radial-gradient(circle_at_top_left,_#f0e8d2_0%,_#f5f4ef_55%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-8 md:gap-10">
            <div>
              <p className="text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-[#4c4c4c]">
                Human / Profile
              </p>
              <h1 className="mt-3 text-4xl md:text-7xl font-black leading-[1.04] tracking-tight">
                일할 땐 진지하고,
              </h1>
              <h1 className="mt-2 text-4xl md:text-7xl font-black leading-[1.04] tracking-tight">
                일 밖에선 호기심 많은 사람입니다.
              </h1>
              <p className="mt-6 text-base md:text-xl text-[#353535] font-medium max-w-3xl leading-relaxed">
                야구 없으면 요리하고, 새 툴 보면 만져보고, 친구 동네 탐험을 좋아합니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {quickFacts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full border-2 border-[#171717] bg-white/80 px-4 py-2 text-sm font-bold"
                  >
                    {fact}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
                <a
                  href="/work"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#171717] text-white text-base sm:text-lg font-bold hover:bg-black transition-colors text-center"
                >
                  Work 보기 →
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border-2 border-[#171717] text-[#171717] text-base sm:text-lg font-bold hover:bg-white transition-colors text-center"
                >
                  연락하기
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border-2 border-[#171717] bg-white p-6 md:p-7 shadow-[8px_8px_0px_#171717]">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#5a5a5a]">Now Updating</p>
              <p className="mt-4 text-2xl md:text-3xl font-black leading-tight">
                완벽주의라 피곤해서,
                <br />
                요즘은 실행주의를 연습 중.
              </p>
              <p className="mt-4 text-sm md:text-base text-[#474747] leading-relaxed">
                기획으로 시작해서 실행하고, 다시 디벨롭하는 흐름을 제일 좋아합니다.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="flex items-end justify-between gap-3 mb-6 md:mb-8">
          <div>
            <p className="text-xs md:text-sm font-bold tracking-[0.14em] uppercase text-[#5a5a5a]">
              User Manual
            </p>
            <h2 className="mt-1 text-3xl md:text-5xl font-black text-[#171717]">황진규 사용설명서</h2>
          </div>
          <button
            type="button"
            onClick={() => setShowAllManual((prev) => !prev)}
            className="rounded-lg border-2 border-[#171717] px-4 py-2 text-sm font-bold hover:bg-white transition-colors"
          >
            {showAllManual ? "접기" : "+ 더보기"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {visibleManualItems.map((item) => (
            <article key={item} className="rounded-xl border-2 border-[#171717] bg-white px-4 py-4 sm:px-5">
              <p className="text-sm sm:text-base font-medium text-[#2f2f2f] leading-relaxed">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 pb-20">
        <div className="mb-8 md:mb-10">
          <p className="text-xs md:text-sm font-bold tracking-[0.14em] uppercase text-[#5a5a5a]">Scenes</p>
          <h2 className="mt-1 text-3xl md:text-5xl font-black text-[#171717]">좋아하는 장면들</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {hobbies.map((hobby) => (
            <article key={hobby.label} className="rounded-2xl border-2 border-[#171717] bg-white p-5 sm:p-6">
              <div className="text-4xl sm:text-5xl mb-3">{hobby.icon}</div>
              <h3 className="text-2xl font-black text-[#171717] mb-2">{hobby.label}</h3>
              <p className="text-sm sm:text-base text-[#474747] leading-relaxed">{hobby.scene}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
