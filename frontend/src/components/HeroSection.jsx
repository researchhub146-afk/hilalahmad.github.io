import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Download, ExternalLink, Code, Briefcase } from 'lucide-react';

const HeroSection = ({ name }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ['Software Engineer', 'Digital Marketer', 'Graphic Designer'];

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
                <div className="flex gap-4 mb-8">
                    <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all shadow-lg" title="LinkedIn">
                        <Briefcase className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all shadow-lg" title="GitHub">
                        <Code className="w-5 h-5" />
                    </a>
                </div>

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
