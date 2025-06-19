import { useState } from "react";
import "./App.css";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewsList from "./components/main/NewsList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("general");

  function setCategory(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="min-h-screen bg-gray-100  dark:bg-gray-900 dark:text-white transition-colors duration-200">
      <Header setCategory={setCategory} />
      <Categories
        setCategory={setCategory}
        selectedCategory={selectedCategory}
      />
      <NewsList selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
}

export default App;
