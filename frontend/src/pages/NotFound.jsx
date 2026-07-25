import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <div className="relative mb-8">
                <h1 className="text-[12rem] font-black text-white opacity-5 select-none">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-[0.5em]">
                        Lost in Space
                    </p>
                </div>
            </div>

            <p className="text-slate-400 max-w-md mb-12 text-lg">
                The page you are looking for might have been moved, deleted, or never existed in this dimension.
            </p>

            <Link
                to="/"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all transform hover:scale-105"
            >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
