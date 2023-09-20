import axios from "axios";
// https://vue3-course-api.hexschool.io/api/huiyu-cafe-product/admin/products/all

// 取得市區所有公車路線
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