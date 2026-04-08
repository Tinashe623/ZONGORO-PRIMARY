import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import StaffPage from './pages/StaffPage';
import AdmissionsPage from './pages/AdmissionsPage';
import BoardingPage from './pages/BoardingPage';
import ActivitiesPage from './pages/ActivitiesPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/boarding" element={<BoardingPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;