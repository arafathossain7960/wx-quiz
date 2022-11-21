import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Main from './Layout/Main';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main />
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
