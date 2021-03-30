/** @format */

import React from "react";
import { useGlobalContext } from "./context";
const API_ENDPOINT = "https://poetrydb.org/author/";
const API_ENDPOINT2 = "https://poetrydb.org/author,title/";
const API_ENDPOINT3 = "https://poetrydb.org/title/";
const Form = () => {
  const {
    data,
    author,
    setAuthor,
    fetchPoem,
    poem,
    setPoem,
  } = useGlobalContext();
  const handleChange = (e) => {
    setAuthor(e);
  };
  const handleSubmit = (e) => {
    let url;
    if (author && poem) {
      url = `${API_ENDPOINT2}${author};${poem}`;
    } else if (author && !poem) {
      url = `${API_ENDPOINT}${author}`;
    } else if (!author && poem) {
      url = `${API_ENDPOINT3}${poem}`;
    }
    console.log(url);
    fetchPoem(url);
  };
  return (
    <div className="form-container">
      <h3 className="title">PoetryDB</h3>
      <form className="submit-form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>
            author:
            <input
              placeholder="e.g. Shakespeare"
              className="input"
              type="text"
              value={author}
              onChange={(e) => handleChange(e.target.value)}
              required={author || poem ? false : true}></input>
          </label>
          <label>
            poem:
            <input
              placeholder="e.g. Winter"
              className="input"
              type="text"
              value={poem}
              onChange={(e) => setPoem(e.target.value)}
              required={poem || author ? false : true}
            />
          </label>
        </div>
        <button className="btn submit-btn" onClick={handleSubmit}>
          send
        </button>
      </form>
    </div>
  );
};
export default Form;
