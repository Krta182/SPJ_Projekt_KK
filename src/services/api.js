import callApi from "../utils/call-api";

export const getUsers = () => callApi("/users", { method: "GET" });