import React, { useContext, useEffect } from "react";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Modal from "./Components/Modal";
import { Context } from "./Context/AppContext";
import { Route, Routes } from "react-router-dom";
import CategoryResult from "./Components/CategoryResult";
import SearchResult from "./Components/SearchResult";
import Pagination from "./Components/Pagination";

const App = () => {
  const { showModal, setCategories, news } = useContext(Context);

  useEffect(() => {
    setCategories([
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ]);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {showModal ? <Modal /> : <></>}
      <Header />
      <div style={{ margin: "80px 0 0 0" }}>
        <Routes>
          <Route path="/" exact element={<Blogs />} />
          <Route path="/categories/:category" exact element={<CategoryResult />}/>
          <Route path="/search/:search" exact element={<SearchResult />} />
        </Routes>
      </div>

      {news.length > 0 ? <Pagination /> : ""}
      
    </div>
  );
};

export default App;
