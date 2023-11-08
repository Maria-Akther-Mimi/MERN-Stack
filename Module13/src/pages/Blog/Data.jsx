import React, { useState } from "react";
const blogs = [
  {
    title: "Blog 01",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
    description: "This is my first blog.",
  },
  {
    title: "Blog 02",
    description: "This is my first blog.",
  },
  {
    title: "Blog 03",
    description: "This is my first blog.",
  }
];

function Data() {
  const [blogData, setBlogData] = useState(blogs);
  return (
    <>
      <Data blog={blogData}/>
    </>
  );
}

export default Data;
