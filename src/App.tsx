import "./App.css";
import SelectPage from "./pages/SelectFilterPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AutoMailingPage from "./module/mailing/auto-mailing";
import RegisterPage from "./pages/RegisterPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import firebase from "./Firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/select", element: <SelectPage /> },
      { path: "/mail", element: <AutoMailingPage /> },
    ],
  },
]);

function App() {
  console.log(firebase);
  return <RouterProvider router={router} />;
}

export default App;
