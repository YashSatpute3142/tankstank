import { useEffect, useState } from "react"
import { fetchPost } from "./API/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

export const FetchRQ = () => {

    const [pageNumber, setpageNumber] = useState(0)

    const {data, isPending, isError, error} = useQuery({ // fetch data from API
        queryKey:["posts", pageNumber],   // do work usestate 
        queryFn:() => fetchPost(pageNumber), // do work of useEffect
        // gcTime:1000,
        // staleTime:1000000,
        // refetchInterval:1000,  // polling calling  sever after given time
        // refetchIntervalInBackground:true, // run polling even in background
        placeholderData:keepPreviousData,
    }) 

    if(isPending) return <p>Loading....</p>;
    if(isError) return <p>Error: {error.message || "Somthing Went Wrong......:("} </p>;

    return (
        <div>
            <ul className="section-accordion">
                {data?.map((curElem) => {
                    const {id, title, body} = curElem;
                    return(
                        <li key={id}>
                            <NavLink  to={`/rq/${id}`} >
                            <p>{id}</p>
                            <p>{title}</p>
                            <p>{body}</p>
                            </NavLink>
                            
                        </li>
                    )
                })}

                <div className="pagination-section container">
                <button disabled= {pageNumber === 0 ? true: false} onClick={() => setpageNumber((Prev) => Prev - 3 )}>Prev</button>
                <h2>{(pageNumber/3) + 1}</h2>
                <button onClick={() => setpageNumber((Prev) => Prev + 3 )}>Next</button>
                </div> 
            </ul>

            
        </div>
    )
}