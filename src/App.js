import './index.css'
import Header from './components/Header';
import About from './components/About'; 
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer/>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={(
            <DefaultLayout>
              <ProductList />
            </DefaultLayout>
          )}/>
        <Route path="/about" element={(
            <DefaultLayout>
              <About />
            </DefaultLayout>
          )}/>
        <Route path="/home" element={(
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          )}/>
        <Route path="/contact" element={(
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          )}/>
        <Route path="/product/:title" element={(
            <DefaultLayout>
              <ProductDetails />
            </DefaultLayout>
          )}/>
      </Routes>
    </Router>
  );
}

export default App;