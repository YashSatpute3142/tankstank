import { useEffect, useState } from "react"
import { fetchPost } from "./API/api";

export const FetchOld = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const getPostData = async() => {
        try {
            const res = await fetchPost();
            if(res.status === 200){
              setPosts(res.data);
              setIsLoading(false);
            }
            
            
        } catch (error) {
            console.error(error);
            setIsError(true);
            setIsLoading(false);
            
        }
    }
    useEffect(() => {
        getPostData()
    },[])

    if(isLoading) return <p>Loading....</p>;
    if(isError) return <p>Somthing Went Wrong......!</p>;

    return (
        <div>
            <ul className="section-accordion">
                {posts?.map((curElem) => {
                    const {id, title, body} = curElem;
                    return(
                        <li key={id}>
                            <p>{title}</p>
                            <p>{body}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}