"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string;
  duration?: number;
}

export function Counter({ value, duration = 1600 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);

  // Parse prefix, number, decimal part, suffix
  // e.g. "3.92" -> prefix="", num=3.92, isFloat=true
  // e.g. "50+" -> prefix="", num=50, suffix="+"
  // e.g. "2x" -> prefix="", num=2, suffix="x"
  const isDecimal = value.includes(".");
  const numericMatch = value.match(/([0-9]+(\.[0-9]+)?)/);
  const rawNum = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const numStr = numericMatch ? numericMatch[0] : "";
  const prefix = numStr ? value.slice(0, value.indexOf(numStr)) : "";
  const suffix = numStr ? value.slice(value.indexOf(numStr) + numStr.length) : "";

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-40px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || !rawNum) return;

    let start: number | null = null;
    let rafId = 0;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = eased * rawNum;

      const formatted = isDecimal
        ? currentVal.toFixed(2)
        : Math.round(currentVal).toLocaleString();

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, rawNum, duration, prefix, suffix, isDecimal]);

  return <span ref={ref}>{displayValue}</span>;
}
