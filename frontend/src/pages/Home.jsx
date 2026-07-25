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
    user: { 
        name: 'Premium Professional', 
        bio: 'Multi-disciplinary Engineer, Designer, and Digital Marketer with over 10 years of experience building enterprise-grade digital solutions.' 
    },
    analytics: [
        { id: 1, icon: 'users', metric_value: 961, metric_name: 'LinkedIn Connections', category: 'Network' },
        { id: 2, icon: 'code', metric_value: 4886, metric_name: 'GitHub Commits', category: 'Engineering' },
        { id: 3, icon: 'trending-up', metric_value: 3077, metric_name: 'Twitter Followers', category: 'Social' },
        { id: 4, icon: 'target', metric_value: 1943, metric_name: 'Portfolio Visits', category: 'Traffic' }
    ],
    projects: [
        { id: 1, title: 'Nexus Cloud ERP', description: 'A comprehensive enterprise resource planning system with a focus on real-time data visualization and cloud scalability.', category: 'Development', tech_stack: ['Laravel 11', 'React 19', 'MySQL'] },
        { id: 2, title: 'Aura Brand Identity', description: 'Sophisticated visual identity system for a sustainable lifestyle brand, including logo, typography, and brand guidelines.', category: 'Design', tech_stack: ['Adobe Illustrator', 'Figma'] },
        { id: 3, title: 'Pulse Social App', description: 'A mobile-first social networking platform optimized for real-time engagement and premium community interactions.', category: 'UX/UI', tech_stack: ['React Native', 'Firebase'] }
    ],
    certifications: [
        { id: 1, name: 'Azure Solutions Architect', issuing_organization: 'Microsoft', issue_date: '2023-01-01', credential_id: 'AZ-305' },
        { id: 2, name: 'Cisco Certified Network Associate', issuing_organization: 'Cisco', issue_date: '2022-06-15', credential_id: 'CCNA-200-301' }
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
