import axios from 'axios';

const Backend_URL = "https://mern-sample-app-1.onrender.com";

export const getAllBlogs = async () => {
  try {
    const res = await axios.get(`${Backend_URL}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch blogs");
  }
};

export const getBlog = async ({params}) => {
  try {
    const res = await axios.get(`${Backend_URL}/${params.id}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch blog");
  }
};

export const createNewBlog = async (blogData) => {
  try {
    const response = await axios.post(`${Backend_URL}`, blogData);
    return response.data;
  } catch (error) {
    console.error('Error submitting blog:', error);
    throw error;
  }
};

export const speaker = (welcomeMessage) => {
    const speechSynth = window.speechSynthesis;

    if (!speechSynth.speaking) {
      const utterance = new SpeechSynthesisUtterance(welcomeMessage);
      speechSynth.speak(utterance);
    }
};
