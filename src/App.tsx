import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import MissionPage from "./pages/MissionPage";
import FounderPage from "./pages/FounderPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import NewsroomPage from "./pages/NewsroomPage";
import LiteShopPage from "./pages/LiteShopPage";
import B2BPage from "./pages/B2BPage";
import ServicesPage from "./pages/ServicesPage";
import TravelPage from "./pages/TravelPage";
import LearningPage from "./pages/LearningPage";
import InvestPage from "./pages/InvestPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/lite" element={<LiteShopPage />} />
            <Route path="/b2b" element={<B2BPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/invest" element={<InvestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
