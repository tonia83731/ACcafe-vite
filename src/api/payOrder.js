import axios from "axios";

export const payOrder = async (payload) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/order`,
      payload
    );
    return res.data;
  } catch (error) {
    console.error("[Order complete failed]:", error);
  }
};