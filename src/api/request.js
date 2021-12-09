import axios from "axios";
const request = axios.create({
  baseUrl: "https://mallapi.duyiedu.com/",
});

request.interceptors.request.use((request) => {
  if (!/passport/.test(request.url)) {
    const user = JSON.parse(localStorage.getItem("USER")) ;
    request.params = {
      ...request.params,
      appkey:user.appkey
    };
  }
  return request;
});

request.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data;
  }
});

export default request;
