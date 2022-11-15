import axios from "axios";

export const BASE_URL = "http://localhost:5000/api";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDkzODgxZTNjZjM1NzAzZDRhMDdlNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTc0MzA4MSwiZXhwIjoxNjY2MzQ3ODgxfQ.vI9WaYLmRIyNngLyrdNBgIPD7nRegEDSfuJ3OYh8bSI"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

//console.log(localStorage.getItem("persist:root"))

// console.log(JSON.parse(localStorage.getItem("persist:root")))

 //console.log(JSON.parse(localStorage.getItem("persist:root")).user)

// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

console.log(TOKEN, "TOKEN.........")
export const publicRequest = axios.create({
    baseUrl: BASE_URL,
});


export const userRequest = axios.create({
    baseUrl: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});