import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Skeleton, SimpleGrid, VStack, Stack } from '@chakra-ui/react';
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
  <Box aria-busy="true" aria-live="polite">
    <Skeleton h={{ base: '220px', md: '340px' }} />
    <Box maxW="1200px" mx="auto" px={4} py={{ base: 12, md: 20 }}>
      <VStack spacing={5} mb={{ base: 8, md: 12 }} align="center">
        <Skeleton h="12px" w="90px" borderRadius="full" />
        <Skeleton h={{ base: '30px', md: '40px' }} w={{ base: '72%', md: '420px' }} borderRadius="md" />
        <Skeleton h="16px" w={{ base: '88%', md: '520px' }} borderRadius="md" />
      </VStack>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Box key={i} borderRadius="2xl" overflow="hidden" borderWidth="1px" borderColor="blackAlpha.100">
            <Skeleton h="180px" />
            <Stack p={5} spacing={3}>
              <Skeleton h="16px" w="70%" borderRadius="md" />
              <Skeleton h="12px" w="100%" borderRadius="md" />
              <Skeleton h="12px" w="85%" borderRadius="md" />
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  </Box>
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