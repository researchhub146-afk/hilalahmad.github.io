import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Plus, Edit, Trash2, Image as ImageIcon, Loader2 } from 'lucide-react';

const ProjectManager = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(null); // idle, saving
    const [isEditing, setIsEditing] = useState(false);
    const [currentProject, setCurrentProject] = useState({
        title: '',
        description: '',
        category: 'Development',
        tech_stack: [],
        live_url: '',
        repo_url: '',
    });
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await api.get('/admin/projects');
            setProjects(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('saving');
        try {
            const formData = new FormData();
            formData.append('title', currentProject.title);
            formData.append('description', currentProject.description);
            formData.append('category', currentProject.category);
            formData.append('live_url', currentProject.live_url || '');
            formData.append('repo_url', currentProject.repo_url || '');
            if (imageFile) formData.append('image', imageFile);

            if (isEditing) {
                // Laravel has issues with PUT + Multipart/FormData, using POST with _method spoofing
                formData.append('_method', 'PUT');
                await api.post(`/admin/projects/${currentProject.id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } else {
                await api.post('/admin/projects', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            setIsEditing(false);
            setCurrentProject({ title: '', description: '', category: 'Development', tech_stack: [], live_url: '', repo_url: '' });
            setImageFile(null);
            setStatus('idle');
            fetchProjects();
        } catch (err) {
            console.error(err);
            setStatus('idle');
        }
    };

    const deleteProject = async (id) => {
        if (window.confirm('Are you sure?')) {
            await api.delete(`/admin/projects/${id}`);
            fetchProjects();
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Projects</h1>
                <button
                    onClick={() => { setIsEditing(false); setCurrentProject({ title: '', description: '', category: 'Development', tech_stack: [], live_url: '', repo_url: '' }); }}
                    className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg font-bold"
                >
                    <Plus className="w-5 h-5" /> Add Project
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-1 glass-card h-fit">
                    <h2 className="text-xl font-bold mb-6">{isEditing ? 'Edit Project' : 'New Project'}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            placeholder="Title"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={currentProject.title}
                            onChange={e => setCurrentProject({ ...currentProject, title: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Description"
                            rows="4"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={currentProject.description}
                            onChange={e => setCurrentProject({ ...currentProject, description: e.target.value })}
                            required
                        />
                        <select
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={currentProject.category}
                            onChange={e => setCurrentProject({ ...currentProject, category: e.target.value })}
                        >
                            <option value="Development">Development</option>
                            <option value="Design">Design</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                        <input
                            placeholder="Live URL"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            value={currentProject.live_url}
                            onChange={e => setCurrentProject({ ...currentProject, live_url: e.target.value })}
                        />
                        <div className="space-y-2">
                            <label className="text-xs text-slate-500 px-1 flex items-center gap-1">
                                <ImageIcon className="w-3 h-3" /> Project Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm outline-none focus:border-primary file:bg-primary file:border-none file:px-3 file:py-1 file:rounded-md file:text-white file:mr-4 file:cursor-pointer"
                                onChange={e => setImageFile(e.target.files[0])}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'saving'}
                            className="w-full bg-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary/90 disabled:opacity-50"
                        >
                            {status === 'saving' ? <Loader2 className="w-5 h-5 animate-spin" /> : (isEditing ? 'Update Project' : 'Create Project')}
                        </button>
                    </form>
                </div>

                {/* List */}
                <div className="lg:col-span-2 space-y-4">
                    {projects.map(project => (
                        <div key={project.id} className="glass-card flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">{project.title}</h3>
                                <p className="text-slate-400 text-sm line-clamp-1">{project.description}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => { setIsEditing(true); setCurrentProject(project); }} className="p-2 hover:bg-blue-500/20 rounded-lg"><Edit className="w-5 h-5 text-blue-400" /></button>
                                <button onClick={() => deleteProject(project.id)} className="p-2 hover:bg-rose-500/20 rounded-lg"><Trash2 className="w-5 h-5 text-rose-400" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectManager;
