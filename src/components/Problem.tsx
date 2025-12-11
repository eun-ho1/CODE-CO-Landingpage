import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

export function Problem() {
  const problems = [
    '엉뚱한 지원자 필터링에 너무 많은 시간을 뺏김',
    'JD가 중요한 건 알고 있지만… 자세히 작성할 시간은 없음',
    '팀에서 어떤 역량이 진짜 중요한지 정리하는 것도 부담',
    '결국 \'모호한 공고 → 묻지마 지원\'이 반복되는 구조',
  ];

  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Section gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111114] via-[#0C0C0F] to-[#111114] -z-10"></div>
      
      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6 text-white relative inline-block">
            <span className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent">
              왜 채용은 여전히 이렇게 힘들까요?
            </span>
            {/* Subtle glow behind headline */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-gradient-radial from-[#6A6AFB]/[0.15] to-transparent blur-3xl -z-10"></div>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 mb-12"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-start gap-4 p-6 bg-[#141418] rounded-lg border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <AlertCircle className="w-6 h-6 text-white/90 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <p className="text-lg text-white/78 relative">{problem}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center p-8 bg-gradient-to-br from-[#141418] to-[#0F0F12] rounded-lg border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] relative overflow-hidden"
        >
          {/* Accent gradient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-gradient-radial from-[#6A6AFB]/[0.1] to-transparent blur-2xl"></div>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed relative">
            문제는 '채용 공고'가 아니라<br />
            <span className="text-white bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">'설계도(JD) 없이 채용을 시작하는 구조'</span>에 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
