import { getProducts } from "../api/products";
import { useQuery, useMutation, useQueryClient } from "react-query";
import apiService from "../api/axios";
import { ToastContainer, toast } from "react-toastify";


const useProductList = () => {
  return useQuery(["get-products"], () => getProducts());
};

const useAddProduct = () => {
  const queryClient = new useQueryClient();
  return useMutation("get-products", async (data) => {
    try {
      let response = await apiService.post(`/add-product`, data, {
        Accept: `application/json`,
        "Content-Type": `multipart/form-data`,
        api: true,
      });
      if (response.data.message === "Product already exists.") {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
      }
      queryClient.refetchQueries(["get-products"]);
      return response.data;
    } catch (e) {
      queryClient.refetchQueries(["get-products"]);
      throw e;
    }
  });
};

const hooks = {
  useProductList,
  useAddProduct,
};

export default hooks;
