import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTRlOWNiZDVjMjJjYzIzYzAxYzBjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mjk1NjYyNywiZXhwIjoxNjkzMjE1ODI3fQ.kMTEA0X4jb1BvKlOx3C2JSRW1eIuMBznSSYjmnKqiFY";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
