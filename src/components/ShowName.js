import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Summary from "./Summary";

const ShowName = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();
  const handleClick = (product) => {
    console.log("DATA IS : ", product);
    navigate(`/show/${product.id}`, {
      state: { id: product },
    });
  };
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        console.log("data : ", shows);
        setShows(data);
      })
      .catch((error) => console.error("Error fetching shows:", error));
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = [
    "All Rise",
    "All American",
    "All That",
    "All That",
    "All Stars",
    "All Souls",
    "All Saints",
    "All Night",
    "All Access",
    "All Out!!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <>
      <div className="show">
        <h1>
          {" "}
          Choose the Best! <span>"{text[currentIndex]}"</span>
        </h1>{" "}
        <ul>
          {" "}
          {shows.map((show) => (
            <li
              className="link"
              onClick={() => handleClick(show.show)}
              key={show.show.id}
            >
              {/* to={`/show/${show.show.id}`} */}
              {show.show.name}
            </li>
          ))}
        </ul>{" "}
        <img src="bg.png" alt="" srcset="" />
      </div>
    </>
  );
};

export default ShowName;
