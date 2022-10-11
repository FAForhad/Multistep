import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Quizs from './Components/Quizs/Quizs';
import Static from './Components/Static/Static';
import Blogs from './Components/Blogs/Blogs';
import Error from './Components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/quiz/:Id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
          },
          element: <Quizs></Quizs>
        },
        {
          path: '/static',
          element: <Static></Static>

        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
