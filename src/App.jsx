import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import HomeCards from "../src/components/HomeCards";
import JobListings from "../src/components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </div>
  );
};

export default App;
