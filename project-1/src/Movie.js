import React from "react";
const Movie =({m}) =>{
const {original_title,original_langauage,release_date,vote_count,vote_average,overview,poster_path} =  m;
    console.log("m",m)
    return(
        <div>
            <div>
                <img src={"https://image.tmdb.org/t/p/w500/"+poster_path} alt="poster"/>
            </div>
            <h1>Title : {original_title}</h1>
            <p>Langauage : {original_langauage}</p>
            <p>release_date : {release_date}</p>
            <p>vote_average : {vote_average}</p>
            <p>overview : {overview}</p>
        </div>
    )
}
export default Movie ;