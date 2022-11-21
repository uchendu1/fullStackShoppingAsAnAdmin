import axios from "axios";

export const BASE_URL = "http://localhost:5000/api";
//console.log(localStorage.getItem("persist:root"))

// console.log(JSON.parse(localStorage.getItem("persist:root")))

//console.log(JSON.parse(localStorage.getItem("persist:root")).user)

 console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
//console.log(localStorage.getItem("persist:root"), "=============");

console.log(TOKEN, "TOKEN.........")
export const publicRequest = axios.create({
    baseUrl: BASE_URL,
});


export const userRequest = axios.create({
    baseUrl: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});