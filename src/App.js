import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Products/Product';
import Main from './layout/Main';
import News from './components/News/News';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/products', element: <Product></Product> },
        {
          path: '/news',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
            /* dynamic data loading */
          },
          element: <News></News>
        },
        {
          path: '/news/:postId', /* dynamic path */
          loader: async ({ params }) => {
            // console.log(params)
            return fetch(`https://jsonplaceholder.typicode.com/posts?id=${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
      ]
    },

    { path: '/about', element: <About></About> },
    { path: '*', element: <div>This is not found</div> } /* error message */

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
