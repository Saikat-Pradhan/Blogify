import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl bg-white text-black dark:text-white dark:bg-black space-y-4 w-screen">
      <AiOutlineLoading3Quarters className="w-16 h-16 animate-spin"/>
      <h2>Loading, please wait...</h2>
    </div>
  );
};

export default Loading;