import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./pages/RootLayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
      { path: '/products/:productId', element: <ProductDetails/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
