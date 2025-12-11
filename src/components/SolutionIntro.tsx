import { motion } from 'motion/react';

export function SolutionIntro() {
  return (
    <section className="relative px-6 py-20 md:py-28 overflow-hidden">
      {/* Section gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C0F] to-transparent -z-10"></div>
      
      {/* Subtle glow behind subheading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-radial from-[#6A6AFB]/[0.10] via-[#4A4AD8]/[0.05] to-transparent blur-3xl -z-10"></div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-white relative inline-block">
            그래서 우리는 WINNOW를 만들었습니다.
          </h2>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            WINNOW는 JD를 작성하는 과정을 자동화하고, 지원자가 스스로 적합성을 판단하는 체크리스트 기반 공고를 생성하여 허수 지원자를 획기적으로 줄이는 도구입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
