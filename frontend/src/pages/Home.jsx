import { useState, useEffect } from 'react';
import api from '../services/api';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillMatrix from '../components/SkillMatrix';
import CertificationShowcase from '../components/CertificationShowcase';
import ProjectGallery from '../components/ProjectGallery';
import AnalyticsCharts from '../components/AnalyticsCharts';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const mockData = {
    user: { 
        name: 'Hilal Ahmad', 
        bio: 'I am a Software Engineer specializing in web, desktop, SaaS, and AI-powered applications. I am currently working as a Software Developer at the Civil Secretariat Peshawar in the government sector, where I contribute to the development and maintenance of software solutions that support digital transformation and administrative efficiency. I also have teaching experience, which has strengthened my communication and mentoring skills. Additionally, I hold professional certifications, including Cisco Certified Network Associate (CCNA) and Microsoft Power Bi certifications, demonstrating my expertise in networking, cloud technologies, and modern IT solutions. I am passionate about leveraging technology and artificial intelligence to build innovative solutions that address real-world challenges.' 
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
        { id: 1, name: 'University of Kotali Training Certificate', issuing_organization: 'Verified Authority', issue_date: '2023-01-01', credential_id: 'UOF-KOTALI', link: '/hilalahmad.github.io/certs/UOF-KOTALI-TRAINING.jpg' },
        { id: 2, name: 'Microsoft Certified: Power BI Data Analyst', issuing_organization: 'Microsoft', issue_date: '2023-06-15', credential_id: 'MS-POWER-BI', link: '/hilalahmad.github.io/certs/Microsoft-Power-bi-Certificate-1.pdf' },
        { id: 3, name: 'Cisco Certified Network Associate', issuing_organization: 'CISCO', issue_date: '2022-08-20', credential_id: 'CCNA-200-301', link: '/hilalahmad.github.io/certs/Cisco-Certified-Network-Associate-certificate-8.pdf' },
        { id: 4, name: 'Certified Hafiz-ul-Quran', issuing_organization: 'Verified Authority', issue_date: 'Lifetime Honors', credential_id: 'HAFIZ', link: '/hilalahmad.github.io/certs/HFAZ-CERTIFACTE.jpg' }
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
            <AboutSection bio={data?.user?.bio} />

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
