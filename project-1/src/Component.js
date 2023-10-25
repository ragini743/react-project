import React from "react";

export const Component = (props) => {
  const { movie } = props;
  console.log(props);
  const {
    title,
    release_date,
    vote_average,
    original_language,
    overview,
    poster_path,
  } = movie;
  const image = "https://image.tmdb.org/t/p/w1280";
  return (
    <div
      className="border-2 border-solid  mx-auto rounded-2xl
        "
    >
      <div className="p-0">
        <img src={image + poster_path} />
      </div>
      <div className="px-2">
        <h1 className="font-bold">
          Movie-name :{" "}
          <span className="font-normal text-slate-800"> {title} </span>
        </h1>
        <h1 className="font-bold">
          Release-Date : <span className="font-normal text-slate-800"> {release_date} </span>
        </h1>
        <h1 className="font-bold">Voting : <span className="font-normal text-slate-800"> {vote_average}* </span></h1>
        <h1 className="font-bold">Lang :<span className="font-normal text-slate-800"> {original_language} </span></h1>
        <p className="text-slate-400 text-xs overflow-hidden">
          Overview : {overview}
        </p>
      </div>
    </div>
  );
};
