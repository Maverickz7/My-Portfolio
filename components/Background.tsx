import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white dark:bg-[#020204] transition-colors duration-700">
      
      {/* Subtle Grid Pattern - Inspired by Linear/Stripe */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
        style={{ 
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)', 
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)' 
        }}
      ></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        
        {/* Orb 1 - Top Left (Purple/Violet Accent) */}
        <div 
            className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 dark:opacity-20 animate-blob"
            style={{ backgroundColor: 'var(--color-accent)', animationDelay: '0s' }}
        ></div>
        
        {/* Orb 2 - Top Right (Blueish) */}
        <div 
            className="absolute top-[0%] -right-[20%] w-[60vw] h-[60vw] bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 dark:opacity-20 animate-blob"
            style={{ animationDelay: '4s' }}
        ></div>
        
        {/* Orb 3 - Bottom Left (Pink/Magenta) */}
        <div 
            className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-pink-300 dark:bg-fuchsia-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 dark:opacity-20 animate-blob"
            style={{ animationDelay: '8s' }}
        ></div>

        {/* Orb 4 - Floating highlight */}
         <div 
            className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-purple-200 dark:bg-purple-900/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-30 dark:opacity-10 animate-blob"
            style={{ animationDelay: '12s' }}
        ></div>
        
      </div>
    </div>
  );
};

export default Background;