import { motion, AnimatePresence } from 'motion/react';
import { X, Mail } from 'lucide-react';
import { useState } from 'react';

interface CTAPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CTAPopup({ isOpen, onClose }: CTAPopupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }

    // In a real app, this would submit to a backend
    console.log('Email submitted:', email);

    setSubmitted(true);
    
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <div className="bg-gradient-to-br from-[#141418] to-[#0F0F12] border border-white/[0.08] rounded-lg max-w-lg w-full p-8 md:p-10 relative shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.04)] overflow-hidden">
              {/* Inner glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-gradient-radial from-[#6A6AFB]/[0.15] to-transparent blur-2xl"></div>
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/[0.08] transition-all duration-200 group"
              >
                <X className="w-6 h-6 text-white/75 group-hover:text-white transition-colors" strokeWidth={1.5} />
              </button>

              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/[0.08] flex items-center justify-center mb-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl text-white mb-4">
                  아직 준비 중이에요!
                </h2>

                {/* Message */}
                <p className="text-lg text-white/78 mb-8 leading-relaxed">
                  지금 이메일을 남겨주시면<br />
                  베타 출시 시 가장 먼저 안내드릴게요.<br />
                  <span className="text-white/95">초기 사용자만의 혜택도 제공됩니다.</span>
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 주소를 입력해주세요"
                    className="w-full px-6 py-4 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/40 focus:bg-white/[0.08] focus:border-white/[0.15] focus:outline-none transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                    required
                    disabled={submitted}
                  />
                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full px-6 py-4 bg-white text-[#0B0B0D] rounded-lg hover:bg-white/95 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                  >
                    {submitted ? '알림 신청 완료! ✓' : '알림받기'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
