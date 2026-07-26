import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';

const HeroSection = ({ name }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ['Software Engineer', 'Machine Learning Expert', 'System Architect'];

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
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
            {/* Animated Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] -z-10 animate-pulse delay-700"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Text and CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col text-center lg:text-left z-10 order-2 lg:order-1"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 z-20"
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
                                className={`p-3 bg-white/5 text-slate-300 rounded-full transition-colors shadow-lg border border-white/10 ${link.color}`}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]">
                        Hi, I'm <br className="hidden lg:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{name}</span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-medium text-slate-300 h-10 mb-8">
                        I am a <span className="text-white border-r-2 border-primary pr-1">{text}</span>
                    </div>
                    
                    <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 text-lg leading-relaxed">
                        Transforming complex problems into elegant, scalable software solutions. With an MS in Computer Science and years of full-stack experience, I engineer systems that matter.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <a href={`${import.meta.env.BASE_URL}Hilal_CV.pdf`} download="Hilal_Ahmad_CV.pdf" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-white">
                            <Download className="w-5 h-5" /> Download CV
                        </a>
                        <a href="#projects" className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 border border-white/20">
                            View Projects
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Floating Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="z-10 order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000"
                >
                    <motion.div 
                        animate={{ 
                            y: [0, -20, 0],
                            rotateZ: [0, 2, -2, 0]
                        }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                    >
                        {/* Outer Glowing Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full border-2 border-secondary/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                        
                        {/* Main Image Container */}
                        <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(14,165,233,0.3)] bg-surface flex items-center justify-center p-1">
                            <img 
                                src={`${import.meta.env.BASE_URL}profile.jpg`} 
                                alt="Profile" 
                                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        
                        {/* Decorative Badge */}
                        <div className="absolute bottom-12 -right-4 glass px-4 py-2 rounded-full border border-white/20 shadow-xl flex items-center gap-2 backdrop-blur-md">
                            <span className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></span>
                            <span className="w-3 h-3 bg-emerald-400 rounded-full absolute"></span>
                            <span className="text-sm font-bold ml-2">Available for Hire</span>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
