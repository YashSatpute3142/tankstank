import axios from "axios";

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

export const fetchPost = async(pageNumber) => {
    try {
        const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`)
        return res.status === 200 ? res.data : [];
    } catch (error) {
        console.error(error);
        
    }
    
}


//fetch indvi data

export const fetchinvPost = async(id) => {
    try {
        const res = await api.get(`/posts/${id}`);
        return res.status === 200 ? res.data: [];
    } catch (error) {
        console.error(error);
        
    }
}
