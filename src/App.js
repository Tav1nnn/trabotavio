import Login from "./pages/login";
import InformationApi from "./pages/informationApi";
import InfoIndividual from "./pages/infoIndividual";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'     

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/information-api',
    element: <InformationApi />,
  },
  {
    path: '/info-individual/:id',
    element: <InfoIndividual />,
  }
]);

function App() {
  return (

    <ChakraProvider>
       <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
    </ChakraProvider>
   
  );
}

export default App;
