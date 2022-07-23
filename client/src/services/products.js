const { REACT_APP_API_URL } = process.env;

export async function getProducts(id = null) {
  const url = !id
    ? `${REACT_APP_API_URL}api/products`
    : `${REACT_APP_API_URL}api/products/${id}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.status > 500)
      throw new Error("an error has occurred, we are working to solve it");
    if (data.status > 400) throw new Error("product not found");

    const info = data.data;

    const response = Array.isArray(info)
      ? info.map((p) => {
          return { ...p, price: p.price.toLocaleString("en-US") };
        })
      : { ...info, price: info.price.toLocaleString("en-US") };

    return response;
  } catch (e) {
    throw new Error(e.message);
  }
}
