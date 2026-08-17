import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { pingApi } from './services/api.js';
import Home from './pages/Home.jsx';

function App() {
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    pingApi()
      .then((data) => setStatus(data.message))
      .catch(() => setStatus('backend unreachable'));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <p>API status: {status}</p>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
