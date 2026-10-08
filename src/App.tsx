import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Spinner, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Layout from './components/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ChurchPage = lazy(() => import('./pages/ChurchPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'));
const AssessmentPage = lazy(() => import('./pages/AssessmentPage'));
const StaffPage = lazy(() => import('./pages/StaffPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const BoardingPage = lazy(() => import('./pages/BoardingPage'));
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage'));
const TransportPage = lazy(() => import('./pages/TransportPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const MotionBox = motion(Box);

const PageFallback = () => (
  <Center minH="45vh">
    <Spinner size="xl" color="maroon.500" thickness="3px" />
  </Center>
);

function App() {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <Suspense fallback={<PageFallback />}>
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </MotionBox>
  );
}

export default App;