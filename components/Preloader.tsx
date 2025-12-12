import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500 ${
        isFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="font-mono text-purple-500 text-6xl font-bold">
            {count}%
        </div>
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
                className="h-full bg-purple-500 transition-all duration-75"
                style={{ width: `${count}%` }}
            />
        </div>
        <div className="text-xs text-gray-600 font-mono tracking-widest uppercase mt-2">
            Initializing System...
        </div>
      </div>
    </div>
  );
};

export default Preloader;