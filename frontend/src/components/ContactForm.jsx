import { useState } from 'react';
import api from '../services/api';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    // Replace this with your Web3Forms access key
                    access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });
            const result = await response.json();
            
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 6000);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (err) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    if (status === 'success') {
        return (
            <div className="glass-card text-center py-20 animate-in zoom-in duration-500 max-w-4xl mx-auto my-24">
                <div className="flex justify-center mb-6">
                    <div className="bg-emerald-500/20 p-6 rounded-full">
                        <CheckCircle className="w-16 h-16 text-emerald-500" />
                    </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Received!</h3>
                <p className="text-slate-400">I appreciate you reaching out. I'll get back to you shortly.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-primary font-bold hover:underline transition-all"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                Get In Touch
            </h2>

            <div className="glass-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Name</label>
                            <input
                                type="text"
                                required
                                placeholder="Your full name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-primary transition-all"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Email</label>
                            <input
                                type="email"
                                required
                                placeholder="Email address"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-primary transition-all"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Subject</label>
                        <input
                            type="text"
                            required
                            placeholder="What are we talking about?"
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-primary transition-all"
                            value={formData.subject}
                            onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Message</label>
                        <textarea
                            required
                            rows="5"
                            placeholder="Tell me about your project..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-primary transition-all resize-none"
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-black uppercase tracking-widest py-5 rounded-xl transition-all flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                    >
                        {status === 'sending' ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Send Message
                            </>
                        )}
                    </button>
                    {status === 'error' && (
                        <p className="text-accent text-center text-sm font-bold animate-pulse">Oops! Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
