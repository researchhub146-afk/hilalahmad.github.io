import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{name}</span>
                </h1>

                <div className="text-2xl md:text-4xl font-medium text-slate-300 h-10">
                    I am a <span className="text-white border-r-2 border-primary pr-1">{text}</span>
                </div>

                <div className="mt-12 flex gap-4 justify-center">
                    <button className="px-8 py-4 bg-primary rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        View Projects
                    </button>
                    <button className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-colors">
                        Get In Touch
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
