import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../Context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const SearchResult = () => {
  const { fetchNewsBySearch, loading, news, currentPage, setCurrentPage } =
    useContext(Context);
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(1);
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname.includes("search")) {
      fetchNewsBySearch(location.pathname.split("search=")[1]);
    }
    // eslint-disable-next-line
  }, [location.pathname.split("search=")[1], currentPage]);

  return (
    <div className="py-4">
      <div>
        <h6 className="text-center text-uppercase">Search Results For</h6>
        <h2 className="text-center text-capitalize fs-1">
          '{location.pathname.split("search=")[1]}'
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
        <>
          {news.length === 0 ? (
            <div className="d-flex align-items-center justify-content-center w-100" style={{minHeight: "80vh"}} >
              <p className="m-0 fs-1 fw-bold">No Results Found.</p>
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
        </>
      )}
    </div>
  );
};

export default SearchResult;
