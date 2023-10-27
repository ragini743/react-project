import React, { useState, useEffect } from "react";
import { Component } from "./Component";
import {Link, useSearchParams} from "react-router-dom"
import { useState } from "react";
import WatchPage from "./WatchPage";
export const App = () => {
    const [newMovies ,setNewMovies] =useState([]) ;
  const [movies, setmovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (inputValue == "") {
      fetchData();
    }
  }, [inputValue]);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?short_by=%20popularity.desc&api_key=d62e1adb9803081c0be5a74ca826bdbd&page=1"
    );
    
    const json = await data.json();
    
    const result = json.results; 
    setmovies(result);
 
  };
 

  const inputResult = async ()=>{
    const resultData= await fetch ("https://api.themoviedb.org/3/search/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&query="+inputValue);
    console.log("inputResult",resultData)
    const resultJson= await resultData.json();
    console.log("resultJson",resultJson)
    // setNewMovies(resultJson.results)
    setmovies(resultJson.results)
    
  }

  return (
    <>
      <div className=" flex align-baseline justify-center m-4">
        <div className="bold mr-4 md:m-4 md:w-1/3 rounded-lg border-2 border-gray-950 shadow-zinc-700 P-2 border-box">
        <input placeholder="enter movies name here ......."
          type="search"
          value={inputValue}
          className=" border-0 outline-offset-0 p-3 rounded-lg w-full"
          onChange={(e) => {
            setInputValue(e.target.value.toLowerCase());
           
          }}
        />
        </div>
        <button className="rounded-lg bg-lime-300 md:m-4 p-2"
          type="button"
          onClick={() => {
            console.log(inputValue);
            inputResult()
          }}
        >
          search
        </button>
      </div>

      <div className="grid-cols-1 sm:grid-cols-2 my-14 mx-auto h-full grid  md:grid-cols-3 gap-6 p-2 max-w-screen-lg justify-center">
        {movies.map((movie) => (
          <Link to={"movie?q="+movie.title} key={movie.id}>
          <Component movie={movie} />;
          
          </Link>
        ))}
      </div>
    </>
  );
};



