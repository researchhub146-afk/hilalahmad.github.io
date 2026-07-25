import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Mail, Trash2, Eye, CheckCircle } from 'lucide-react';

const MessageInbox = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const res = await api.get('/admin/messages');
            setMessages(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    const markAsRead = async (id) => {
        await api.put(`/admin/messages/${id}`, { status: 'read' });
        fetchMessages();
    };

    const deleteMessage = async (id) => {
        if (window.confirm('Delete this message?')) {
            await api.delete(`/admin/messages/${id}`);
            fetchMessages();
            setSelectedMessage(null);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Message Inbox</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* List */}
                <div className="lg:col-span-1 space-y-3">
                    {messages.map(msg => (
                        <div
                            key={msg.id}
                            onClick={() => setSelectedMessage(msg)}
                            className={`glass-card cursor-pointer transition-all ${selectedMessage?.id === msg.id ? 'border-primary' : 'hover:bg-white/5'} ${msg.status === 'unread' ? 'border-l-4 border-l-primary' : ''}`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold truncate">{msg.name}</h3>
                                <span className="text-[10px] text-slate-500 whitespace-nowrap">{new Date(msg.created_at).toLocaleDateString()}</span>
                            </div>
                            <p className="text-sm text-slate-400 truncate">{msg.subject}</p>
                        </div>
                    ))}
                    {messages.length === 0 && <p className="text-slate-500 italic">No messages found.</p>}
                </div>

                {/* Reader */}
                <div className="lg:col-span-2">
                    {selectedMessage ? (
                        <div className="glass-card h-full flex flex-col">
                            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                                <div>
                                    <h2 className="text-2xl font-bold">{selectedMessage.subject}</h2>
                                    <p className="text-primary font-medium">{selectedMessage.name} &lt;{selectedMessage.email}&gt;</p>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => deleteMessage(selectedMessage.id)} className="p-2 hover:bg-rose-500/20 rounded-lg"><Trash2 className="w-5 h-5 text-rose-400" /></button>
                                </div>
                            </div>
                            <div className="flex-1 whitespace-pre-wrap text-slate-300">
                                {selectedMessage.message}
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <a
                                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                                    className="bg-primary px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2"
                                >
                                    <Mail className="w-5 h-5" /> Reply via Email
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="glass-card h-full flex flex-col items-center justify-center text-slate-500 italic">
                            Select a message to read
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessageInbox;
