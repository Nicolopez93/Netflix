import React, { useEffect, useState } from "react";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import axios from "axios";
import Movie from "./Movie";

const Row = ({ title, fetchUrl, rowID }) => {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center space-x-2 overflow-x-scroll scrollbar-hide p-4 group">
        <MdChevronLeft onClick={slideLeft} className="bg-white rounded-full absolute top-0 bottom-0 left-0 z-10 m-auto h-9 w-9 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block" />
        <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white rounded-full absolute top-0 bottom-0 right-0 z-10 m-auto h-9 w-9 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block " />
      </div>
    </>
  );
};

export default Row;
