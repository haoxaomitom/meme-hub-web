import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import AdSpace from "./AdSpace";
import TopContributors from "./TopContributors";
import FeaturedMemes from "../../components/FeaturedMemes";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />

      {/* Ad Space 1 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AdSpace className="h-32" />
      </div>

      <FeaturedMemes />

      {/* Ad Space 2 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AdSpace className="h-32" />
      </div>

      <TopContributors />

      <Footer />
    </div>
  );
}
