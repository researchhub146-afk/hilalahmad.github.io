import { motion } from 'framer-motion';
import { Layers, Monitor, Target, Palette } from 'lucide-react';

const SkillMatrix = () => {
    const quadrants = [
        {
            title: 'Core Software & AI',
            icon: <Monitor className="w-8 h-8 text-blue-400" />,
            skills: ['Python / MATLAB', 'C/C++ / OOP', 'SQL / Database Admin', 'AI / Machine Learning', 'Computer Vision'],
            gradient: 'from-blue-500/20 to-blue-600/20'
        },
        {
            title: 'Network & Security',
            icon: <Layers className="w-8 h-8 text-emerald-400" />,
            skills: ['CISCO CCNA Routing', 'LAN / WAN Architecture', 'OSPF / BGP / IPv6', 'VLAN & ACL Security', 'Hardware Troubleshooting'],
            gradient: 'from-emerald-500/20 to-emerald-600/20'
        },
        {
            title: 'Systems Administration',
            icon: <Target className="w-8 h-8 text-rose-400" />,
            skills: ['Server Monitoring', 'Data Backup & Recovery', 'Disaster Recovery', 'User Privilege Mgt.', 'IT Resource Allocation'],
            gradient: 'from-rose-500/20 to-rose-600/20'
        },
        {
            title: 'Leadership & Design',
            icon: <Palette className="w-8 h-8 text-violet-400" />,
            skills: ['Technical Mentorship', 'Curriculum Development', 'Adobe Photoshop (Expert)', 'MS Office Suite', 'Content Writing'],
            gradient: 'from-violet-500/20 to-violet-600/20'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section className="py-24">
            <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                The Skill matrix
            </h2>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
                {quadrants.map((quad) => (
                    <motion.div
                        key={quad.title}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
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

                        <motion.ul 
                            variants={listVariants}
                            className="space-y-3"
                        >
                            {quad.skills.map((skill) => (
                                <motion.li 
                                    key={skill} 
                                    variants={listItemVariants}
                                    className="flex items-center gap-2 text-slate-300"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                                    {skill}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default SkillMatrix;
