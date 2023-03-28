import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const {origin} = new URL(config.url)

    const allowedOrigins = [process.env.REACT_APP_ENDPOINT];
    const token = localStorage.getItem("access-token")

    if(allowedOrigins.includes(origin)) {
      config.headers.authorization = token
    }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});



export const productList = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_ENDPOINT}/product?page=${pageParam}`
  );
  return data;
};
export const product = async (product_id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_ENDPOINT}/product/${product_id}`
  );
  return data;
};

export const signupDataPost = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_ENDPOINT}/auth/register`,
    input
  );
  return data;
};

export const signInDataPost = async(input) => {
  const {data} = await axios.post(`${process.env.REACT_APP_ENDPOINT}/auth/login`, input)
  return data;
}

export const fetcMe = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_ENDPOINT}/auth/me`);
  return data;
};

export const Logout = async() => {
  const {data} = await axios.post(`${process.env.REACT_APP_ENDPOINT}/auth/logout`,  {
    refresh_token: localStorage.getItem("refresh-token")
  })
  return data;
}


export const  postOrder =  async(input) => {
  const {data} = await axios.post(`${process.env.REACT_APP_ENDPOINT}/order`, input)

  return data;
}

export const adminOrders = async() => {
  const {data} = await axios.get(`${process.env.REACT_APP_ENDPOINT}/order`)

  return data;
}

export const deleteProducts = async(product_id) => {
  const {data} = await axios.delete(`${process.env.REACT_APP_ENDPOINT}/product/${product_id}`)
  return data;
}