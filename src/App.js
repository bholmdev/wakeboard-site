import './App.css';
import Header from './app/components/Header';
import ParksList from './app/features/parks/ParksList';
import Footer from './app/components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ParksList />
      <Footer />
    </div>
  );
}

export default App;
