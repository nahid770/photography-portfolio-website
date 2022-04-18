import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Blog from './Pages/Blogs/Blog';
import Register from './Pages/Register/Register';
import Header from './Pages/Shared/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App " >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About></About>} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
