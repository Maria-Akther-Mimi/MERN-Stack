import React, { useState } from "react";
import Data from "./LoopData";
const projects = [
  {
    title: "Project 01",
    description: "This is my first project.",
  },
  {
    title: "Project 02",
    description: "This is my first project.",
  },
  {
    title: "Project 03",
    description: "This is my first project.",
  },
  {
    title: "Project 04",
    description: "This is my first project.",
  },
  {
    title: "Project 05",
    description: "This is my first project.",
  },
  {
    title: "Project 06",
    description: "This is my first project.",
  },
  {
    title: "Project 05",
    description: "This is my first project.",
  },
];

function JSONData() {
  const [projectData, setProjectData] = useState(projects);
  return (
    <>
      <Data data={projectData}/>
    </>
  );
}

export default JSONData;
