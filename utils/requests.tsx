import axios from 'axios';

export const login = async (email: string, password: string) => {
  const response = await axios.get(`https://petstore.swagger.io/v2/user/login?username=${email}&password=${password}`);
  return response;
};