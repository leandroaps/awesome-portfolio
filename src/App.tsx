import './assets/css/base.css';
import './assets/css/main.css';
import './assets/css/vendor.css';

import About from './components/About';
import Blog from './components/Blog';
import Contacts from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Preloader from './components/Preloader';
import Pswp from './components/Pswp';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Works from './components/Works';

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
