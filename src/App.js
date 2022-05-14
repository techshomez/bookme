import { 
  BrowserRouter, 
  Routes, 
  Route 
 } from 'react-router-dom';
import Home from './pages/home';
import Listing from './pages/listing';
import Details from './pages/hotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Listing />} />
        <Route path="/hotel/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
