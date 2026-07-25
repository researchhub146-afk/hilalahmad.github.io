import { motion } from 'framer-motion';
import { User, Code, Globe, Coffee } from 'lucide-react';

const AboutSection = ({ bio }) => {
    return (
        <section id="about" className="py-24 max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side: Text content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                        <User className="w-8 h-8 text-primary" />
                        About Me
                    </h2>
                    <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                        <p>{bio}</p>
                        <p>
                            I specialize in bridging the gap between exceptional design and robust engineering. 
                            My approach focuses on creating scalable, user-centric applications that not only look 
                            beautiful but perform flawlessly under pressure.
                        </p>
                        <p>
                            When I'm not coding or designing, I'm usually exploring new technologies, 
                            contributing to open-source projects, or optimizing my workflows.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-white">10+</span>
                            <span className="text-sm text-slate-500 uppercase font-bold">Years Exp.</span>
                        </div>
                        <div className="w-px bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-white">50+</span>
                            <span className="text-sm text-slate-500 uppercase font-bold">Projects</span>
                        </div>
                        <div className="w-px bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-white">100%</span>
                            <span className="text-sm text-slate-500 uppercase font-bold">Commitment</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right side: Visuals/Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                >
                    <div className="glass-card p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                        <Code className="w-8 h-8 text-primary mb-3" />
                        <h4 className="font-bold text-white">Clean Code</h4>
                        <p className="text-xs text-slate-400 mt-2">Writing maintainable and scalable solutions.</p>
                    </div>
                    <div className="glass-card p-6 flex flex-col items-center text-center hover:border-secondary/50 transition-colors mt-8">
                        <Globe className="w-8 h-8 text-secondary mb-3" />
                        <h4 className="font-bold text-white">Global Reach</h4>
                        <p className="text-xs text-slate-400 mt-2">Delivering products for international clients.</p>
                    </div>
                    <div className="glass-card p-6 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors -mt-8">
                        <Coffee className="w-8 h-8 text-emerald-500 mb-3" />
                        <h4 className="font-bold text-white">Problem Solver</h4>
                        <p className="text-xs text-slate-400 mt-2">Turning complex issues into elegant solutions.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
