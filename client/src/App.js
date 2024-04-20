import "./styles.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Features from "./pages/Features";
import ResourceLibrary from "./pages/resourceLibrary"


/** root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <div />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/features',
    element: (
        <Features />
    )
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/resources',
    element: <ResourceLibrary/>
  }

]);
export default function App() {
  return (
    <main>
          <RouterProvider router={router} />
        </main>
  );
}
