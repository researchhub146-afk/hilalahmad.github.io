import { motion } from 'framer-motion';
import { Layers, Monitor, Target, Palette } from 'lucide-react';

const SkillMatrix = () => {
    const quadrants = [
        {
            title: 'Core Engineering',
            icon: <Monitor className="w-8 h-8 text-blue-400" />,
            skills: ['Laravel 11', 'React 19', 'Python/Django', 'Systems Architecture', 'MySQL/PostgreSQL'],
            gradient: 'from-blue-500/20 to-blue-600/20'
        },
        {
            title: 'Digital Marketing',
            icon: <Target className="w-8 h-8 text-rose-400" />,
            skills: ['Performance Marketing', 'SEO Optimization', 'Google Ads', 'Analytics & Power BI', 'Lead Gen'],
            gradient: 'from-rose-500/20 to-rose-600/20'
        },
        {
            title: 'Graphic Design',
            icon: <Palette className="w-8 h-8 text-violet-400" />,
            skills: ['UI/UX (Figma)', 'Adobe Creative Suite', 'Brand Identity', 'Typography', 'Motion Design'],
            gradient: 'from-violet-500/20 to-violet-600/20'
        },
        {
            title: 'Network & Cloud',
            icon: <Layers className="w-8 h-8 text-emerald-400" />,
            skills: ['CISCO CCNA', 'Microsoft Azure', 'VPS Management', 'CI/CD Pipelines', 'Security Compliance'],
            gradient: 'from-emerald-500/20 to-emerald-600/20'
        }
    ];

    return (
        <section className="py-24">
            <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                The Skill matrix
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {quadrants.map((quad, index) => (
                    <motion.div
                        key={quad.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5 }}
                        transition={{ delay: index * 0.1 }}
                        className={`glass-card bg-gradient-to-br ${quad.gradient} relative overflow-hidden group`}
                    >
                        <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            {quad.icon}
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 glass rounded-xl">
                                {quad.icon}
                            </div>
                            <h3 className="text-2xl font-bold">{quad.title}</h3>
                        </div>

                        <ul className="space-y-3">
                            {quad.skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2 text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillMatrix;
