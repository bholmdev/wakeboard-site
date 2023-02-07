import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './app/components/Header';
import HomePage from './app/pages/HomePage';
import ParksDirectoryPage from './app/pages/ParksDirectoryPage';
import ParkDetailPage from './app/pages/ParkDetailPage';
import ContactPage from './app/pages/ContactPage';
import Footer from './app/components/Footer';
import AboutPage from './app/pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/wakeboard-site" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/directory" element={<ParksDirectoryPage />} />
        <Route
          path="/directory/:parkId"
          element={<ParkDetailPage />}
        />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
