import { useEffect } from "react";
import BlogItems from "../components/BlogItems";

const HomePage = () => {
  useEffect(() => {
    const speechSynth = window.speechSynthesis;
    const welcomeMessage = "Welcome to Home Page. Double Click to the blog you want to view.";

    if (!speechSynth.speaking) {
      const utterance = new SpeechSynthesisUtterance(welcomeMessage);
      speechSynth.speak(utterance);
    }
  }, []);

  return (
    <div className='h-screen overflow-scroll'>
      <BlogItems />
    </div>
  );
};

export default HomePage;