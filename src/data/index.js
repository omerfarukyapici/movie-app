import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: "https://api.themoviedb.org/3/",
        headers: {
            Accept: "application/json"
        },
        params:{
            api_key: "88a569b0dd681ae1d136563418b6afb5"
        }
    });
}
