const { REACT_APP_API_URL } = process.env;

const endpoints = {
  id: "api/products/?id",
  products: "api/products",
};

export function getProducts(id, value) {
  const url = id
    ? `${REACT_APP_API_URL}${endpoints[id]}=${value}`
    : `${REACT_APP_API_URL}${endpoints.products}`;
    
  return fetch(url)
    .then((res) => res.json())
    .then(({ data }) => data)
    .catch((e) => e.message);
}
