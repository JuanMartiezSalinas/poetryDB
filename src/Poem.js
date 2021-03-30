/** @format */

import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
const API_ENDPOINT3 = "https://poetrydb.org/title/";
const Poem = () => {
  const { fetchSinglePoem, info, clicked, loading } = useGlobalContext();
  useEffect(() => {
    fetchSinglePoem(`${API_ENDPOINT3}${clicked}`);
  }, []);
  console.log(info);
  const { author, title, lines, lineCount } = info;
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <article className="poem">
      <h3 className="poem-title">{title}</h3>
      <h4 className="count">{lineCount} lines</h4>
      <blockquote
        className="text"
        onClick={() => {
          navigator.clipboard.writeText(lines);
        }}>
        {lines.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
        <h4 className="author">{author}</h4>
      </blockquote>
      <Link to="/">
        <div className="btn-container">
          <button className=" btn back-btn">
            <TiArrowBack className="icon" />
            back to poems
          </button>
        </div>
      </Link>
    </article>
  );
};
export default Poem;
