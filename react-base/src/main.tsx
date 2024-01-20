import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "@/containers/Home";
import SignIn from "@/containers/Login";
import SignUp from "@/containers/Register";
import ContactUs from "@/containers/ContactUs";
import PublicLayout from "@/layout/PublicLayout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicLayout>
        <Home />
      </PublicLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicLayout>
        <SignIn />
      </PublicLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicLayout>
        <SignUp />
      </PublicLayout>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <PublicLayout withHeader={false}>
        <ContactUs />
      </PublicLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
