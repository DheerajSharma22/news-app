import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { Context } from "../Context/AppContext";
import Spinner from "./Spinner";
import { useLocation } from "react-router-dom";

const Blogs = () => {
  const { fetchNews, news, loading, currentPage, setCurrentPage } =
    useContext(Context);
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(1);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (
      !location.pathname.includes("category") ||
      !location.pathname.includes("search")
    ) {
      fetchNews();
    }
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <div className="py-4">
      <h3 className="text-center">Top Headlines</h3>
      {loading ? (
        <div
          style={{
            width: "100vw",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row">
            {news.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
