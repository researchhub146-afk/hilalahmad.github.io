import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, BarChart3 } from 'lucide-react';

const AnalyticsCharts = ({ analytics }) => {
    const iconMap = {
        'trending-up': <TrendingUp className="w-6 h-6 text-emerald-400" />,
        'code': <BarChart3 className="w-6 h-6 text-blue-400" />,
        'users': <Users className="w-6 h-6 text-rose-400" />,
        'target': <Target className="w-6 h-6 text-violet-400" />,
    };

    return (
        <section className="py-24 bg-surface/30 backdrop-blur-sm -mx-4 px-4 sm:-mx-8 sm:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                    Marketing & Engineering Metrics
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {analytics?.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card flex flex-col items-center text-center p-8 group"
                        >
                            <div className="mb-4 p-3 glass rounded-full group-hover:bg-primary/20 transition-colors">
                                {iconMap[item.icon] || <TrendingUp className="w-6 h-6 text-primary" />}
                            </div>
                            <p className="text-3xl font-black text-white mb-2">
                                {item.metric_value.toLocaleString()}+
                            </p>
                            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                                {item.metric_name}
                            </p>
                            {item.category && (
                                <span className="mt-4 text-[10px] px-2 py-0.5 bg-white/5 rounded text-slate-500 uppercase">
                                    {item.category}
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnalyticsCharts;
