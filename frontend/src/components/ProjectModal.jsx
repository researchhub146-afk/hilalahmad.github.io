import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2 } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card p-0 shadow-2xl border border-white/10 flex flex-col bg-surface/95"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-primary transition-colors z-10 border border-white/10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Banner Image (if available) */}
                        <div className="w-full h-48 sm:h-64 bg-slate-800 relative overflow-hidden flex-shrink-0">
                            {project.image_url ? (
                                <img 
                                    src={import.meta.env.BASE_URL + project.image_url.replace('/hilalahmad.github.io/', '')} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover opacity-80"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                                    <Code2 className="w-24 h-24 text-white/20" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-surface/95 to-transparent"></div>
                            
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                                    {project.category}
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                                    {project.title}
                                </h2>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 flex-grow">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                
                                {/* Left Column: Description & Details */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 border-b border-white/10 pb-2">Overview</h3>
                                        <p className="text-slate-300 leading-relaxed text-lg">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 border-b border-white/10 pb-2">Key Features</h3>
                                        <ul className="space-y-2 text-slate-300">
                                            <li className="flex items-start gap-2">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <span>Robust system architecture tailored for high performance and scalability.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <span>Modern user interface designed for optimal user experience and accessibility.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <span>Secure data handling and optimized backend queries.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column: Tech Stack & Links */}
                                <div className="space-y-6">
                                    <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                                        <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-sm text-primary">Technology Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech_stack?.map(tech => (
                                                <span key={tech} className="px-3 py-1.5 bg-background border border-white/10 text-slate-300 text-sm rounded-lg flex items-center gap-2">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {project.link && (
                                        <div className="space-y-3">
                                            <a 
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                                            >
                                                <ExternalLink className="w-5 h-5" /> View Live Source
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
