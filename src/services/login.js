import { BASE_API } from "../constants/API";

export function loginUser(data) {
  return fetch(`${BASE_API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
