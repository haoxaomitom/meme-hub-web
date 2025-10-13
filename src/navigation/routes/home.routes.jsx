import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/index";
import About from "../../pages/About/index";
import Contact from "../../pages/Contact/index";

const homeRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
];

export default homeRoutes;
