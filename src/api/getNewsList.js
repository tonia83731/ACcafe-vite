import axios from "axios";
// https://vue3-course-api.hexschool.io/api/huiyu-cafe-product/admin/products/all
const authToken = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = authToken;

export const getNewsList = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/articles`,
      {}
    );
    return res;
  } catch (error) {
    console.error("[Get product list failed]:", error);
  }
};
