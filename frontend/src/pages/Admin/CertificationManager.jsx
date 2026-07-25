import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Plus, Edit, Trash2, Award } from 'lucide-react';

const CertificationManager = () => {
    const [certs, setCerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCert, setCurrentCert] = useState({
        name: '',
        issuing_organization: '',
        issue_date: '',
        credential_id: '',
        credential_url: '',
    });

    useEffect(() => {
        fetchCerts();
    }, []);

    const fetchCerts = async () => {
        try {
            const res = await api.get('/admin/certifications');
            setCerts(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await api.put(`/admin/certifications/${currentCert.id}`, currentCert);
            } else {
                await api.post('/admin/certifications', currentCert);
            }
            setIsEditing(false);
            setCurrentCert({ name: '', issuing_organization: '', issue_date: '', credential_id: '', credential_url: '' });
            fetchCerts();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteCert = async (id) => {
        if (window.confirm('Are you sure?')) {
            await api.delete(`/admin/certifications/${id}`);
            fetchCerts();
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Certifications</h1>
                <button
                    onClick={() => { setIsEditing(false); setCurrentCert({ name: '', issuing_organization: '', issue_date: '', credential_id: '', credential_url: '' }); }}
                    className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg font-bold"
                >
                    <Plus className="w-5 h-5" /> Add Certification
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-1 glass-card h-fit">
                    <h2 className="text-xl font-bold mb-6">{isEditing ? 'Edit Cert' : 'New Cert'}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            placeholder="Certification Name"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={currentCert.name}
                            onChange={e => setCurrentCert({ ...currentCert, name: e.target.value })}
                            required
                        />
                        <input
                            placeholder="Issuing Org"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={currentCert.issuing_organization}
                            onChange={e => setCurrentCert({ ...currentCert, issuing_organization: e.target.value })}
                            required
                        />
                        <input
                            type="date"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={currentCert.issue_date}
                            onChange={e => setCurrentCert({ ...currentCert, issue_date: e.target.value })}
                            required
                        />
                        <input
                            placeholder="Credential URL"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={currentCert.credential_url}
                            onChange={e => setCurrentCert({ ...currentCert, credential_url: e.target.value })}
                        />
                        <button type="submit" className="w-full bg-primary py-3 rounded-lg font-bold">
                            {isEditing ? 'Update Certification' : 'Create Certification'}
                        </button>
                    </form>
                </div>

                {/* List */}
                <div className="lg:col-span-2 space-y-4">
                    {certs.map(cert => (
                        <div key={cert.id} className="glass-card flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <Award className="w-8 h-8 text-primary opacity-50" />
                                <div>
                                    <h3 className="font-bold text-lg">{cert.name}</h3>
                                    <p className="text-slate-400 text-sm">{cert.issuing_organization}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => { setIsEditing(true); setCurrentCert(cert); }} className="p-2 hover:bg-blue-500/20 rounded-lg"><Edit className="w-5 h-5 text-blue-400" /></button>
                                <button onClick={() => deleteCert(cert.id)} className="p-2 hover:bg-rose-500/20 rounded-lg"><Trash2 className="w-5 h-5 text-rose-400" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificationManager;
