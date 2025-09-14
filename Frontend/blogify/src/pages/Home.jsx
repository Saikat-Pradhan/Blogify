import { useEffect } from "react";
import BlogItems from "../components/BlogItems";
import { speaker } from "../services/blogService";

const HomePage = () => {
  useEffect(() => {
    const welcomeMessage = "Welcome to Home Page. Double Click to the blog you want to view.";
    speaker(welcomeMessage);
  }, []);

  return (
    <div className='h-screen overflow-scroll'>
      <BlogItems />
    </div>
  );
};

export default HomePage;