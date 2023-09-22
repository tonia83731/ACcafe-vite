import axios from "axios";
// https://vue3-course-api.hexschool.io/api/huiyu-cafe-product/admin/products/all
const authToken = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = authToken;

export const getOrderList = async (page) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/orders?page=${page}`
    );
    return res;
  } catch (error) {
    console.error("[Get order list failed]:", error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/order/${id}`
    );
    return res.data;
  } catch (error) {
    console.error("[Delete one order failed]", error);
  }
};

export const deleteAllProduct = async () => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/orders/all`
    );
    return res.data;
  } catch (error) {
    console.error("[Delete all order failed]", error);
  }
};