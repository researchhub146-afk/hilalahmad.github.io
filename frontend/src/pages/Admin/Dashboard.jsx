import { useState, useEffect } from 'react';
import api from '../../services/api';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Users, FolderKanban, Award, MessageSquare, TrendingUp, Loader2 } from 'lucide-react';

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [analytics, setAnalytics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [statsRes, analyticsRes] = await Promise.all([
                    api.get('/portfolio-data'),
                    api.get('/admin/analytics')
                ]);
                setStats({
                    projects: statsRes.data.projects.length,
                    certs: statsRes.data.certifications.length,
                    messages: 12, // For demonstration
                });
                setAnalytics(analyticsRes.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchDashboardData();
    }, []);

    const StatCard = ({ icon: Icon, label, value, color }) => (
        <div className="glass-card flex items-center gap-4 transition-all hover:-translate-y-1 hover:border-primary/30">
            <div className={`p-4 rounded-xl ${color} bg-opacity-20`}>
                <Icon className={`w-6 h-6 stroke-[2.5px] ${color.replace('bg-', 'text-')}`} />
            </div>
            <div>
                <p className="text-sm text-slate-400 font-medium">{label}</p>
                <h3 className="text-2xl font-bold">{value}</h3>
            </div>
        </div>
    );

    if (loading) return (
        <div className="flex h-[60vh] items-center justify-center">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
        </div>
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
                    <p className="text-slate-400 text-sm">Welcome back! Here's what's happening today.</p>
                </div>
                <div className="text-right hidden md:block">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Current Session</p>
                    <p className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={FolderKanban} label="Total Projects" value={stats?.projects} color="bg-blue-500" />
                <StatCard icon={Award} label="Certifications" value={stats?.certs} color="bg-emerald-500" />
                <StatCard icon={MessageSquare} label="Recent Messages" value={stats?.messages} color="bg-primary" />
                <StatCard icon={Users} label="Total Reach" value="2.4k" color="bg-accent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Growth Chart */}
                <div className="lg:col-span-2 glass-card overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold">Audience Growth</h2>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-primary"></span>
                            <span className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Followers</span>
                        </div>
                    </div>
                    <div className="h-80 -ml-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={analytics}>
                                <defs>
                                    <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                <XAxis dataKey="date" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} hide />
                                <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ color: '#0ea5e9', fontWeight: 'bold' }}
                                />
                                <Area type="monotone" dataKey="followers" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorFollowers)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Engagement Chart */}
                <div className="lg:col-span-1 glass-card">
                    <h2 className="text-xl font-bold mb-8">Engagement</h2>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={analytics}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                <XAxis dataKey="platform" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                                <YAxis hide />
                                <Tooltip
                                    cursor={{ fill: '#ffffff05' }}
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '16px' }}
                                />
                                <Bar dataKey="engagement_rate" fill="#0ea5e9" radius={[6, 6, 0, 0]} barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
                        {analytics.slice(0, 3).map(item => (
                            <div key={item.id} className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">{item.platform}</span>
                                <span className="text-emerald-400 font-bold">{item.engagement_rate}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
