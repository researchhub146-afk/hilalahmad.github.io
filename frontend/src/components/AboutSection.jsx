import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Rocket } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10"></div>
            
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
                        </h2>
                        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                            <p>
                                I am a passionate Software Engineer with a Master's degree in Computer Science, specializing in Machine Learning and full-stack development. With a strong foundation in both academia and industry, I bridge the gap between theoretical algorithms and scalable, real-world applications.
                            </p>
                            <p>
                                Previously serving as a Vice Principal and IT Manager in the government sector, I have developed a unique perspective on technical leadership, system architecture, and delivering software that solves critical administrative and business challenges.
                            </p>
                            <p>
                                My engineering philosophy centers on writing clean, maintainable code and staying at the forefront of modern web technologies and AI integrations. Whether it's architecting a robust backend in Python/Laravel or crafting a beautiful frontend in React, I am dedicated to engineering excellence.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual / Hacker Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="rounded-xl overflow-hidden bg-[#0d1117] border border-[#30363d] shadow-2xl font-mono text-sm"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center px-4 py-3 border-b border-[#30363d] bg-[#161b22]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <div className="mx-auto text-[#8b949e] text-xs">hilal_ahmad_bio.py</div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 text-[#c9d1d9] space-y-4">
                            <div>
                                <span className="text-[#ff7b72]">class</span> <span className="text-[#d2a8ff]">SoftwareEngineer</span>:
                            </div>
                            <div className="pl-4">
                                <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">__init__</span>(<span className="text-[#79c0ff]">self</span>):
                            </div>
                            <div className="pl-8">
                                <span className="text-[#79c0ff]">self</span>.name = <span className="text-[#a5d6ff]">"Hilal Ahmad"</span>
                                <br />
                                <span className="text-[#79c0ff]">self</span>.role = <span className="text-[#a5d6ff]">"Full Stack & AI Engineer"</span>
                                <br />
                                <span className="text-[#79c0ff]">self</span>.education = <span className="text-[#a5d6ff]">"MS Computer Science"</span>
                            </div>
                            
                            <div className="pl-4 mt-4">
                                <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">get_skills</span>(<span className="text-[#79c0ff]">self</span>):
                            </div>
                            <div className="pl-8">
                                <span className="text-[#ff7b72]">return</span> {'{'}
                                <br />
                                <span className="pl-4 text-[#a5d6ff]">"Frontend"</span>: [<span className="text-[#a5d6ff]">"React"</span>, <span className="text-[#a5d6ff]">"TailwindCSS"</span>],
                                <br />
                                <span className="pl-4 text-[#a5d6ff]">"Backend"</span>: [<span className="text-[#a5d6ff]">"Python"</span>, <span className="text-[#a5d6ff]">"Laravel"</span>, <span className="text-[#a5d6ff]">"C++"</span>],
                                <br />
                                <span className="pl-4 text-[#a5d6ff]">"Specialization"</span>: [<span className="text-[#a5d6ff]">"Machine Learning"</span>, <span className="text-[#a5d6ff]">"CV"</span>]
                                <br />
                                {'}'}
                            </div>
                            
                            <div className="mt-4 flex items-center">
                                <span className="text-[#79c0ff] mr-2">~/portfolio</span> <span className="text-[#ff7b72] mr-2">❯</span> python3 hilal_ahmad_bio.py
                            </div>
                            <div className="text-[#27c93f] animate-pulse">System Initialized. Ready for new challenges_</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
