import axios from 'axios';

const API_URL = 'https://api.church-of-the-wilderness.com/auth';

const authenticate = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const logout = () => {
  localStorage.removeItem('token');
};

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token!== null;
};

export { authenticate, logout, isAuthenticated };