import { motion } from 'motion/react';
import { FileText, ListChecks, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Comparison() {
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    section1: true,
    section2: false,
    section3: false,
  });

  const toggleAccordion = (section: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Diagonal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111114] via-[#0C0C0F] to-[#111114] -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[800px] h-[600px] bg-gradient-radial from-[#6A6AFB]/[0.08] to-transparent blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-white relative inline-block">
            <span className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent">
              기존 채용 공고와 WINNOW 체크리스트 공고는<br className="hidden md:block" /> 이렇게 다릅니다.
            </span>
            {/* Headline glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[120px] bg-gradient-radial from-[#6A6AFB]/[0.15] to-transparent blur-3xl -z-10"></div>
          </h2>
          
          <p className="text-xl text-white/78 max-w-3xl mx-auto">
            지원자가 "읽기만 하는" 공고가 아니라,<br />
            스스로 <span className="text-white">적합성 판단</span>이 가능하도록 구성됩니다.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* LEFT CARD - Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-[#141418] to-[#0F0F12] rounded-lg p-8 border border-white/[0.06] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] relative overflow-hidden"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/[0.08]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                <FileText className="w-5 h-5 text-white/70" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white/90">기존 백엔드 개발자 공고</h3>
            </div>

            {/* Content */}
            <div className="space-y-6 text-white/75">
              <div>
                <h4 className="text-white/90 mb-3">1. 담당 업무</h4>
                <ul className="space-y-2 pl-4">
                  <li className="text-sm leading-relaxed">• 웹/모바일 서비스 백엔드 기능 개발 및 운영</li>
                  <li className="text-sm leading-relaxed">• 데이터베이스 모델링 및 쿼리 최적화</li>
                  <li className="text-sm leading-relaxed">• 신규 서비스 및 기능 개선 참여</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <h4 className="text-white/90 mb-3">2. 핵심 역량</h4>
                <ul className="space-y-2 pl-4">
                  <li className="text-sm">• 성실성</li>
                  <li className="text-sm">• 성취지향성</li>
                  <li className="text-sm">• 성장지향성</li>
                  <li className="text-sm">• 계획성</li>
                  <li className="text-sm">• 창의성</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <h4 className="text-white/90 mb-3">3. 자격 요건</h4>
                <ul className="space-y-2 pl-4">
                  <li className="text-sm leading-relaxed">• 컴퓨터공학 또는 관련 학과 전공자</li>
                  <li className="text-sm leading-relaxed">• Java, Python, Node.js 중 1개 이상 사용 경험</li>
                  <li className="text-sm leading-relaxed">• 기본적인 자료구조/알고리즘 이해</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD - WINNOW Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-[#141418] to-[#0F0F12] rounded-lg p-8 border border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden"
          >
            {/* Enhanced glow for WINNOW card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gradient-radial from-[#6A6AFB]/[0.12] via-[#4A4AD8]/[0.06] to-transparent blur-2xl -z-10"></div>

            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/[0.12] relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/[0.15] to-white/[0.08] border border-white/[0.12] flex items-center justify-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                <ListChecks className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white">WINNOW 체크리스트 기반 백엔드 공고</h3>
            </div>

            {/* Intro */}
            <p className="text-white/85 mb-6 leading-relaxed relative">
              WINNOW는 우리 팀과 더 잘 맞는 개발자를 찾고 있습니다.<br />
              아래 체크리스트는 지원자가 스스로 적합성을 확인할 수 있도록 만들어졌습니다.
            </p>

            {/* Accordion Sections */}
            <div className="space-y-4 relative">
              {/* Section I */}
              <div className="border border-white/[0.08] rounded-lg overflow-hidden bg-white/[0.02]">
                <button
                  onClick={() => toggleAccordion('section1')}
                  className="w-full flex items-center justify-between p-4 hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-white/90">I. 개발자 지원 요건 (모든 개발자 공통 요건)</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/70 transition-transform ${
                      openAccordions.section1 ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                {openAccordions.section1 && (
                  <div className="px-4 pb-4 pt-2 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/[0.05]"></div>
                      <span className="text-sm text-white/75">새로운 기술을 빠르게 학습하는 편이다</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/[0.05]"></div>
                      <span className="text-sm text-white/75">문제를 깊게 파고드는 성향이다</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/[0.05]"></div>
                      <span className="text-sm text-white/75">논리적으로 설명하는 것을 좋아한다</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/[0.05]"></div>
                      <span className="text-sm text-white/75">팀의 목표를 위해 유연하게 움직일 수 있다</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/[0.05]"></div>
                      <span className="text-sm text-white/75">스스로 일을 찾아서 해결한다</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Section II */}
              <div className="border border-white/[0.08] rounded-lg overflow-hidden bg-white/[0.02]">
                <button
                  onClick={() => toggleAccordion('section2')}
                  className="w-full flex items-center justify-between p-4 hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-white/90">II. 백엔드 개발자 요건</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/70 transition-transform ${
                      openAccordions.section2 ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                {openAccordions.section2 && (
                  <div className="px-4 pb-4 pt-2 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/[0.05]"></div>
                      <span className="text-sm text-white/75">시스템 구조나 아키텍처에 관심이 많다</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/[0.05]"></div>
                      <span className="text-sm text-white/75">트래픽 증가 상황을 예상하고 대비하는 편이다</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/[0.05]"></div>
                      <span className="text-sm text-white/75">코드 품질과 안정성을 꾸준히 점검한다</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Section III */}
              <div className="border border-white/[0.08] rounded-lg overflow-hidden bg-white/[0.02]">
                <button
                  onClick={() => toggleAccordion('section3')}
                  className="w-full flex items-center justify-between p-4 hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-white/90">III. 기술 질문</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/70 transition-transform ${
                      openAccordions.section3 ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                {openAccordions.section3 && (
                  <div className="px-4 pb-4 pt-2">
                    <p className="text-sm text-white/85 mb-3 italic">
                      "아래 질문 중 5개 이상에 명확히 답할 수 있다면 적합합니다."
                    </p>
                    <div className="space-y-2.5">
                      {[
                        'Batch Normalization의 목적은?',
                        'Overfitting을 줄이는 대표적인 방법은?',
                        'Embedding이란?',
                        'Convolution의 의미는?',
                        'RNN과 LSTM의 차이는?',
                        'Self-Supervised Learning이란?',
                        'Knowledge Distillation이란?',
                        'PCA란?',
                        'Law of Large Numbers란?',
                      ].map((question, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/[0.05]"></div>
                          <span className="text-sm text-white/75">{question}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
