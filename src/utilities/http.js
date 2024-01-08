import axios from "axios"


export const productSample = async () => {
    const res = await axios.get('../../public/productSample.json')
    return res.data;
}

export const reviews = async () => {
    const res = await axios.get('../../public/review.json')
    return res.data;
}