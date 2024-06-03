import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getOrder = async (user_id) => {
  try {
    const response = await axios.get(`${API_URL}/orders/user/${user_id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};
