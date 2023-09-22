import axios from "axios";

export const getFrontProductList = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/products/all`
    );
    return res;
  } catch (error) {
    console.error("[Get front product list failed]:", error);
  }
};