import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';

const HeroSection = ({ name }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ['Software Engineer', 'Digital Marketer', 'Graphic Designer'];

    const socialLinks = [
        { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>, href: 'https://wa.me/923110574105', color: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]', title: 'WhatsApp' },
        { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: 'https://www.linkedin.com/in/hilal-ahmad-bb355941a', color: 'hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]', title: 'LinkedIn' },
        { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>, href: 'https://github.com/researchhub146-afk', color: 'hover:bg-[#333] hover:text-white hover:border-[#333]', title: 'GitHub' },
        { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, href: 'https://www.facebook.com/RESEEARCHER/', color: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]', title: 'Facebook' },
        { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>, href: 'mailto:aipioner.dev@gmail.com', color: 'hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335]', title: 'Email' },
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 100 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden pt-20">
            {/* Animated Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 flex flex-col items-center"
            >
                <div className="mb-8 relative">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 p-1 bg-white/5">
                        <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Profile" className="w-full h-full object-cover rounded-full" />
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mb-8 z-20"
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.title}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + (index * 0.1), type: 'spring', stiffness: 200 }}
                            whileHover={{ scale: 1.15, rotate: link.title === 'WhatsApp' ? 10 : -10 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-3.5 bg-white/5 text-slate-300 rounded-full transition-colors shadow-lg border border-white/10 ${link.color}`}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{name}</span>
                </h1>

                <div className="text-2xl md:text-4xl font-medium text-slate-300 h-10">
                    I am a <span className="text-white border-r-2 border-primary pr-1">{text}</span>
                </div>

                <div className="mt-12 flex flex-wrap gap-4 justify-center">
                    <a href="#projects" className="px-8 py-4 bg-primary rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                        Get In Touch
                    </a>
                    <a href="/hilalahmad.github.io/resume.pdf" download="Resume.pdf" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2 text-slate-300 hover:text-white">
                        <Download className="w-5 h-5" />
                        Download CV
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
