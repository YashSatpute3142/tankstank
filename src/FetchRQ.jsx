import { useEffect, useState } from "react"
import { fetchPost } from "./API/api";
import { useQuery } from "@tanstack/react-query";

export const FetchRQ = () => {

    const {data, isPending, isError, error} = useQuery({ // fetch data from API
        queryKey:["posts"],   // do work usestate 
        queryFn:fetchPost, // do work of useEffect
        gcTime:1000,
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
                            <p>{title}</p>
                            <p>{body}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}