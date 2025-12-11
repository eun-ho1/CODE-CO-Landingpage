import { motion } from 'motion/react';
import { MessageCircle, GitPullRequest, ListChecks } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Conversation-based JD Builder',
      description: '빈 문서 앞에서 막막해하지 않아도 됩니다.\n챗봇의 질문에 답하면, AI가 직무 역할·핵심 미션·필요 역량을 자동 정교화합니다.',
      icon: MessageCircle,
      gradient: 'from-[#6A6AFB]/[0.15] to-[#4A4AD8]/[0.05]',
    },
    {
      number: 2,
      title: 'Team Collaboration (PR-style UX)',
      description: 'GitHub Pull Request 방식에서 영감을 얻되,\n누구나 쉽게 의견을 남기고 수정할 수 있는 형태로 JD 완성도를 높입니다.',
      icon: GitPullRequest,
      gradient: 'from-[#7B6AFB]/[0.15] to-[#5A4AD8]/[0.05]',
    },
    {
      number: 3,
      title: 'Checklist-Style Job Posting',
      description: '완성된 JD는 줄글이 아닙니다.\n지원자가 스스로 판단할 수 있는 \'자가진단 체크리스트\' 공고로 자동 변환됩니다.\n허수 지원자가 스스로 걸러지는 구조입니다.',
      icon: ListChecks,
      gradient: 'from-[#8A6AFB]/[0.15] to-[#6A4AD8]/[0.05]',
    },
  ];

  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Section gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111114] via-[#0C0C0F] to-[#111114] -z-10"></div>
      
      {/* Diagonal accent */}
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4 relative inline-block">
            <span className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent">
              How It Works
            </span>
            {/* Headline glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-gradient-radial from-[#6A6AFB]/[0.12] to-transparent blur-3xl -z-10"></div>
          </h2>
          <p className="text-lg text-white/78">
            3단계로 완성되는 정교한 JD
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col md:flex-row gap-8 items-start relative"
              >
                <div className="flex-shrink-0 relative">
                  {/* Icon container with gradient glow */}
                  <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${step.gradient} border border-white/[0.08] flex items-center justify-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] relative overflow-hidden group-hover:scale-[1.05] transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white relative z-10" strokeWidth={1.5} />
                    {/* Inner shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10`}></div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-white/55">Step {step.number}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent"></div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl text-white mb-4 group-hover:text-white/95 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-white/78 leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
