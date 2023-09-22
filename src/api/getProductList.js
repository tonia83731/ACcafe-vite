import axios from "axios";
// https://vue3-course-api.hexschool.io/api/huiyu-cafe-product/admin/products/all
const authToken = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = authToken;

export const getProductList = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/products/all`
    );
    return res;
  } catch (error) {
    console.error("[Get product list failed]:", error);
  }
};

export const createProduct = async (payload) => {
  // const {title, description, category, unit, origin_price, price, imageUrl, is_enabled} = payload
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/product`,
      payload
    );
    return res.data;
  } catch (error) {
    console.error("[Create new product failed]:", error);
  }
};

export const editProduct = async (payload, id) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/product/${id}`,
      payload
    );
    return res.data
  } catch (error) {
    console.error("[Edit product failed]", error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/product/${id}`
    );
    return res.data;
  } catch (error) {
    console.error("[Delete product failed]", error);
  }
};
