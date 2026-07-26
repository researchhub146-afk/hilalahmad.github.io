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
import ExperienceTimeline from '../components/ExperienceTimeline';
import EducationSection from '../components/EducationSection';
import PublicationsSection from '../components/PublicationsSection';
import TechMarquee from '../components/TechMarquee';
import TestimonialsSection from '../components/TestimonialsSection';

const mockData = {
    user: { 
        name: 'Hilal Ahmad', 
        bio: 'I am a Software Engineer specializing in web, desktop, SaaS, and AI-powered applications. I currently work as a Software Developer at the Civil Secretariat Peshawar, contributing to digital transformation in the government sector. Alongside engineering, I have a deep passion for teaching and mentorship, having served as a Vice Principal and Computer Science Lecturer. My robust academic background (MS Computer Science, M.ED, B.ED) has strengthened my ability to train and lead teams. Additionally, I hold certifications like Cisco CCNA and Microsoft Power BI, demonstrating my expertise in networking, cloud technologies, and modern IT solutions. I am committed to leveraging technology to build innovative solutions that address real-world challenges.' 
    },
    analytics: [
        { id: 1, icon: 'users', metric_value: 961, metric_name: 'LinkedIn Connections', category: 'Network' },
        { id: 2, icon: 'code', metric_value: 4886, metric_name: 'GitHub Commits', category: 'Engineering' },
        { id: 3, icon: 'trending-up', metric_value: 3077, metric_name: 'Twitter Followers', category: 'Social' },
        { id: 4, icon: 'target', metric_value: 1943, metric_name: 'Portfolio Visits', category: 'Traffic' }
    ],
    projects: [
        { id: 1, title: 'Human Action Recognition AI', description: 'Deep learning application leveraging machine learning and computer vision to extract and assess deep features for accurate human action recognition.', category: 'AI & Data Science', tech_stack: ['Python', 'Computer Vision', 'Deep Learning'], link: 'https://github.com/researchhub146-afk' },
        { id: 2, title: 'Govt Citizen Portal Resolution', description: 'Managed and maintained software systems for the Civil Secretariat, resolving citizen complaints efficiently through digital transformation.', category: 'Software Maintenance', tech_stack: ['IT Management', 'Database Admin', 'Troubleshooting'], link: 'https://github.com/researchhub146-afk' },
        { id: 3, title: 'Inventory Management System', description: 'A robust desktop application designed for efficient inventory tracking, stock management, and automated reporting.', category: 'Development', tech_stack: ['C/C++', 'SQL', 'OOP'], link: 'https://github.com/researchhub146-afk' },
        { id: 4, title: 'Modern POS System', description: 'A sleek, cloud-based Point of Sale application offering real-time sales tracking, digital receipts, and inventory automation.', category: 'Development', tech_stack: ['PHP', 'React', 'MySQL'], image_url: '/hilalahmad.github.io/pos.jpg', link: 'https://github.com/researchhub146-afk' },
        { id: 5, title: 'Premium E-Commerce Platform', description: 'A full-stack e-commerce solution featuring secure payment gateways, dynamic cart management, and a comprehensive admin dashboard.', category: 'Development', tech_stack: ['Laravel', 'React', 'TailwindCSS'], image_url: '/hilalahmad.github.io/ecommerce.jpg', link: 'https://github.com/researchhub146-afk' },
        { id: 6, title: 'School Management ERP', description: 'A centralized portal for educational institutions to manage student records, attendance, fee processing, and teacher scheduling.', category: 'Development', tech_stack: ['PHP', 'MySQL', 'Bootstrap'], image_url: '/hilalahmad.github.io/school.jpg', link: 'https://github.com/researchhub146-afk' }
    ],
    certifications: [
        { id: 1, name: 'University of Kotali Training Certificate', issuing_organization: 'Verified Authority', issue_date: '2023-01-01', credential_id: 'UOF-KOTALI', link: '/hilalahmad.github.io/certs/UOF-KOTALI-TRAINING.jpg' },
        { id: 2, name: 'Microsoft Certified: Power BI Data Analyst', issuing_organization: 'Microsoft', issue_date: '2023-06-15', credential_id: 'MS-POWER-BI', link: '/hilalahmad.github.io/certs/Microsoft-Power-bi-Certificate-1.pdf' },
        { id: 3, name: 'Cisco Certified Network Associate', issuing_organization: 'CISCO', issue_date: '2022-08-20', credential_id: 'CCNA-200-301', link: '/hilalahmad.github.io/certs/Cisco-Certified-Network-Associate-certificate-8.pdf' },
        { id: 4, name: 'Certified Hafiz-ul-Quran', issuing_organization: 'Verified Authority', issue_date: 'Lifetime Honors', credential_id: 'HAFIZ', link: '/hilalahmad.github.io/certs/HFAZ-CERTIFACTE.jpg' }
    ],
    experience: [
        { period: '01/01/2015 - 30/07/2016', title: 'Vice Principal', organization: 'Iqra Rozaat-ul-Sibyan School Nowshera', responsibilities: ['Managed Matric program and coordinated public dealings.', 'Trained staff and students on professional courses.'] },
        { period: '18/02/2018 - 30/10/2018', title: 'Civil Computer Operator (Bps-14)', organization: 'Pak Army Signal Training Center Kohat Cantonment', responsibilities: ['Monitored computer systems and networks for optimal performance.', 'Managed data storage, backups, and security measures.', 'Diagnosed and resolved hardware/software issues minimizing downtime.'] },
        { period: '31/08/2019 - 31/01/2021', title: 'Computer Science Lecturer (Bps-17)', organization: 'Peshawar Model Degree College Boys', responsibilities: ['Delivered engaging lectures and labs for computer science students.', 'Managed network infrastructure, security, and hardware maintenance.', 'Provided technical support and administered server resources.'] },
        { period: '01/03/2021 - 23/11/2021', title: 'Computer Operator (Bps-16)', organization: 'Quality Assurance Programme Higher Education Dept KPK', responsibilities: ['System monitoring and maintenance to ensure optimal functionality.', 'Data administration, backup, and security reporting.', 'Technical support for faculty, staff, and students.'] },
        { period: '24/11/2021 - Current', title: 'Computer Operator (Bps-16)', organization: 'Civil Secretariat Home Department Govt of KPK', responsibilities: ['Troubleshooting of networking issues and hardware resources.', 'Assess software maintenance and resolve citizen portal complaints.', 'Inspect surveillance systems of CCTV cameras.'] }
    ],
    education: [
        { period: '2016 - 2019', degree: 'MS Computer Science', institution: 'Islamia College University Peshawar', location: 'Peshawar, Pakistan', grade: '3.38/4.00', thesis: 'Deep Features Assessment for Human Action Recognition Application (Machine Learning & CV)' },
        { period: '2011 - 2015', degree: 'Bachelor of Science in Computer Science', institution: 'The University of Agriculture KPK', location: 'Peshawar, Pakistan', grade: '3.21/4.00', thesis: 'Inventory Management System' },
        { period: '2016 - 2018', degree: 'Master of Education (M.ED)', institution: 'Allama Iqbal Open University', location: 'Islamabad, Pakistan', grade: '769/1200' },
        { period: '2012 - 2017', degree: 'Bachelor of Education (B.ED) & C.T.', institution: 'Allama Iqbal Open University', location: 'Islamabad, Pakistan', grade: 'Pass' }
    ],
    publications: [
        { year: '2022', title: 'Effective Video Summarization Approach Based on Visual Attention', authors: 'Hilal Ahmad, Habib Ullah Khan, Sikandar Ali, Syed Ijaz Ur Rahman, Fazli Wahid', link: 'https://www.techscience.com/cmc/v71n1/45400', abstract: 'Video summarization is applied to reduce redundancy and develop a concise representation of key frames in the video, more recently, video summaries have been used through visual attention modeling. We propose a method based on KFE (key frame extraction) technique using dynamic visual highlighting based on the temporal gradient. The dynamic and static visual attention metrics are merged by means of a non-linear weighted fusion technique.', keywords: ['KFE', 'Video Summarization', 'Visual Saliency', 'Attention Model', 'Computer Vision'] }
    ]
};

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Since we are deploying as a static site on GitHub Pages without a backend database,
        // we directly use the highly detailed professional mockData.
        setData(mockData);
        setLoading(false);
    }, []);

    if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

    return (
        <div className="bg-background min-h-screen">
            <SEO
                title={data?.user?.name || 'Loading Portfolio...'}
                description={data?.user?.bio}
            />
            <HeroSection name={data?.user?.name} />
            <TechMarquee />
            <AboutSection bio={data?.user?.bio} />

            <div className="container mx-auto px-4 pb-24">
                <div id="skills"><SkillMatrix /></div>

                <div id="experience"><ExperienceTimeline experience={data?.experience} /></div>
                
                <div id="education"><EducationSection education={data?.education} /></div>

                <div id="publications"><PublicationsSection publications={data?.publications} /></div>

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
                
                <TestimonialsSection />

                <div id="contact"><ContactForm /></div>

                <footer className="text-center py-12 border-t border-white/5 text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} {data?.user?.name}. Built with Laravel 11 & React 19.
                </footer>
            </div>
        </div>
    );
};

export default Home;
