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

                    {/* Visual / Feature Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="glass-card flex flex-col items-center text-center p-8 hover:-translate-y-2 transition-transform duration-300">
                            <div className="p-4 rounded-full bg-primary/20 mb-4">
                                <Code2 className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-bold text-white mb-2">Clean Architecture</h3>
                            <p className="text-sm text-slate-400">Scalable & maintainable codebases</p>
                        </div>

                        <div className="glass-card flex flex-col items-center text-center p-8 hover:-translate-y-2 transition-transform duration-300 translate-y-8">
                            <div className="p-4 rounded-full bg-secondary/20 mb-4">
                                <Cpu className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="font-bold text-white mb-2">AI & ML</h3>
                            <p className="text-sm text-slate-400">Intelligent system integration</p>
                        </div>

                        <div className="glass-card flex flex-col items-center text-center p-8 hover:-translate-y-2 transition-transform duration-300">
                            <div className="p-4 rounded-full bg-emerald-500/20 mb-4">
                                <Globe className="w-8 h-8 text-emerald-500" />
                            </div>
                            <h3 className="font-bold text-white mb-2">Web Technologies</h3>
                            <p className="text-sm text-slate-400">Modern full-stack development</p>
                        </div>

                        <div className="glass-card flex flex-col items-center text-center p-8 hover:-translate-y-2 transition-transform duration-300 translate-y-8">
                            <div className="p-4 rounded-full bg-accent/20 mb-4">
                                <Rocket className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="font-bold text-white mb-2">Performance</h3>
                            <p className="text-sm text-slate-400">Optimized for speed & scale</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
