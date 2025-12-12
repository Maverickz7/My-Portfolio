import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "STRATEGY", "DISCOVERY", "RESEARCH", "ANALYSIS", "EXECUTION", "GROWTH", "INSIGHTS"
  ];

  return (
    <div className="w-full py-10 relative z-20 overflow-hidden border-y border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap relative z-10">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center space-x-16 mx-8">
            {items.map((item, index) => (
              <div key={`${i}-${index}`} className="flex items-center gap-16">
                  <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none hover:from-purple-400/50 hover:to-white/10 transition-all duration-500">
                    {item}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-purple-500/20"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;