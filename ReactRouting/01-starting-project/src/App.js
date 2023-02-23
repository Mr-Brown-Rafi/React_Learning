import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import RootLayout from "./pages/RootLayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
