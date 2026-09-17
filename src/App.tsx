import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import PageLoader from './components/ui/PageLoader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ChurchPage from './pages/ChurchPage';
import CommunityPage from './pages/CommunityPage';
import AcademicsPage from './pages/AcademicsPage';
import AssessmentPage from './pages/AssessmentPage';
import StaffPage from './pages/StaffPage';
import AdmissionsPage from './pages/AdmissionsPage';
import BoardingPage from './pages/BoardingPage';
import ActivitiesPage from './pages/ActivitiesPage';
import TransportPage from './pages/TransportPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

const MotionBox = motion(Box);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <PageLoader key="loader" />
      ) : (
        <MotionBox
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/church" element={<ChurchPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/boarding" element={<BoardingPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/transport" element={<TransportPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
            </Routes>
          </Layout>
        </MotionBox>
      )}
    </AnimatePresence>
  );
}

export default App;