import './App.css';
import Header from './app/components/Header';
import ParksDirectoryPage from './app/pages/ParksDirectoryPage';
import Footer from './app/components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ParksDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
