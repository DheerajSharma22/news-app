import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { Context } from "../Context/AppContext";
import { useLocation } from "react-router-dom";
import Spinner from "./Spinner";

const CategoryResult = () => {
  const { fetchNewsByCategory, loading, news, currentPage, setCurrentPage } =
    useContext(Context);
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(1);
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname.includes("category")) {
      fetchNewsByCategory(location.pathname.split("category=")[1]);
    }
    // eslint-disable-next-line
  }, [location.pathname.split("category=")[1], currentPage]);

  return (
    <div className="py-4">
      <div>
        <h6 className="text-center text-uppercase">CATEGORIES</h6>
        <h2 className="text-center text-capitalize fs-1">
          '{location.pathname.split("category=")[1]}'
        </h2>
      </div>
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

export default CategoryResult;
