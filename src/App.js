import './App.css';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container-fluid min-vh-100 d-flex flex-column">
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
