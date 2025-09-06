import loadingImg from '../assets/loading.png';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl text-white bg-black space-y-4">
      <img
        src={loadingImg}
        className="w-16 h-16 animate-spin"
      />
      <h2>Loading, please wait...</h2>
    </div>
  );
};

export default Loading;