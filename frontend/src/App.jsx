import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Admin/Dashboard';
import ProjectManager from './pages/Admin/ProjectManager';
import CertificationManager from './pages/Admin/CertificationManager';
import MessageInbox from './pages/Admin/MessageInbox';
import ProfileSettings from './pages/Admin/ProfileSettings';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>

                <Route path="/login" element={<Login />} />

                {/* Private Admin Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<AdminLayout />}>
                        <Route path="/admin" element={<Dashboard />} />
                        <Route path="/admin/projects" element={<ProjectManager />} />
                        <Route path="/admin/certs" element={<CertificationManager />} />
                        <Route path="/admin/messages" element={<MessageInbox />} />
                        <Route path="/admin/settings" element={<ProfileSettings />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
