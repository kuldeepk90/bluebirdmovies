import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourites from './components/Favourites';
import Details from './components/Details';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<><Banner />
            <Movies />
            </>}/>
            <Route path='/favourites' element={<Favourites/>}/>
          <Route path='/movies/:title' element={<Details/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
