import axios from "axios";

export const getFrontNewsList = async (page) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/articles?page=${page}`
    );
    return res;
  } catch (error) {
    console.error("[Get product list failed]:", error);
  }
};

export const getFrontOneNewsList = async (id) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/article/${id}`
    )
  } catch (error) {
    console.error("[Get front one product failed]:", error);
  }
}