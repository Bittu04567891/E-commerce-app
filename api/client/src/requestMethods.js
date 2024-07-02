import axios from "axios";

const BASE_URL = `${window.location.origin}/api`;

let TOKEN = "";

// Fetch persisted state from localStorage
const persistedState = localStorage.getItem("persist:root");

if (persistedState) {
  try {
    // Parse the persisted state
    const userState = JSON.parse(JSON.parse(persistedState).user);

    if (userState && userState.currentUser) {
      TOKEN = userState.currentUser.accessToken;
    }
  } catch (error) {
    console.error("Error parsing persisted state: ", error);
  }
}

console.log("Retrieved Token:", TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

// Function to update token if necessary
export const updateUserRequestToken = (newToken) => {
  TOKEN = newToken;
  userRequest.defaults.headers["token"] = `Bearer ${newToken}`;
};
