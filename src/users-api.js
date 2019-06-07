import axios from 'axios';

const usersAPI = axios.create({
  baseURL: 'https://acme-users-api-rev.herokuapp.com/api/users',
});

export default usersAPI;
