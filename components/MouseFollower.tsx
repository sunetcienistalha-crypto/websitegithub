"use client";

import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const blobRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const raf = useRef(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const lerp = 0.08;
      pos.current.x += (target.current.x - pos.current.x) * lerp;
      pos.current.y += (target.current.y - pos.current.y) * lerp;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`;
      }
      if (ringRef.current) {
        const ringLerp = 0.12;
        const rx = pos.current.x + (target.current.x - pos.current.x) * ringLerp;
        const ry = pos.current.y + (target.current.y - pos.current.y) * ringLerp;
        ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouse);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Large glow blob */}
      <div
        ref={blobRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, rgba(236,72,153,0.04) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          willChange: "transform",
        }}
      />
      {/* Small ring cursor */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[60] hidden md:block"
        style={{
          border: "1.5px solid rgba(167, 139, 250, 0.3)",
          borderRadius: "50%",
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
