import axios from "axios";
const AxiosPublic = axios.create({
  baseURL: "https://e-commerce-server-ivory-nine.vercel.app/",
});

const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;
