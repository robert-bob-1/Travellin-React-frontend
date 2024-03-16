import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Search from './pages/Search';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <div style={{ margin: '2rem', height: '100%' }}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/destinations" Component={Destinations} />
            <Route path="/search" Component={Search} />
            <Route path="/about" Component={About} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
