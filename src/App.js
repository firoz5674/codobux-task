import './App.css';
import "./assets/styles/main.scss";
import Footer from './layout/Footer';
import Header from './layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
import 'swiper/css';
import 'swiper/css/pagination';


function App() {
  return (
    <div className="main">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
