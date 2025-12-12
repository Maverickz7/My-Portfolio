
import React, { useRef, useState, ReactNode, useEffect } from 'react';

interface MagneticProps {
  children: ReactNode;
  strength?: number; // 0 to 1, where 1 is strong pull
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices or small screens
    const checkDevice = () => {
        if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isDisabled) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className={`transition-transform duration-200 ease-out w-full sm:w-fit h-fit`}
    >
      {children}
    </div>
  );
};

export default Magnetic;
