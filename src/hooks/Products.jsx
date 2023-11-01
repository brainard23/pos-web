import { getAddProduct, getProducts } from "../api/products";
import { toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "react-query";
import apiService from "../api/axios";

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
      console.log(response, data, 'here')
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
