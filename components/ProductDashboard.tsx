import React from 'react';
import { PRODUCT_DASHBOARD } from '../constants';

const ProductDashboard: React.FC = () => {
  return (
    <section id="dashboard" className="py-32 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter">
            IMPACT <span className="text-purple-500">MATRIX</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10">
          {PRODUCT_DASHBOARD.map((item, index) => (
            <div key={item.id} className="p-10 border-r border-b border-white/10 group hover:bg-white/5 transition-colors duration-300 relative">
                <div className="absolute top-4 right-4 text-xs font-mono text-gray-700 group-hover:text-purple-500">
                    0{index + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.area}</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {item.application}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDashboard;