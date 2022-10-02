import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Products/Product';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Header></Header> },
    { path: '/home', element: <Home></Home> },
    { path: '/about', element: <About></About> },
    { path: '/products', element: <Product></Product> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
