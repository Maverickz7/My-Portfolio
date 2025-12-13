import React, { useState, useRef, useEffect } from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, ImageIcon, Maximize2, Minimize2, Loader2 } from 'lucide-react';
import { CaseStudy } from '../types';

const CaseStudyCard: React.FC<{ study: CaseStudy; onClick: () => void; index: number }> = ({ study, onClick, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);

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
            onClick={onClick}
            onMouseMove={handleMouseMove}
            className="spotlight-card group relative h-[400px] md:h-[500px] bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-900/30 z-10"
        >
            {/* Image Placeholder / Abstract Gradient - High Definition Blur */}
            <div className={`absolute -inset-20 bg-gradient-to-br opacity-10 dark:opacity-20 transition-opacity duration-700 group-hover:opacity-20 dark:group-hover:opacity-40 blur-[80px]
                ${index % 3 === 0 ? 'from-purple-500 via-purple-900/30 to-transparent' : ''}
                ${index % 3 === 1 ? 'from-blue-500 via-blue-900/30 to-transparent' : ''}
                ${index % 3 === 2 ? 'from-indigo-500 via-indigo-900/30 to-transparent' : ''}
            `}></div>

            {/* Optional Background Image Hint if available */}
            {study.images && study.images.length > 0 && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-cover bg-center grayscale group-hover:grayscale-0" style={{ backgroundImage: `url(${study.images[0]})` }}></div>
            )}

            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    <span className="font-mono text-sm text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">0{index + 1}</span>
                    <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-md group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <ArrowUpRight className="text-gray-900 dark:text-white w-5 h-5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                    </div>
                </div>
                
                <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-md">
                        {study.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-md group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                        {study.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {study.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 border border-black/5 dark:border-white/10 text-gray-500 dark:text-gray-500 bg-black/5 dark:bg-black/20 group-hover:border-purple-500/30 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors backdrop-blur-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
    
    // Swipe state
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleImageLoad = (index: number) => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
    };

    // Keyboard & Swipe logic
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Only handle keys if NOT combined with modifiers (to avoid conflict with Project Navigation)
            if (e.altKey || e.ctrlKey || e.metaKey) return;

            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullscreen]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextImage();
        if (isRightSwipe) prevImage();

        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className={`select-none transition-all duration-500 ${isFullscreen ? 'fixed inset-0 z-[150] bg-black p-0' : 'mb-12 relative'}`}>
            {/* Close Fullscreen Button */}
            {isFullscreen && (
                <button 
                    onClick={() => setIsFullscreen(false)}
                    className="absolute top-6 right-6 p-3 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-white/20 z-[160] transition-colors"
                >
                    <Minimize2 size={24} />
                </button>
            )}

            {/* Main Viewer */}
            <div 
                className={`relative w-full overflow-hidden bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 group shadow-2xl ${isFullscreen ? 'h-full border-none rounded-none' : 'aspect-video rounded-xl'}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((img, idx) => (
                    <div 
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                         {/* Loading Placeholder */}
                         <div className={`absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-zinc-900 transition-opacity duration-500 ${loadedImages[idx] ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                            <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
                         </div>

                         <img 
                            src={img} 
                            alt={`Gallery ${idx + 1}`} 
                            loading="lazy"
                            onLoad={() => handleImageLoad(idx)}
                            style={{ transition: 'transform 10s linear, opacity 0.5s ease-in-out' }}
                            className={`w-full h-full object-cover ${idx === currentIndex ? 'scale-110' : 'scale-100'} ${loadedImages[idx] ? 'opacity-100' : 'opacity-0'}`} 
                        />
                         {/* Vignette */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                    </div>
                ))}

                {/* Fullscreen Toggle (only in non-fullscreen) */}
                {!isFullscreen && (
                    <button 
                        onClick={() => setIsFullscreen(true)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-white/20 transition-all z-20 opacity-0 group-hover:opacity-100"
                    >
                        <Maximize2 size={18} />
                    </button>
                )}

                {/* Controls */}
                <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-white/30 hover:scale-110 transition-all z-20 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-white/30 hover:scale-110 transition-all z-20 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                >
                    <ChevronRight size={24} />
                </button>
                
                {/* Caption / Counter */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-20 bg-gradient-to-t from-black/80 to-transparent ${isFullscreen ? 'pb-12 px-12' : ''}`}>
                     <div className="text-white">
                        <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Project Asset</p>
                        <p className="text-sm font-medium">Image {currentIndex + 1} of {images.length}</p>
                     </div>
                </div>
            </div>

            {/* Thumbnails (Hidden in Fullscreen for cleaner view) */}
            {!isFullscreen && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide justify-center px-4">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                                idx === currentIndex 
                                    ? 'border-purple-600 dark:border-purple-400 opacity-100 ring-2 ring-purple-500/30 translate-y-0' 
                                    : 'border-transparent opacity-40 hover:opacity-80 hover:-translate-y-1'
                            }`}
                        >
                            <img src={img} alt={`Thumb ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
                            {idx === currentIndex && <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay"></div>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const CaseStudies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Derive navigation
  const currentIndex = selectedStudy ? CASE_STUDIES.findIndex(s => s.id === selectedStudy.id) : -1;
  const prevStudy = currentIndex > 0 ? CASE_STUDIES[currentIndex - 1] : null;
  const nextStudy = currentIndex >= 0 && currentIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[currentIndex + 1] : null;

  const navigateTo = (study: CaseStudy) => {
    setSelectedStudy(study);
  };

  // Reset scroll on study change
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedStudy]);

  // Handle escape key and Project Navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedStudy(null);
        
        // Alt + Arrows for project navigation
        if (e.altKey) {
            if (e.key === 'ArrowLeft' && prevStudy) navigateTo(prevStudy);
            if (e.key === 'ArrowRight' && nextStudy) navigateTo(nextStudy);
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevStudy, nextStudy]);

  return (
    <section id="projects" className="py-32 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-5xl md:text-9xl font-bold text-gray-900 dark:text-white tracking-tighter mb-24 opacity-90 text-center md:text-left">
            SELECTED<br/>WORKS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard 
                key={study.id} 
                study={study} 
                index={index} 
                onClick={() => setSelectedStudy(study)} 
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 animate-fade-in-up">
            <div 
                className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-3xl transition-all duration-500" 
                onClick={() => setSelectedStudy(null)} 
            />
            
            {/* Fixed Project Navigation Arrows (Desktop) */}
            {prevStudy && (
                <button 
                    onClick={(e) => { e.stopPropagation(); navigateTo(prevStudy); }}
                    className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-white/10 dark:bg-black/20 hover:bg-purple-500/20 border border-black/10 dark:border-white/10 backdrop-blur-md text-gray-900 dark:text-white transition-all hover:scale-110 group"
                    aria-label="Previous Project"
                >
                    <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {prevStudy.title}
                    </span>
                </button>
            )}
            {nextStudy && (
                <button 
                    onClick={(e) => { e.stopPropagation(); navigateTo(nextStudy); }}
                    className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-white/10 dark:bg-black/20 hover:bg-purple-500/20 border border-black/10 dark:border-white/10 backdrop-blur-md text-gray-900 dark:text-white transition-all hover:scale-110 group"
                    aria-label="Next Project"
                >
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {nextStudy.title}
                    </span>
                </button>
            )}

            <div className="relative w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] flex flex-col bg-white dark:bg-[#050505] md:border border-black/10 dark:border-white/10 md:rounded-2xl shadow-2xl shadow-purple-900/10 overflow-hidden">
                
                {/* Sticky Header */}
                <div className="flex-shrink-0 h-16 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-6 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md z-20">
                    <span className="text-purple-600 dark:text-purple-500 text-xs font-mono tracking-widest uppercase truncate max-w-[200px] md:max-w-none">
                        {currentIndex + 1} / {CASE_STUDIES.length} — {selectedStudy.title}
                    </span>
                    <button 
                        onClick={() => setSelectedStudy(null)}
                        className="p-2 rounded-full bg-black/5 dark:bg-white/5 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div ref={scrollRef} className="flex-grow overflow-y-auto scrollbar-hide p-6 md:p-12">
                    
                    {/* Header Section */}
                    <div className="max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{selectedStudy.title}</h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">{selectedStudy.summary}</p>
                        
                        <div className="mt-8 flex flex-wrap gap-2">
                            {selectedStudy.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-500/20 rounded-full text-xs font-medium text-purple-700 dark:text-purple-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="mb-16 -mx-6 md:-mx-12 lg:mx-0">
                         {selectedStudy.images && selectedStudy.images.length > 0 ? (
                            <ImageGallery images={selectedStudy.images} />
                        ) : (
                            <div className="w-full h-48 bg-black/5 dark:bg-white/5 flex items-center justify-center border-y border-black/5 dark:border-white/5 border-dashed">
                                 <div className="flex flex-col items-center gap-2 text-gray-400">
                                    <ImageIcon size={32} />
                                    <span className="text-xs tracking-widest uppercase">No visual assets available</span>
                                 </div>
                            </div>
                        )}
                    </div>

                    {/* Detailed Content */}
                    <div className="max-w-3xl mx-auto grid gap-12 text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-purple-600 dark:bg-purple-500 block"></span>
                                    Challenge
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-lg">{selectedStudy.problem}</p>
                            </div>
                            
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-purple-600 dark:bg-purple-500 block"></span>
                                    Approach
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-lg">{selectedStudy.approach}</p>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-white/5 p-8 border border-black/5 dark:border-white/10 rounded-2xl relative overflow-hidden group">
                             <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
                             <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4 relative z-10">Outcome</h4>
                             <p className="text-gray-900 dark:text-white text-xl md:text-2xl font-medium relative z-10">{selectedStudy.outcome}</p>
                        </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
                        {prevStudy ? (
                             <button 
                                onClick={() => navigateTo(prevStudy)}
                                className="text-left group md:hidden"
                             >
                                <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Previous</span>
                                <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex items-center gap-1">
                                    <ChevronLeft size={14} /> {prevStudy.title.substring(0, 15)}...
                                </span>
                             </button>
                        ) : <div></div>}

                        {nextStudy ? (
                            <button 
                                onClick={() => navigateTo(nextStudy)}
                                className="group w-full md:w-auto text-right md:ml-auto pl-8"
                            >
                                <span className="block text-xs uppercase tracking-widest text-gray-400 mb-2 group-hover:text-purple-500 transition-colors">Next Case Study</span>
                                <div className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex items-center justify-end gap-3">
                                    {nextStudy.title} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </button>
                        ) : (
                             <div className="text-right w-full">
                                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">End of Portfolio</span>
                                <button onClick={() => setSelectedStudy(null)} className="text-lg font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                    Back to Overview
                                </button>
                             </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;