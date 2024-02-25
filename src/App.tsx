import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import UseCases from "./pages/UseCases";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/solutions',
    element: <Solutions />
  },
  {
    path:'/contact',
    element: <Contact />
  },
  {
    path:'/usecases',
    element: <UseCases />
  }
]);

function App() {
  return ( 
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
