import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from "../../../../utilities/useAxiosPublic"
import useAuth from "../../../../utilities/useAuth";
import SingleCartItem from './SingleCartItem';



const Cart = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const email = user?.email;

    const { data: products, refetch } = useQuery({
        queryKey: [email, 'cartedProduct'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/cart?email=${email}`)
            return res.data;
        }
    });

    return (
        <div className="grid grid-cols-5">
            <div className="col-span-3 grid grid-cols-3 bg-[#E6E8D9] min-h-fit m-5 rounded-lg p-5  gap-3">
                {
                    products && products.map(product => <SingleCartItem key={product._id} product={product} email={email} refetch={refetch} />)
                }
            </div>
            <div className="col-span-2">
                hello
            </div>
        </div>
    );
};

export default Cart;