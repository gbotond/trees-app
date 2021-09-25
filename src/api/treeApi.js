import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/trees/";

export function getTrees() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getTreeBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(trees => {
        if (trees.length !== 1) throw new Error("Tree not found: " + slug);
        return trees[0];
      });
    })
    .catch(handleError);
}

export function saveTree(tree) {
  return fetch(baseUrl + (tree.id || ""), {
    method: tree.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...tree,
      authorId: parseInt(tree.authorId, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteTree(treeId) {
  return fetch(baseUrl + treeId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
