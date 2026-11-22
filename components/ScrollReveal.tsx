import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { isReducedMotionPreferred } from '../utils/smoothScroll';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  distance = 18,
  duration = 600,
  once = true,
  style = {},
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    delay,
    once,
    threshold: 0.12,
  });

  const reducedMotion = isReducedMotionPreferred();

  const getTransform = () => {
    if (reducedMotion || isVisible || direction === 'none') return 'none';
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return 'none';
    }
  };

  const dynamicStyle: React.CSSProperties = {
    ...style,
    opacity: isVisible || reducedMotion ? 1 : 0,
    transform: getTransform(),
    transition: reducedMotion
      ? 'none'
      : `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <div ref={ref} className={className} style={dynamicStyle}>
      {children}
    </div>
  );
};

export default ScrollReveal;

