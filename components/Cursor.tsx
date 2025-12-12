import React, { useEffect, useState, useRef } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    
    // Add hide-cursor class to body to hide default cursor only when this component is active
    document.body.classList.add('hide-cursor');
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Direct cursor (Dot)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
      
      // Follower (Aura)
      if (followerRef.current) {
        followerRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 500, fill: "forwards" }); 
      }
    };

    const addLinkEvents = () => {
      document.querySelectorAll('a, button, [role="button"], .cursor-hover, .spotlight-card').forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    const removeLinkEvents = () => {
      document.querySelectorAll('a, button, [role="button"], .cursor-hover, .spotlight-card').forEach((el) => {
        el.removeEventListener('mouseenter', () => setHovered(true));
        el.removeEventListener('mouseleave', () => setHovered(false));
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    addLinkEvents();

    // Re-add events periodically for dynamic content
    const observer = new MutationObserver(addLinkEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove('hide-cursor');
      document.removeEventListener('mousemove', onMouseMove);
      removeLinkEvents();
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Center Dot - High Precision */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] custom-cursor"
      >
        <div
            className={`rounded-full bg-purple-500 shadow-[0_0_10px_2px_rgba(168,85,247,0.5)] transition-all duration-300 ease-out ${
                hovered ? 'w-2 h-2 opacity-50' : 'w-3 h-3'
            }`}
        />
      </div>
      
      {/* Aura Follower */}
      <div 
         ref={followerRef}
         className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 custom-cursor"
      >
          <div className={`rounded-full border backdrop-blur-[1px] transition-all duration-500 ease-out flex items-center justify-center ${
              hovered 
              ? 'w-24 h-24 bg-purple-500/10 border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.2)]' 
              : 'w-12 h-12 bg-cyan-500/5 border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]'
          }`}>
             {/* Inner Ring */}
             <div className={`rounded-full border border-white/10 transition-all duration-500 ${hovered ? 'w-16 h-16 opacity-100' : 'w-full h-full opacity-0'}`}></div>
          </div>
      </div>
    </>
  );
};

export default Cursor;