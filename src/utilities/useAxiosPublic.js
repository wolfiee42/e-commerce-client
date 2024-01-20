import axios from "axios"
const AxiosPublic = axios.create({
    baseURL: "http://localhost:8000/"
})

const useAxiosPublic = () => {
    return AxiosPublic;
};

export default useAxiosPublic;