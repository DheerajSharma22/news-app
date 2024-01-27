import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext();

export const AppContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=e11aa4e51f5d489aba8ef9b3f261fb21&page=${currentPage}`
      );
      setNews(data.articles);
      setTotalPages(Math.ceil(data.totalResults / data.articles.length));
    } catch (error) {}
    setLoading(false);
  };

  const fetchNewsByCategory = async (category) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=e11aa4e51f5d489aba8ef9b3f261fb21&category=${category}&page=${currentPage}`
      );
      setTotalPages(Math.ceil(data.totalResults / data.articles.length));
      setNews(data.articles);
    } catch (error) {}
    setLoading(false);
  };

  const fetchNewsBySearch = async (searchParam) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchParam}&apiKey=e11aa4e51f5d489aba8ef9b3f261fb21&page=${currentPage}`
      );
      setTotalPages(Math.ceil(data.totalResults / data.articles.length));
      setNews(data.articles);
    } catch (error) {}
    setLoading(false);
  };

  const values = {
    categories,
    setCategories,
    loading,
    setLoading,
    news,
    setNews,
    fetchNews,
    setShowModal,
    showModal,
    modalData,
    setModalData,
    fetchNewsBySearch,
    fetchNewsByCategory,
    currentPage,
    setCurrentPage,
    totalPages,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
