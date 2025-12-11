import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';
import { useState } from 'react';

export function BetaWaitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }

    // In a real app, this would submit to a backend
    console.log({
      email,
    });

    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Section gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111114] via-[#0C0C0F] to-[#0B0B0D] -z-10"></div>
      
      {/* Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-[#6A6AFB]/[0.15] via-[#4A4AD8]/[0.08] to-transparent blur-3xl -z-10"></div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-[#141418] to-[#0F0F12] rounded-lg p-10 md:p-12 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] relative overflow-hidden"
        >
          {/* Card inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gradient-radial from-[#6A6AFB]/[0.12] to-transparent blur-2xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/[0.08] flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl text-white">곧 오픈합니다.</h2>
            </div>

            <p className="text-xl mb-4 text-white/90">
              AI 기반 JD Builder의 베타 출시 소식을 가장 먼저 받아보세요.
            </p>

            <p className="text-lg mb-8 text-white/78 leading-relaxed">
              현재 3개월 29,000원 구독 모델을 검토 중입니다.<br />
              베타 오픈 시 바로 사용하고 싶다면 아래에서 예약해주세요.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소를 입력해주세요"
                  className="flex-1 px-6 py-4 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/40 focus:bg-white/[0.08] focus:border-white/[0.15] focus:outline-none transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                  required
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="px-8 py-4 bg-white text-[#0B0B0D] rounded-lg hover:bg-white/95 hover:scale-[1.03] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  {submitted ? '신청 완료!' : '베타 얼리 액세스 신청하기'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
