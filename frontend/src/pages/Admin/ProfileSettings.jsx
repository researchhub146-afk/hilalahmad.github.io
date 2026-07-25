import { useState, useEffect } from 'react';
import api from '../../services/api';
import { User, Mail, Shield, Save } from 'lucide-react';

const ProfileSettings = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        bio: '',
        social_links: { twitter: '', linkedin: '', github: '', dribbble: '' },
    });
    const [passwordData, setPasswordData] = useState({
        password: '',
        password_confirmation: '',
    });
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const res = await api.get('/admin/user');
            const userData = res.data;
            if (!userData.social_links) userData.social_links = { twitter: '', linkedin: '', github: '', dribbble: '' };
            setUser(userData);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setStatus('saving');
        try {
            const payload = { ...user, ...passwordData };
            await api.put('/admin/profile', payload);
            setStatus('success');
            setPasswordData({ password: '', password_confirmation: '' });
            setTimeout(() => setStatus(null), 3000);
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

            <form onSubmit={handleUpdate} className="space-y-8">
                {/* Basic Info */}
                <div className="glass-card">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <User className="text-primary w-5 h-5" /> Basic Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-slate-400">Full Name</label>
                            <input
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                                value={user.name}
                                onChange={e => setUser({ ...user, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-slate-400">Email Address</label>
                            <input
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                                value={user.email}
                                onChange={e => setUser({ ...user, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-6 space-y-2">
                        <label className="text-sm text-slate-400">Bio / Professional Summary</label>
                        <textarea
                            rows="4"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={user.bio || ''}
                            onChange={e => setUser({ ...user, bio: e.target.value })}
                        />
                    </div>
                </div>

                {/* Social Links */}
                <div className="glass-card">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Mail className="text-primary w-5 h-5" /> Social Presence
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {['twitter', 'linkedin', 'github', 'dribbble'].map(platform => (
                            <div key={platform} className="space-y-2">
                                <label className="text-sm text-slate-400 capitalize">{platform}</label>
                                <input
                                    placeholder="https://..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary text-sm"
                                    value={user.social_links[platform] || ''}
                                    onChange={e => setUser({
                                        ...user,
                                        social_links: { ...user.social_links, [platform]: e.target.value }
                                    })}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security */}
                <div className="glass-card border-accent/20">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Shield className="text-accent w-5 h-5" /> Security
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-slate-400">New Password</label>
                            <input
                                type="password"
                                placeholder="Leave blank to keep current"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                                value={passwordData.password}
                                onChange={e => setPasswordData({ ...passwordData, password: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-slate-400">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                                value={passwordData.password_confirmation}
                                onChange={e => setPasswordData({ ...passwordData, password_confirmation: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        disabled={status === 'saving'}
                        className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
                    >
                        {status === 'saving' ? 'Saving Changes...' : (
                            <>
                                <Save className="w-5 h-5" /> Save Profile
                            </>
                        )}
                    </button>
                    {status === 'success' && <span className="text-emerald-400 font-medium">Profile updated successfully!</span>}
                    {status === 'error' && <span className="text-accent font-medium">Update failed. Check your data.</span>}
                </div>
            </form>
        </div>
    );
};

export default ProfileSettings;
