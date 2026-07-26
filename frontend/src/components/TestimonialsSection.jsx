import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "Hilal is an exceptionally talented software engineer. His ability to architect scalable solutions and troubleshoot complex systems is unmatched. He consistently delivers high-quality code and drives projects to success.",
        author: "Dr. Sarah Ahmed",
        role: "Head of Computer Science Dept",
        company: "University of Kotali"
    },
    {
        id: 2,
        text: "Having Hilal on our team transformed our digital infrastructure. His expertise in both frontend and backend development allowed us to modernize our citizen portal rapidly. A true professional who understands both technology and business needs.",
        author: "Engr. Muhammad Tariq",
        role: "Director IT",
        company: "Civil Secretariat"
    },
    {
        id: 3,
        text: "Working with Hilal was a game-changer for our inventory systems. He brought international standard coding practices and a deep understanding of software design patterns. Highly recommended for any complex engineering challenge.",
        author: "Omer Farooq",
        role: "Operations Manager",
        company: "Tech Solutions Pvt Ltd"
    }
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10 translate-y-[-50%]"></div>
            
            <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                Professional Endorsements
            </h2>

            <div className="max-w-4xl mx-auto px-6 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                    <button onClick={prev} className="p-3 glass rounded-full hover:bg-white/10 transition-colors text-primary">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                    <button onClick={next} className="p-3 glass rounded-full hover:bg-white/10 transition-colors text-primary">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="glass-card relative overflow-hidden min-h-[350px] md:min-h-[250px] flex items-center justify-center">
                    <Quote className="absolute top-6 left-6 w-16 h-16 text-primary/10 rotate-180" />
                    <Quote className="absolute bottom-6 right-6 w-16 h-16 text-primary/10" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, type: 'spring' }}
                            className="text-center px-4 md:px-16"
                        >
                            <p className="text-lg md:text-xl text-slate-300 italic mb-8 leading-relaxed">
                                "{testimonials[currentIndex].text}"
                            </p>
                            <div>
                                <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].author}</h4>
                                <p className="text-primary font-medium">{testimonials[currentIndex].role}</p>
                                <p className="text-sm text-slate-500">{testimonials[currentIndex].company}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                idx === currentIndex ? 'bg-primary scale-125' : 'bg-white/20 hover:bg-white/40'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
