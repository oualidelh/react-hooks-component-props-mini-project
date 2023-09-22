import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArtcileList from "./ArtcileList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} image={blogData.image} />
      <ArtcileList posts={blogData.posts} />
    </div>
  );
}

export default App;
