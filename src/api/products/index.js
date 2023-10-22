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


