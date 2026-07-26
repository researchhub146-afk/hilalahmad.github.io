import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';

const PublicationsSection = ({ publications }) => {
    if (!publications || publications.length === 0) return null;

    return (
        <section className="py-24 max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                Publications & Research
            </h2>

            <div className="space-y-8">
                {publications.map((pub, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-8 border-l-4 border-l-primary relative overflow-hidden"
                    >
                        <Quote className="absolute right-8 top-8 w-24 h-24 text-white/5 -z-10" />
                        
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                            <div>
                                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-3">
                                    Published: {pub.year}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                    {pub.title}
                                </h3>
                                <p className="text-sm text-slate-400 font-medium">
                                    <strong className="text-slate-300">Authors:</strong> {pub.authors}
                                </p>
                            </div>
                            
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white/5 hover:bg-primary/20 hover:text-primary text-slate-300 px-4 py-2 rounded-lg transition-colors whitespace-nowrap border border-white/10 shrink-0"
                            >
                                <span>Read Paper</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-xl text-slate-300 text-sm leading-relaxed border border-white/5 mb-6">
                            <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Abstract
                            </h4>
                            <p>{pub.abstract}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {pub.keywords.map(keyword => (
                                <span key={keyword} className="px-3 py-1 bg-white/5 text-slate-400 text-xs rounded-full border border-white/5">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PublicationsSection;
