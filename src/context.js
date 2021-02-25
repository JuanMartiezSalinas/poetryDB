/** @format */

import React, { useState, useEffect, useContext } from "react";
import pagination from "./paginate";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState("");
  const [poem, setPoem] = useState("");
  const [poems, setPoems] = useState(0);
  const [info, setInfo] = useState({
    author: "",
    title: "",
    lines: [],
    lineCount: 0,
  });
  const [clicked, setClicked] = useState("");

  const fetchPoem = async (url) => {
    setLoading(true);
    try {
      const reponse = await fetch(url);
      const data = await reponse.json();
      console.log(data);
      setData(data);
      setPoems(data.length);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchSinglePoem = async (url) => {
    setLoading(true);
    try {
      const reponse = await fetch(url);
      const data = await reponse.json();
      console.log(data, url);
      setInfo({
        author: data[0].author,
        title: data[0].title,
        lines: data[0].lines,
        lineCount: data[0].linecount,
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (loading) return;
  //   setPoems(data[page]);
  // }, [loading, page]);

  // const nextPage = () => {
  //   setPage((oldPage) => {
  //     let nextPage = oldPage + 1;
  //     if (nextPage > data.length - 1) {
  //       nextPage = 0;
  //     }
  //     return nextPage;
  //   });
  // };

  // const prevPage = () => {
  //   setPage((oldPage) => {
  //     let prevPage = oldPage - 1;
  //     if (prevPage < 0) {
  //       prevPage = data.length - 1;
  //     }
  //     return prevPage;
  //   });
  // };

  // const handlePage = (index) => {
  //   setPage(index);
  // };

  return (
    <AppContext.Provider
      value={{
        data,
        author,
        setData,
        setAuthor,
        fetchPoem,
        poem,
        setPoem,
        info,
        fetchSinglePoem,
        clicked,
        setClicked,
        loading,
        poems,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
