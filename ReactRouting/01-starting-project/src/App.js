import { createBrowserRouter, RouterProvider, createRoutesFromElements , Route} from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";

// const route = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/products", element: <Product /> },
// ]);

const routeDefinations = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home/>} />
    <Route path="/products" element={<Product/>} />
  </Route>
)

const route = createBrowserRouter(routeDefinations);


function App() {
  return <RouterProvider router={route}/>
}

export default App;
