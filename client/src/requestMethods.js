import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODIyMmE5ZWM5ZDhkYmFkNTk2YTdhMCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTk4MzQ3MjAsImV4cCI6MTcyMDA5MzkyMH0.VQ7FpGhbAzZPrQv2mK4YBARbeJHwgohKCqam4DAPIjc";
let TOKEN = "";

const persistedState = localStorage.getItem("persist:root");

if (persistedState) {
  const userState = JSON.parse(JSON.parse(persistedState).user);

  if (userState && userState.currentUser) {
    TOKEN = userState.currentUser.accessToken;
  }
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
