import axios from "axios";
// https://vue3-course-api.hexschool.io/api/huiyu-cafe-product/admin/products/all
const authToken = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = authToken;

export const getNewsList = async (page) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/articles?page=${page}`,
      {}
    );
    return res;
  } catch (error) {
    console.error("[Get product list failed]:", error);
  }
};

export const createNews = async (payload) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/article`, payload)
      return res.data
  } catch (error) {
    console.error("[Create new news failed]:", error);
  }
}

export const editNews = async (payload, id) => {
  try {
    const res = await axios.put(`${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/article/${id}`, payload)
  } catch (error) {
    console.error("[Edit news failed]", error);
  }
}

export const deleteNews = async (id) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/article/${id}`
    );
    return res.data;
  } catch (error) {
    console.error("[Delete product failed]", error);
  }
};