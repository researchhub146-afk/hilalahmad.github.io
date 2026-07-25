import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import api from '../services/api';
import { LayoutDashboard, FolderKanban, Award, Mail, LogOut, User } from 'lucide-react';

const AdminLayout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await api.post('/admin/logout');
            localStorage.removeItem('auth_token');
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    const navItems = [
        { to: '/admin', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
        { to: '/admin/projects', label: 'Projects', icon: <FolderKanban className="w-5 h-5" /> },
        { to: '/admin/certs', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
        { to: '/admin/messages', label: 'Messages', icon: <Mail className="w-5 h-5" /> },
        { to: '/admin/settings', label: 'Settings', icon: <User className="w-5 h-5" /> },
    ];

    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-primary mb-10 px-3">Admin Panel</h2>
                <nav className="space-y-2 flex-1">
                    {navItems.map(item => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-xl transition-all ${isActive
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                }`
                            }
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 p-3 rounded-xl text-accent hover:bg-accent/10 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                </button>
            </aside>
            <main className="flex-1 p-12 overflow-y-auto bg-surface/20">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
