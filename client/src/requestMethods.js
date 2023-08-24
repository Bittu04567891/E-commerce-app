import axios from "axios";

const BASE_URL = "http://localhost:3000/E-commerce-app/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTRlOWNiZDVjMjJjYzIzYzAxYzBjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mjg5NzgwOSwiZXhwIjoxNjkzMTU3MDA5fQ.g4_4nhXzkPPUVaBLGi3FvLfBsKSdqWetG8M8pNcSOVI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
