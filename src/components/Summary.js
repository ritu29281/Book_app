import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Summary = ({ match }) => {
  const [show, setShow] = useState(null);
  const location = useLocation();
  const [data, setdata] = useState(location.state.id);

  return (
    <>
      <div className="content">
        <div className="left">
          <img src={data.image.original} alt="" srcset="" />
        </div>
        <div className="right">
          <h1> Name: {data.name}</h1>
          <h1> ID: {data.id}</h1>
          <h1>Genres: {data.genres}</h1>
          <h1>Language: {data.language}</h1>
          <h1>Rating: {data.rating.average}</h1>
          <h1>Premiered: "{data.premiered}"</h1>
          <h1>Type: {data.type}</h1>
          <div className="bottom">
            <p>{data.summary}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
