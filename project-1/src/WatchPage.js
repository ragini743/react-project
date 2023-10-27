import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { Link, useSearchParams } from "react-router-dom";
const WatchPage =() =>{
const [resultMovie,setResultMovie] = useState([])
    const [searchParams] = useSearchParams()
    console.log("dfgh",searchParams.get("q"))
const movieResult = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&query="+ searchParams.get("q"));
    const json = await data.json() ;
    const result=json.results
    console.log("json",result[0])
    setResultMovie(result);
    console.log("resultMap",resultMovie)
}
useEffect(()=>{movieResult()},[searchParams])

    return(
        <div>
             {resultMovie.map((m)=>( 
               <Movie m={m}/>)) }
        </div>
    )
}
export default WatchPage;