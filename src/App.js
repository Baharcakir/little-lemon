import { Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-white p-4 flex justify-between">
          <img className="w-40" src="./littlelemon.png" alt="Little Lemon Logo" />
          <ul className="flex space-x-4 items-center">
            <li><Link to="/home" className="text-yellow-500 hover:text-yellow-900">Home</Link></li>
            <li><Link to="/menu" className="text-yellow-500 hover:text-yellow-900">Menu</Link></li>
            <li><Link to="/reservations" className="text-yellow-500 hover:text-yellow-900">Reservations</Link></li>
          </ul>
        </nav>
        <main className='bg-white w-full h-full'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
