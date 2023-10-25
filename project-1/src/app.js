import React, { useState, useEffect } from "react";
import { Component } from "./Component";
import { useState } from "react";
export const App = () => {
    const [newMovies ,setNewMovies] =useState([]) ;
  const [movies, setmovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?short_by=%20popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    );
    console.log("data", data);
    const json = await data.json();
    
    const result = json.results;
    
    setmovies(result);
    console.log("setMovies",movies)
    setNewMovies(result)
  };
  console.log("movies", movies);

  return (
    <>
      <div className=" flex justify-center m-4">
        <div className="bold m-4 w-1/3 rounded-lg border-2 border-gray-950 shadow-zinc-700 P-2 border-box">
        <input placeholder="enter movies name here ......."
          type="search"
          value={inputValue}
          className=" border-0 outline-offset-0 p-3 rounded-lg w-full"
          onChange={(e) => {
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        />
        </div>
        <button className="rounded-lg bg-lime-300 m-4 p-2"
          type="button"
          onClick={() => {
            console.log(inputValue);

            console.log("hello", inputValue);
            const filteredMovies = newMovies.filter((fgh) => {
            
              return fgh.title.toLowerCase().includes(inputValue.toLowerCase());
              
            });
            setmovies(filteredMovies);
            console.log("setnewmovies",setNewMovies)
            
        
          }}
        >
          search
        </button>
      </div>

      <div className="grid-cols-1 sm:grid-cols-2 my-14 mx-auto h-full grid  md:grid-cols-3 gap-6 p-2 max-w-screen-lg justify-center">
        {movies.map((movie) => {
          return <Component key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
};