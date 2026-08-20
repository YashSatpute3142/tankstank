import { useQuery } from "@tanstack/react-query"
import { NavLink, useParams } from "react-router-dom"
import { fetchinvPost } from "../../API/api"

export const FetchIndv = () => {
    
    const {id} = useParams()

    const {data, isPending, isError, error} = useQuery({ // fetch data from API
        queryKey:["post", id],   // do work usestate 
        queryFn:() => fetchinvPost(id), // do work of useEffect
        
    }) 

    if(isPending) return <p>Loading....</p>;
    if(isError) return <p>Error: {error.message || "Somthing Went Wrong......:("} </p>;

    return (
        <div>
            <ul className="section-accordion">
                <li>
                    <p>ID: {data.id}</p>
                    <p>Title: {data.title}</p>
                    <p>Body: {data.body}</p>
                </li>
                <NavLink to="/rq">
                <button>GO Back</button>
                </NavLink>
            </ul>
           
        </div>
    )
}