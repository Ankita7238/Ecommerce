import './index.css'
import { useContext } from 'react';
import Header from './components/Header';
import About from './components/About'; 
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Auth from './components/Auth';
import Contact from './components/Contact';
import AuthContext from './store/auth-context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer/>
  </>
);

function App() {
  const authctx = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route path="/" element={(
            <DefaultLayout>
              {
                authctx.isLoggedIn ?<ProductList />:<Auth/>
              }
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
              {
                authctx.isLoggedIn ? <ProductDetails />:<Auth/>
              }
            </DefaultLayout>
          )}/>
          <Route path="/auth" element={(
            <DefaultLayout>
              <Auth />
            </DefaultLayout>
          )}/>
      </Routes>
    </Router>
  );
}

export default App;