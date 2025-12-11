import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export function BeforeAfter() {
  const before = [
    '묻지마 지원 폭주',
    '하루 종일 스크리닝',
    'JD 작성은 부담이라 미룸',
    '조직과 맞지 않는 인재 비율 증가',
  ];

  const after = [
    '정확한 JD → 공고 품질 상승',
    '지원자 스스로 적합성 체크',
    '허수 지원자 대폭 감소',
    '검증된 인재만 빠르게 검토',
    '채용 성공률 상승 & 시간 절약',
  ];

  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Section gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C0F] to-transparent -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-white relative inline-block">
            <span className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent">
              Before & After
            </span>
            {/* Headline glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-gradient-radial from-[#6A6AFB]/[0.12] to-transparent blur-3xl -z-10"></div>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group bg-gradient-to-br from-[#141418] to-[#0F0F12] rounded-lg p-8 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] relative overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/[0.08] flex items-center justify-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                <X className="w-7 h-7 text-white/80" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-white">Before</h3>
            </div>

            <ul className="space-y-4 relative">
              {before.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="text-lg text-white/78">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group bg-gradient-to-br from-[#141418] to-[#0F0F12] rounded-lg p-8 border border-white/[0.12] hover:border-white/[0.18] transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden"
          >
            {/* Enhanced glow for After */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6A6AFB]/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-gradient-radial from-[#6A6AFB]/[0.08] to-transparent blur-2xl"></div>
            
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white to-white/95 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <Check className="w-7 h-7 text-[#0B0B0D]" strokeWidth={2} />
              </div>
              <h3 className="text-2xl text-white">After</h3>
            </div>

            <ul className="space-y-4 relative">
              {after.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="text-lg text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
