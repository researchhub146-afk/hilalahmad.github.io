import { useEffect } from 'react';

const SEO = ({ title, description }) => {
    useEffect(() => {
        document.title = `${title} | Portfolio SaaS`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Enterprise-grade Portfolio SaaS');
        } else {
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = description || 'Enterprise-grade Portfolio SaaS';
            document.head.appendChild(meta);
        }
    }, [title, description]);

    return null;
};

export default SEO;
