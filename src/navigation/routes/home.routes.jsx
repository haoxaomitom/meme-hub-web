import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/index";
import About from "../../pages/About/index";
import Contact from "../../pages/Contact/index";
import ProfilePage from "../../pages/Profile";
import MemeDetailPage from "../../pages/Detail";
import UploadMemePage from "../../pages/UploadMeme";
import DiscoverPage from "../../pages/Discover/Discover";
import TrendingPage from "../../pages/Trending/TrendingPage";
import TopContributorsPage from "../../pages/TopContributors/TopContributors";
import SearchResultsPage from "../../pages/SearchResults/SearchResults";
import TagDetailPage from "../../pages/TagDetail/TagDetail";

const homeRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "meme-detail", element: <MemeDetailPage /> },
      { path: "upload", element: <UploadMemePage /> },
      { path: "discover", element: <DiscoverPage /> },
      { path: "trending", element: <TrendingPage /> },
      { path: "top-contributors", element: <TopContributorsPage /> },
      { path: "search-result", element: <SearchResultsPage /> },
      { path: "tag-detail", element: <TagDetailPage /> }
    ],
  },
];

export default homeRoutes;
