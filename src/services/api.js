import callApi from "../utils/call-api";

export const getUsers = () => callApi("/users", { method: "GET" });
export const postUser = body => callApi("/users" , { method: "POST" , body});

