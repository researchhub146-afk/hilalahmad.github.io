import { motion } from 'framer-motion';

const ProjectGallery = ({ projects }) => {
    // Filter for design projects if category exists
    const designProjects = projects?.filter(p => p.category === 'Design') || [];

    return (
        <section className="py-24">
            <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                Graphic Design Gallery
            </h2>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
                {projects?.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl mb-6 shadow-xl"
                    >
                        <div className="bg-surface overflow-hidden">
                            {project.image_url ? (
                                <img
                                    src={project.image_url}
                                    alt={project.title}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            ) : (
                                <div className="aspect-video bg-white/5 flex items-center justify-center">
                                    <span className="text-slate-600 font-bold opacity-30">{project.category}</span>
                                </div>
                            )}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{project.category}</span>
                            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                            <p className="text-sm text-slate-300 line-clamp-2">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {designProjects.length === 0 && (
                <p className="text-center text-slate-500 italic">No design projects found in the database.</p>
            )}
        </section>
    );
};

export default ProjectGallery;
