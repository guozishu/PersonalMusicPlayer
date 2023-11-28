import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Index } from '../components/index';
import './App.css';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}
