import { motion } from 'motion/react';
import { Sparkles, Users, CheckSquare, ArrowRight } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative px-6 py-24 md:py-40 overflow-hidden">
      {/* Hero radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-white/10 via-white/[0.02] to-transparent blur-3xl -z-10"></div>
      
      {/* Accent glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-[#6A6AFB]/[0.12] via-[#4A4AD8]/[0.06] to-transparent blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl md:text-5xl mb-8 text-white max-w-4xl mx-auto relative leading-tight" style={{ lineHeight: '1.3' }}>
            <span className="bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent">
              지원자는 많은데,<br />'우리&nbsp;팀에&nbsp;맞는&nbsp;사람'은&nbsp;왜&nbsp;이렇게&nbsp;안&nbsp;보일까요?
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-white/78 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          채용의 핵심은 '우리 팀을 성장시킬 사람'을 찾는 것이지만, 현실은 팀 방향성과 맞지 않는 지원자를 걸러내느라 하루가 지나가는 악순환입니다.<br />
          이 문제의 근본 원인을 해결하기 위한 새로운 방법을 소개합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <a
            href="https://code-co-mvp.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0B0B0D] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10">JD 생성 시작하기</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-0.5" />
            
            {/* Button glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-white to-white/95"></div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-8 md:gap-10 text-white/78"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/[0.08] flex items-center justify-center">
              <Sparkles className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
            </div>
            <span>AI 기반 JD Builder</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/[0.08] flex items-center justify-center">
              <Users className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
            </div>
            <span>팀 협업형 검토</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/[0.08] flex items-center justify-center">
              <CheckSquare className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
            </div>
            <span>체크리스트 공고 자동 생성</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}