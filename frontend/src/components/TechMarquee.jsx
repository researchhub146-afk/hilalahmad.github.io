import React from 'react';

const technologies = [
    { name: 'Python', color: 'text-blue-500' },
    { name: 'React', color: 'text-cyan-400' },
    { name: 'Laravel', color: 'text-red-500' },
    { name: 'PHP', color: 'text-indigo-400' },
    { name: 'C/C++', color: 'text-blue-600' },
    { name: 'MySQL', color: 'text-orange-500' },
    { name: 'TailwindCSS', color: 'text-teal-400' },
    { name: 'Machine Learning', color: 'text-emerald-400' },
    { name: 'Computer Vision', color: 'text-purple-400' },
    { name: 'CISCO Networking', color: 'text-cyan-600' },
];

const TechMarquee = () => {
    return (
        <div className="w-full py-8 bg-white/5 border-y border-white/10 overflow-hidden relative flex">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
                {/* Triple the list to create a seamless infinite scroll loop */}
                {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
                    <div key={idx} className="flex items-center mx-8 group cursor-pointer">
                        <span className={`text-2xl md:text-3xl font-black uppercase tracking-widest ${tech.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md`}>
                            {tech.name}
                        </span>
                        <span className="ml-16 text-white/20 text-3xl">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechMarquee;
