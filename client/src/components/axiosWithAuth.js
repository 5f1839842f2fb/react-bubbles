import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  
  /* return axios.create({
    headers: { Authorizaton: token }
  }); */ //why does this not work??????

  return axios.create({
    headers: { Authorization: localStorage.getItem('token') }
  });
}

export default axiosWithAuth