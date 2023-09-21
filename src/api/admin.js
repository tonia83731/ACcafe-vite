import axios from "axios";

export const signin = async ({username, password}) => {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_API}/admin/signin`, {username, password})
    // console.log(data)
    const { token } = data
    if(token) {
      return { sucess: true, ...data}
    }
    return data
  } catch (error) {
    console.error('[Signin Failed]', error)
  }
}

export const checkPermission = async ({ username, password }) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API}/api/user/check`,
      {username, password});
    return response.data.success;
  } catch (error) {
    console.error("[Check Permission Failed]:", error);
  }
};

// export const checkPermission = async (token) => {
//   try {
//     const response = await axios.post(
//       `${import.meta.env.VITE_APP_API}/api/user/check`,
//       {
//         headers: {
//           Authorization: `${token}`,
//         },
//       }
//     );
//     console.log(response.data)
//     return response.data.success
//   } catch (error) {
//     console.error('[Check Permission Failed]:', error)
//   }
// }