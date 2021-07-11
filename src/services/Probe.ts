import { instance as axios } from "../configs/Axios";

export const probe = async (url: string): Promise<Response> => {
  try {
    return await axios.head(url);
  } catch (error) {
    return error.response;
  }
};
