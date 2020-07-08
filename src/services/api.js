import callApi from "../utils/call-api";

export const getUsers = () => callApi("/users", { method: "GET" });
export const postUser = body => callApi("/users" , { method: "POST" , body});
export const updateUser = body => callApi("/users", {method:"PUT",body});
export const deleteUser = id => callApi(`/users/${id}`, { method: "DELETE" });
