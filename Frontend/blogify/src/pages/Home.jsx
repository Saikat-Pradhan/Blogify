import { useEffect } from "react";
import BlogItems from "../components/BlogItems";
import { speaker } from "../services/blogService";

const HomePage = () => {

  useEffect(() => {
    const welcomeMessage = "Welcome to Home Page. Click on the blog you want to view.";
    speaker(welcomeMessage);
  }, []);

  return (
    <div className='flex justify-center items-center pt-3 lg:pt-0 h-screen bg-amber-200 overflow-scroll dark:bg-neutral-800'>
      <BlogItems />
    </div>
  );
};

export default HomePage;