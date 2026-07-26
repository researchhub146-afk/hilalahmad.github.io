import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const CertificationShowcase = ({ certifications }) => {
    const getLogo = (org) => {
        if (org?.toLowerCase().includes('microsoft')) {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="9.5" height="9.5" fill="#f25022"/>
                  <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7fba00"/>
                  <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00a4ef"/>
                  <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#ffb900"/>
                </svg>
            );
        }
        if (org?.toLowerCase().includes('cisco')) {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-500">
                    <rect x="1" y="12" width="2" height="6" fill="currentColor" />
                    <rect x="5" y="8" width="2" height="10" fill="currentColor" />
                    <rect x="9" y="3" width="2" height="15" fill="currentColor" />
                    <rect x="13" y="3" width="2" height="15" fill="currentColor" />
                    <rect x="17" y="8" width="2" height="10" fill="currentColor" />
                    <rect x="21" y="12" width="2" height="6" fill="currentColor" />
                </svg>
            );
        }
        return <Award className="w-6 h-6 text-primary" />;
    };

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
                                {getLogo(cert.issuing_organization)}
                            </div>
                            {cert.link && (
                                <a
                                    href={cert.link}
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
                            <span>
                                Issued: {isNaN(Date.parse(cert.issue_date)) 
                                    ? cert.issue_date 
                                    : new Date(cert.issue_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </span>
                            {cert.credential_id && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                    <span>ID: {cert.credential_id.substring(0, 15)}</span>
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
