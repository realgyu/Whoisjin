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
    "더 효율적으로? 모드",
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
    <div className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.08] tracking-tight">
          일할 땐 진지하고,
        </h1>
        <h1 className="mt-2 text-4xl md:text-7xl font-black text-gray-900 leading-[1.08] tracking-tight">
          일 밖에선 호기심 많은 사람입니다.
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-600 font-medium max-w-3xl leading-relaxed">
          야구 없으면 요리하고, 새 툴 보면 만져보고, 친구 동네 탐험을 좋아합니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10">
          <a
            href="/work"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gray-900 text-white text-base sm:text-lg font-bold hover:bg-gray-800 transition-colors text-center"
          >
            Work 보기 →
          </a>
          <a
            href="mailto:contact@example.com"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-gray-900 text-gray-900 text-base sm:text-lg font-bold hover:bg-gray-50 transition-colors text-center"
          >
            연락하기
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="flex items-end justify-between gap-3 mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">황진규 사용설명서</h2>
          <button
            type="button"
            onClick={() => setShowAllManual((prev) => !prev)}
            className="px-4 py-2 border-2 border-gray-900 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors"
          >
            {showAllManual ? "접기" : "+ 더보기"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {visibleManualItems.map((item) => (
            <div key={item} className="border-2 border-gray-900 p-4 sm:p-5">
              <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 md:mb-8">Quick Facts</h2>
        <div className="flex flex-wrap gap-3">
          {quickFacts.map((fact) => (
            <span
              key={fact}
              className="px-4 py-2 border-2 border-gray-900 text-sm sm:text-base font-bold text-gray-900"
            >
              {fact}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 md:mb-10">좋아하는 장면들</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {hobbies.map((hobby) => (
            <article key={hobby.label} className="border-2 border-gray-900 p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl mb-4">{hobby.icon}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">{hobby.label}</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{hobby.scene}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="border-2 border-gray-900 p-6 sm:p-10 bg-gray-50">
          <p className="text-sm font-black text-gray-900 mb-3">요즘의 나</p>
          <p className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
            완벽주의라 피곤해서, 요즘은 실행주의를 연습 중입니다.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            기획으로 시작해서 실행하고, 다시 디벨롭하는 흐름을 제일 좋아합니다.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <div className="bg-gray-900 p-10 sm:p-14 md:p-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            일하는 모습이 궁금하면
            <br />
            Work 페이지에서 더 확인해 주세요.
          </h2>
          <a
            href="/work"
            className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-white text-gray-900 text-base sm:text-lg font-bold hover:bg-gray-100 transition-colors"
          >
            프로젝트 보기 →
          </a>
        </div>
      </section>
    </div>
  );
}
