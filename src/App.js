import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Blog from './Pages/Blogs/Blog';
import Register from './Pages/Register/Register';
import Header from './Pages/Shared/Header/Header';
import Banner from './Pages/Home/Banner/Banner';

function App() {
  return (
    <div className="App " >
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About></About>} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<About />} />
        <Route path="register" element={<Register />} />
      </Routes>
    

    </div>
  );
}

export default App;
