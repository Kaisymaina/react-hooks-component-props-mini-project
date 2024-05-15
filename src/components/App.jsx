import React from "react";
import Header from "./Header";
import About from "./About";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";


function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <ArticleList posts={blogData.posts} />
      <About image={blogData.image} about={blogData.about} />
    </div>
  );
}

export default App;