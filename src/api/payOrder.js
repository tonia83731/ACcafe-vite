import axios from "axios";

export const payOrder = async () => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/order`
    );
    return res;
  } catch (error) {
    console.error("[Order complete failed]:", error);
  }
};