import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const CertificationShowcase = ({ certifications }) => {
    return (
        <section className="py-24">
            <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                Professional certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {certifications?.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card group hover:bg-white/5"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 glass rounded-xl bg-primary/10">
                                <Award className="w-6 h-6 text-primary" />
                            </div>
                            {cert.credential_url && (
                                <a
                                    href={cert.credential_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-white transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>

                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{cert.name}</h3>
                        <p className="text-primary/80 font-medium text-sm mb-4">{cert.issuing_organization}</p>

                        <div className="text-xs text-slate-500 flex items-center gap-2">
                            <span>Issued: {new Date(cert.issue_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                            {cert.credential_id && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                    <span>ID: {cert.credential_id.substring(0, 8)}...</span>
                                </>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CertificationShowcase;
