import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/index";
import About from "../../pages/About/index";
import Contact from "../../pages/Contact/index";
import ProfilePage from "../../pages/Profile";
import MemeDetailPage from "../../pages/Detail";
import UploadMemePage from "../../pages/UploadMeme";

const homeRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "meme-detail", element: <MemeDetailPage /> },
      { path: "upload", element: <UploadMemePage /> },
    ],
  },
];

export default homeRoutes;
