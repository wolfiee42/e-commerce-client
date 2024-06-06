import axios from "axios";

export const productSample = async () => {
  const res = await axios.get("../../public/productSample.json");
  return res.data;
};

export const reviews = async () => {
  const res = await axios.get("../../public/review.json");
  return res.data;
};

export const products = async () => {
  const res = await axios.get(
    `https://e-commerce-server-ivory-nine.vercel.app/allproducts`
  );
  return res.data;
};
