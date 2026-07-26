import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline = ({ experience }) => {
    if (!experience || experience.length === 0) return null;

    return (
        <section className="py-24">
            <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                Professional Experience
            </h2>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-primary/20"></div>

                {experience.map((exp, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Center dot */}
                        <div className="absolute left-4 md:left-1/2 -ml-3 md:-ml-4 top-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-900 border-4 border-primary flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                            <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                        </div>

                        {/* Content Box */}
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} w-full`}
                        >
                            <div className="glass-card hover:bg-white/5 transition-colors p-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
                                    {exp.period}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                <h4 className="text-lg text-slate-400 mb-4 font-medium">{exp.organization}</h4>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((task, i) => (
                                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0"></span>
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;
