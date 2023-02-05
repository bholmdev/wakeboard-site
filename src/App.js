import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './app/components/Header';
import HomePage from './app/pages/HomePage';
import ParksDirectoryPage from './app/pages/ParksDirectoryPage';
import ParkDetailPage from './app/pages/ParkDetailPage';
import ContactPage from './app/pages/ContactPage';
import Footer from './app/components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<ParksDirectoryPage />} />
        <Route
          path="directory/:parkId"
          element={<ParkDetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
