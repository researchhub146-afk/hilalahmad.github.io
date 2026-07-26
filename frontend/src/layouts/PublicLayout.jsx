import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X, Code, Briefcase, MessageCircle, ExternalLink } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const PublicLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certs' },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-100 selection:bg-primary selection:text-white">
            {/* Custom Mouse Glow */}
            <div 
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.04), transparent 80%)`
                }}
            />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Header / Navigation */}
            <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
                <div className="container mx-auto px-6 py-5 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-black tracking-tighter hover:text-primary transition-all flex items-center gap-1">
                        HILAL<span className="text-primary italic">AHMAD</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="lg:hidden fixed inset-0 top-[73px] bg-background/95 backdrop-blur-2xl z-50 flex flex-col p-8 space-y-6 animate-in slide-in-from-top duration-300">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-3xl font-black border-b border-white/5 pb-4 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-3xl font-black text-primary animate-pulse"
                        >
                            Hire Me
                        </a>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Elite CTA Section */}
            <section className="relative py-32 overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/10 z-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Let's Build Something <br className="hidden md:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Amazing Together.</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                            Whether you need a robust enterprise system, an AI-powered solution, or a scalable web application, I bring the engineering excellence to make it happen.
                        </p>
                        <a 
                            href="#contact" 
                            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-black hover:scale-105 hover:bg-primary hover:text-white transition-all shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:shadow-[0_0_60px_rgba(14,165,233,0.6)]"
                        >
                            Start a Conversation <MessageCircle className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Premium Footer */}
            <footer className="bg-surface border-t border-white/5 py-20 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <h2 className="text-2xl font-black mb-6">HILAL<span className="text-primary italic">AHMAD</span></h2>
                            <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
                                A high-performance personal branding platform for elite multi-disciplinary professionals. Standalone, enterprise-grade, and ready for production.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all"><MessageCircle className="w-5 h-5" /></a>
                                <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all"><Briefcase className="w-5 h-5" /></a>
                                <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all"><Code className="w-5 h-5" /></a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary">Navigation</h3>
                            <ul className="space-y-4 text-slate-400">
                                <li><a href="#projects" className="hover:text-white transition-colors">Portfolios</a></li>
                                <li><a href="#certs" className="hover:text-white transition-colors">Qualifications</a></li>
                                <li><a href="#skills" className="hover:text-white transition-colors">Expertise</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary">Status</h3>
                            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                Available for Hire
                            </div>
                            <p className="mt-4 text-xs text-slate-500 leading-normal">
                                Software Engineer (BPS-16)<br />
                                MS Computer Science & AI
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-slate-500 uppercase tracking-widest gap-4">
                        <p>&copy; {new Date().getFullYear()} Hilal Ahmad. All Rights Reserved.</p>
                        <div className="flex justify-center gap-6">
                            <a href="#" className="hover:text-white">Built with React</a>
                            <a href="#" className="hover:text-white">Deployed on GitHub Pages</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PublicLayout;
