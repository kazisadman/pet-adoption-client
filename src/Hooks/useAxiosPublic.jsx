import axios from "axios";

const axiosInstancePublic = axios.create({
  baseURL: "https://y-nine-sigma.vercel.app",
});
const useAxiosPublic = () => {
  return axiosInstancePublic;
};

export default useAxiosPublic;
