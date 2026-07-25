import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import SEO from '../components/SEO';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/login', { email, password });
            localStorage.setItem('auth_token', res.data.access_token);
            navigate('/admin');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-background text-slate-100">
            <SEO title="Admin Login" description="Secure login for Portfolio SaaS administration." />
            <div className="glass-card w-full max-w-md">
                <h2 className="text-3xl font-bold mb-8 text-center">Admin Login</h2>
                {error && <p className="text-accent mb-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full bg-surface/50 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-surface/50 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-colors">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
