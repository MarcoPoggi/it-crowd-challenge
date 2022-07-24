const { REACT_APP_API_URL } = process.env;

export async function getAuthorization({ username, password }) {
  const url = `${REACT_APP_API_URL}api/authorization`;

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { token, status } = await res.json();

    if (status !== 200) throw new Error("incorrect credentials");

    return token;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function authorizedToken() {
  const token = localStorage.getItem("access-token");
  if (!token) return false;

  const url = `${REACT_APP_API_URL}api/authorization/confirm`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { authorized } = await res.json();
  return authorized;
}
