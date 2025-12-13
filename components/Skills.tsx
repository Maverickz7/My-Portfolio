import React, { useState, useRef, useEffect } from 'react';
import { SKILLS, TOOLS } from '../constants';
import * as Icons from 'lucide-react';

const getToolData = (toolString: string) => {
  const name = toolString.split('(')[0].trim();
  let level = 3; // 1-5 scale
  const lower = toolString.toLowerCase();
  
  // Refined logic for better variety in the demo
  if (lower.includes('advanced')) level = 5;
  else if (lower.includes('expert')) level = 5;
  else if (lower.includes('basic')) level = 2;
  else if (['Tableau', 'Figma', 'Notion', 'Google Analytics'].includes(name)) level = 4;
  else if (name.includes('Miro')) level = 4;
  else if (name.includes('Python')) level = 2; // Basic per constants
  
  // Map numeric level to text label
  let label = "Intermediate";
  if (level === 5) label = "Expert";
  if (level === 4) label = "Advanced";
  if (level <= 2) label = "Beginner";
  
  return { name, level, label };
};

const getToolIcon = (name: string) => {
    if (name.includes('Tableau')) return Icons.BarChartBig;
    if (name.includes('Power BI')) return Icons.PieChart;
    if (name.includes('Excel')) return Icons.Table2;
    if (name.includes('SQL')) return Icons.Database;
    if (name.includes('Figma')) return Icons.PenTool;
    if (name.includes('Notion')) return Icons.FileText;
    if (name.includes('Jira')) return Icons.KanbanSquare;
    if (name.includes('Google Analytics')) return Icons.LineChart;
    if (name.includes('Miro')) return Icons.Layout;
    if (name.includes('Python')) return Icons.Terminal;
    return Icons.Box; 
}

const ToolCard: React.FC<{ toolString: string }> = ({ toolString }) => {
  const { name, level, label } = getToolData(toolString);
  const Icon = getToolIcon(name);
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [animatedValue, setAnimatedValue] = useState(0);
  
  const percentage = level * 20; // Convert 1-5 scale to percentage

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  useEffect(() => {
    let startTimestamp: number | null = null;
    let reqId: number;
    
    const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 1500, 1); // 1.5s duration matches the bar
        // Exponential ease out for the number counter
        const ease = 1 === progress ? 1 : 1 - Math.pow(2, -10 * progress);
        
        if (hovered) {
            setAnimatedValue(Math.floor(ease * percentage));
        } else {
            setAnimatedValue(0); 
        }

        if (progress < 1 && hovered) {
            reqId = window.requestAnimationFrame(step);
        }
    };

    if (hovered) {
        reqId = window.requestAnimationFrame(step);
    } else {
        setAnimatedValue(0);
    }
    
    return () => window.cancelAnimationFrame(reqId);
  }, [hovered, percentage]);

  return (
    <div 
      ref={cardRef}
      className="spotlight-card group relative bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-xl p-6 transition-all duration-500 hover:border-purple-500/40 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                {/* Icon Container with intensified glow */}
                <div className={`p-2 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                    ${hovered 
                        ? 'bg-purple-500/20 text-purple-600 dark:text-cyan-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-110 border border-purple-500/30' 
                        : 'bg-black/5 dark:bg-white/5 text-gray-500 border border-transparent'
                    }`}
                >
                    <Icon className={`w-5 h-5 transition-all duration-500 ${hovered ? 'drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : ''}`} />
                </div>
                <span className={`text-sm font-medium transition-colors duration-300 ${hovered ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>{name}</span>
            </div>
            
            {/* Right side container - Fixed height for alignment */}
            <div className="relative flex flex-col items-end h-5 justify-center">
                 {/* Label - Exits Up */}
                <span className={`absolute right-0 text-[10px] uppercase tracking-widest font-mono transition-all duration-300 ease-out
                    ${hovered ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'} 
                    text-gray-400 dark:text-gray-600`}
                >
                    {label}
                </span>

                 {/* Numerical Indicator - Enters from Down */}
                <div className={`absolute right-0 flex items-center justify-end transition-all duration-300 ease-out
                    ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                >
                     <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-300 leading-none tracking-tighter filter drop-shadow-sm">
                        {animatedValue}<span className="text-xs align-top opacity-50 ml-0.5">%</span>
                     </span>
                </div>
            </div>
          </div>

          {/* Continuous Progress Bar Container */}
          <div className="w-full h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden mt-2 relative">
            {/* Animated Bar with Liquid Liquid Effect */}
            <div 
                className="h-full rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] relative overflow-hidden"
                style={{ 
                    width: hovered ? `${percentage}%` : '0%',
                    opacity: hovered ? 1 : 0.5
                }}
            >
                {/* Internal Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>
      </div>
    </div>
  );
};

const SkillCard: React.FC<{ skill: any }> = ({ skill }) => {
    const IconComponent = (Icons as any)[skill.iconName] || Icons.Circle;
    const cardRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div 
            ref={cardRef}
            className="spotlight-card glass-panel p-8 rounded-2xl group transition-all duration-500 relative hover:scale-[1.02] hover:border-purple-500/30 bg-white/50 dark:bg-[#0a0a0a]/50"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative z-10 flex flex-col h-full items-center text-center">
                <div className="mb-6 relative">
                    <div className="relative p-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 group-hover:border-purple-500/50 group-hover:bg-purple-500/20 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                        <IconComponent className="w-10 h-10 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.0)] group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                    </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-800 group-hover:to-purple-500 dark:group-hover:from-white dark:group-hover:to-purple-300 transition-all tracking-wide">{skill.category}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors flex-grow">{skill.description}</p>
                
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                    {skill.skills.map((s: string) => (
                        <span key={s} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-gray-500 border border-black/10 dark:border-white/5 rounded bg-black/5 dark:bg-black/40 group-hover:text-purple-600 dark:group-hover:text-cyan-200 group-hover:border-purple-500/30 dark:group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] dark:group-hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all">
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 scroll-mt-20 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tighter mb-6 transition-colors">
                Core <span className="text-purple-600 dark:text-purple-500">Modules</span>.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {SKILLS.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
            ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 justify-center md:justify-start transition-colors">
            <Icons.Cpu className="w-6 h-6 text-purple-600 dark:text-cyan-400" />
            <span className="tracking-widest uppercase text-sm md:text-xl">Technical Arsenal</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOOLS.map((tool, index) => (
                <ToolCard key={index} toolString={tool} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;