import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);
  console.log(movies);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center space-x-2 overflow-x-scroll scrollbar-hide p-4">
        <div id={"slider"}>
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full">
                  {item?.title}
                </p>
                <p>
                  {like ? (
                    <FaHeart className="absolute top-4 left-4 text-gray-300" />
                  ) : (
                    <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
