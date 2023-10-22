import { getProducts } from "../api/products";
import { toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "react-query";

const useProductList = () => {
    return useQuery(["get-products"], () => getProducts()); // Changed this line
};


const hooks = {
    useProductList
}

export default hooks