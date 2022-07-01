import {  Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/crypto/:id" element={<Details/>} />
        </Routes>
    </Router>
  );
}

export default App;
