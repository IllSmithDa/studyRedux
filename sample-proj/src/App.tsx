import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Counter from './components/Counter';
import Homepage from './Homepage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App
