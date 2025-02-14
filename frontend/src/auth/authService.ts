import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // Substitua pela URL da sua API

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      console.log(response.data) // Retorna o token ou informações do usuário
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
