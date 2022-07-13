import axios from "axios";

const URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
console.log(TOKEN);
// const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMzOWI1ZjA4YjcxNzRmZTZiNjgwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzYxNTg5NywiZXhwIjoxNjU3NjE1OTU3fQ.B0xRAcZf-27-v8Vw0950QikDb9PXdLLH1owWTls0BtU"
export const publicRequest = axios.create({
  baseURL: URL,
});

export const userRequest = axios.create({
  baseURL: URL,
  headers: { token: `Bearer ${TOKEN}` },
});