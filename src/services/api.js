import callApi from "../utils/call-api";



export const getUsers = () => callApi("/users", { method: "GET" });
export const postUser = body => callApi("/users" , { method: "POST" , body});
export const updateUser = (body,id) => callApi(`/users/${id}`, {method: "PUT" ,body});
export const deleteUser = id => callApi(`/users/${id}`, { method: "DELETE" });

export const getPosts = () => callApi(`/posts`, { method: "GET" });
export const postPost = body => callApi("/posts" , { method: "POST" , body});

