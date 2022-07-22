const { REACT_APP_API_URL } = process.env;

export async function getProducts(opts = { id: null }) {
  const url = !opts.id
    ? `${REACT_APP_API_URL}api/products`
    : `${REACT_APP_API_URL}api/products/${opts.id}`;

  try {
    const res = await fetch(url);
    const { data } = await res.json();
    return data;
  } catch (e) {
    return e;
  }
}
