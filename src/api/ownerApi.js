import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/owners/";

export function getOwners() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveOwner(owner) {
  return fetch(baseUrl + (owner.id || ""), {
    method: owner.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(owner)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteOwner(ownerId) {
  return fetch(baseUrl + ownerId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
