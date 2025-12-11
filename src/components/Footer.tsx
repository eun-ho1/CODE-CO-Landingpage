export function Footer() {
  return (
    <footer className="relative px-6 py-12 overflow-hidden">
      {/* Footer gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D] to-[#0A0A0C] -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg text-white/78">
          <span className="text-white bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">WINNOW</span> — AI 기반 JD 생성 · 팀 협업 · 체크리스트 공고 자동화
        </p>
        <p className="mt-4 text-sm text-white/55">
          © 2025 WINNOW. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
