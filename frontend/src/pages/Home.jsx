import { useState, useEffect } from 'react';
import api from '../services/api';
import HeroSection from '../components/HeroSection';
import SkillMatrix from '../components/SkillMatrix';
import CertificationShowcase from '../components/CertificationShowcase';
import ProjectGallery from '../components/ProjectGallery';
import AnalyticsCharts from '../components/AnalyticsCharts';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const mockData = {
    user: { name: 'Hilal Ahmad', bio: 'A passionate developer building amazing digital experiences.' },
    analytics: [
        { id: 1, icon: 'users', metric_value: 1250, metric_name: 'Profile Views', category: 'Traffic' },
        { id: 2, icon: 'code', metric_value: 15, metric_name: 'Projects Completed', category: 'Engineering' },
        { id: 3, icon: 'target', metric_value: 4, metric_name: 'Certifications', category: 'Learning' },
        { id: 4, icon: 'trending-up', metric_value: 98, metric_name: 'Client Satisfaction', category: 'Quality' }
    ],
    projects: [
        { id: 1, title: 'E-Commerce Platform', description: 'A full-stack e-commerce solution with payment integration.', category: 'Web', tech_stack: ['React', 'Laravel', 'MySQL'] },
        { id: 2, title: 'Task Management App', description: 'Real-time collaborative task manager.', category: 'Web', tech_stack: ['React', 'Node.js', 'MongoDB'] },
        { id: 3, title: 'Portfolio Website', description: 'Personal branding and portfolio platform.', category: 'Design', tech_stack: ['React', 'TailwindCSS'] }
    ],
    certifications: [
        { id: 1, name: 'AWS Certified Solutions Architect', issuing_organization: 'Amazon', issue_date: '2023-05-01' },
        { id: 2, name: 'Full Stack Developer', issuing_organization: 'Coursera', issue_date: '2022-11-15' }
    ]
};

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/portfolio-data')
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Backend not running, using mock data.", err);
                setData(mockData);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

    return (
        <div className="bg-background min-h-screen">
            <SEO
                title={data?.user?.name || 'Loading Portfolio...'}
                description={data?.user?.bio}
            />
            <HeroSection name={data?.user?.name} />

            <div className="container mx-auto px-4 pb-24">
                <div id="skills"><SkillMatrix /></div>

                <div id="analytics"><AnalyticsCharts analytics={data?.analytics} /></div>

                <section id="projects" className="py-24">
                    <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary underline-offset-8">
                        Engineering Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data?.projects.filter(p => p.category !== 'Design').map(project => (
                            <div key={project.id} className="glass-card hover:border-primary/50 transition-colors group">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech_stack?.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <ProjectGallery projects={data?.projects} />

                <div id="certs"><CertificationShowcase certifications={data?.certifications} /></div>

                <div id="contact"><ContactForm /></div>

                <footer className="text-center py-12 border-t border-white/5 text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} {data?.user?.name}. Built with Laravel 11 & React 19.
                </footer>
            </div>
        </div>
    );
};

export default Home;
