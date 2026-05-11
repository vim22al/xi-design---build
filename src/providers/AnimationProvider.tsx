'use client';

import { ReactNode, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function AnimationProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  useGSAP(() => {
    // Global GSAP animations or defaults can go here
  });

  return <>{children}</>;
}
