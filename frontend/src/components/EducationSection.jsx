import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const EducationSection = ({ education }) => {
    if (!education || education.length === 0) return null;

    return (
        <section className="py-24 bg-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            
            <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                Academic Background
            </h2>

            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-8 hover:border-primary/40 transition-all group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-slate-300 flex items-center gap-1 border border-white/5">
                                <Calendar className="w-3 h-3" /> {edu.period}
                            </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <h4 className="text-lg text-primary font-medium mb-4">{edu.institution}</h4>
                        
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <MapPin className="w-4 h-4 text-slate-500" />
                                <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Award className="w-4 h-4 text-slate-500" />
                                <span>Final Grade: <strong className="text-white">{edu.grade}</strong></span>
                            </div>
                        </div>

                        {edu.thesis && (
                            <div className="p-4 rounded-lg bg-slate-900/50 border border-white/5 text-sm">
                                <strong className="text-primary block mb-1">Thesis / Specialization:</strong>
                                <span className="text-slate-300 italic">{edu.thesis}</span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
