import React, { useEffect, useState } from "react";
import { fetchNews } from "../../services/newsAPI";
import NewsCard from "./NewsCard";
import ShimmerCard from "./ShimmerCard";

const NewsList = ({ selectedCategory }) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const articles = await fetchNews(selectedCategory);
      setNews(articles);
      setLoading(false);
    };
    loadNews();
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="w-[95%] md:w-[80%] m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
          {Array.from({ length: 20 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="w-[95%] md:w-[80%] m-auto">
      <div className="grid gap-4 px-4 py-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-w-[1440px] mx-auto">
        {news &&
          news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
      </div>
    </div>
  );
};

export default NewsList;
