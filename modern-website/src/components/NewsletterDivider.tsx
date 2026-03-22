import React from 'react';
import chakraImg from '../assets/chakra.png';
import lotusImg from '../assets/lotus.png';

const NewsletterDivider: React.FC = () => {
  return (
    <div className="reveal-ready relative flex items-center justify-center py-2">
      <img
        src={lotusImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-1/2 hidden w-16 -translate-y-1/2 rotate-[-12deg] opacity-[0.1] mix-blend-multiply sm:block"
      />
      <img
        src={lotusImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-1/2 hidden w-16 -translate-y-1/2 rotate-[18deg] opacity-[0.1] mix-blend-multiply sm:block"
      />
      <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(179,93,76,0.28),transparent)]" />
      <div className="mx-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#b35d4c]/18 bg-[rgba(255,250,246,0.94)] shadow-[0_12px_24px_rgba(146,92,79,0.1)]">
        <img src={chakraImg} alt="" aria-hidden="true" className="h-9 w-9 object-contain mix-blend-multiply" />
      </div>
      <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(179,93,76,0.28),transparent)]" />
    </div>
  );
};

export default NewsletterDivider;
