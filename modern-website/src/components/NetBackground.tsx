import React, { useEffect, useRef } from 'react';
import type * as ThreeModule from 'three';

type VantaEffect = {
  destroy: () => void;
};

const NetBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    let isDisposed = false;

    const loadEffect = async () => {
      const [{ default: NET }, threeModule] = await Promise.all([
        import('vanta/dist/vanta.net.min'),
        import('three')
      ]);

      if (isDisposed || !containerRef.current) {
        return;
      }

      effectRef.current?.destroy();
      effectRef.current = NET({
        el: containerRef.current,
        THREE: threeModule as typeof ThreeModule,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        backgroundColor: 0x04131b,
        color: 0xf3d7ab,
        points: 10,
        maxDistance: 22,
        spacing: 18,
        showDots: false,
        scale: 1,
        scaleMobile: 1
      });
    };

    void loadEffect();

    return () => {
      isDisposed = true;
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className="absolute inset-0" />;
};

export default NetBackground;
