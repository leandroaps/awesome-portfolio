import './assets/css/base.css';
import './assets/css/main.css';
import './assets/css/vendor.css';

import About from './pages/About';
import Blog from './pages/Blog';
import Contacts from './pages/Contact';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import Preloader from './pages/Preloader';
import Pswp from './pages/Pswp';
import Stats from './pages/Stats';
import Testimonials from './pages/Testimonials';
import Works from './pages/Works';

function App() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Works />
            <Testimonials />
            <Blog />
            <Stats />
            <Contacts />
            <Footer />
            <Pswp />
            <Preloader />
        </>
    );
}

export default App;
