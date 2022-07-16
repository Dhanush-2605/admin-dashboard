import axios from "axios";

const URL = "http://localhost:5000/api/";
const user= JSON.parse(localStorage.getItem("persist:root")).user;
const currentUser=user && JSON.parse(user).currentUser;
// const TOKEN=currentUser?.accessToken;
// console.log()
// console.log(TOKEN);
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMzOWI1ZjA4YjcxNzRmZTZiNjgwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzk3MDk2MywiZXhwIjoxNjU4MjMwMTYzfQ.wRqeyhfdUDkA6iGK5OQGDqgbcd4O9wou2h46f96RZx8"
export const publicRequest = axios.create({
  baseURL: URL,
});

export const userRequest = axios.create({
  baseURL: URL,
  headers: { token: `Bearer ${TOKEN}` },
});