import { useQuery } from "@tanstack/react-query";
import { products } from "../utilities/http"
const useProducts = () => {

    const { data: product } = useQuery({
        queryKey: ["Products"],
        queryFn: products
    })
    return product;
};

export default useProducts;