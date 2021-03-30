/** @format */

import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const API_ENDPOINT3 = "https://poetrydb.org/title/";
const Poems = () => {
  const {
    author,
    data,
    fetchSinglePoem,
    setClicked,
    clicked,
    loading,
    poems,
    poem,
  } = useGlobalContext();
  const handleClick = (e) => {
    const poema = e.target.innerText;
    setClicked(poema);
    console.log(clicked);
  };
  if (poems === 0) {
    return (
      <div className="placeholder">
        <h1>The poems goes here</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="placeholder">
        <h1>Loading</h1>
      </div>
    );
  } else if (!loading && data.length > 0) {
    return (
      <section className="section ">
        <h4 className="poems-count">{poems} poems</h4>
        {data.map((poem, index) => {
          return (
            <Link to={`/title/${poem.title}`} key={index} onClick={handleClick}>
              <h4>{poem.title}</h4>
            </Link>
          );
        })}
      </section>
    );
  }
  return (
    <div className="placeholder">
      <h1>No poems found</h1>
    </div>
  );
};
export default Poems;
