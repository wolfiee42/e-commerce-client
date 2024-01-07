import axios from "axios"


export const productSample = async () => {
    const res = await axios.get('../../public/productSample.json')
    return res.data;
}