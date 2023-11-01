import apiService from "../axios";

export const getProducts = async () => {
  try {
    let response = await apiService.post("/products", {
      Accept: `application/json`,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getAddProduct = async (payload) => {
  try {
    let req = await apiService.post("/add-product", payload, {
      Accept: `application/json`,
      body: JSON.stringify(payload),
    });
    return req.data;
  } catch (err) {
    throw err;
  }
};
