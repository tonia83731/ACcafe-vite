import axios from "axios";

export const getFrontProductCartList = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/cart`
    );
    return res.data;
  } catch (error) {
    console.error("[Get cart list failed]:", error);
  }
};

export const addToCart = async (payload) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/cart`, payload)
      return res.data
  } catch (error) {
    console.error("[Add product to cart failed]:", error);
  }
}

export const updateCart = async (id) => {
  try {
    const res = await axios.put(`${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/cart/${id}`)
      return res
  } catch (error){
    console.error("[Update cart failed]:", error);
  }
}

export const deleteOneCartProduct = async (id) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/cart/${id}`
    );
    return res;
  } catch (error) {
    console.error("[Delete cart failed]:", error);
  }
}
