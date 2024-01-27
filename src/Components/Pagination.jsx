import React, { useContext } from "react";
import { Context } from "../Context/AppContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages, loading } = useContext(Context);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="bg-dark text-white py-3 ">
          <div className="container d-flex align-items-center w-100 justify-content-between">
            <div>
              <p className="m-0 fw-semibold">
                Page {currentPage} of {totalPages}
              </p>
            </div>
            <div className="d-flex align-items-center gap-3">
              {currentPage > 1 ? (
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setCurrentPage((prev) => prev - 1);
                  }}
                >
                  Prev
                </button>
              ) : (
                <></>
              )}
              {currentPage < totalPages ? (
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setCurrentPage((prev) => prev + 1);
                  }}
                >
                  Next
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
