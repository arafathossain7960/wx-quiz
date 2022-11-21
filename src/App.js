import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import DisplayQuiz from './Components/DisplayQuiz/DisplayQuiz';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main />,
      children:[
        {
        path:'/',
        element:<Home />,
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path:'/quizId/:quizId',
        element:<DisplayQuiz />,  
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)

        
      },
      {
        path:'/blog',
        element:<Blog />
      },
    ]
    },
   
    {
      path:'*',
      element:<NotFound />

    }
  ])
  return (
    <>
      
    <RouterProvider router={router} />

      
    </>
  );
}

export default App;
