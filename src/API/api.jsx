import axios from "axios";

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

export const fetchPost = async() => {
    try {
        const res = await api.get("/posts")
        return res.status === 200 ? res.data : [];
    } catch (error) {
        console.error(error);
        
    }
    
}

