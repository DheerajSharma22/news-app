import React, { useContext } from "react";
import { Context } from "../Context/AppContext";

const Card = ({ item }) => {
  const { setShowModal, setModalData } = useContext(Context);
  if (!item || !item.description || !item.urlToImage) return <></>;

  return (
    <div className="col-lg-4 col-sm-6 col-12 mb-4">
      <div className="card">
        <img
          src={item.urlToImage}
          className="card-img-top"
          alt="Newsimage"
          style={{ height: "250px" }}
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title">{`${
            item.title.length > 50
              ? item.title.substr(0, 50) + "..."
              : item.title
          }`}</h5>
          <p className="card-text">{`${
            item.description.length > 80
              ? item.description.substr(0, 80) + "..."
              : item.description
          }`}</p>
          <button
            className="btn btn-warning"
            onClick={() => {
              setShowModal(true);
              setModalData(item);
            }}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
