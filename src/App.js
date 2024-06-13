import './index.css'
import Header from './components/Header';
import About from './components/About'; 
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Home from './components/Home';
import Cart from './components/Cart';
import Contact from './components/Contact';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer/>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <ProductList />
        <Cart/>
      </DefaultLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <DefaultLayout>
        <About />
      </DefaultLayout>
    ),
  },
  {
    path: "/home",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <DefaultLayout>
        <Contact />
      </DefaultLayout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
