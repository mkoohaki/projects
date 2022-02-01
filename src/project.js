import React, { useState } from "react";
import { projectList } from "./projectList";

const UseStateArray = () => {
  const [projects, setProjects] = useState(projectList);
  const [index, setIndex] = useState(0);

  const gitLinkClick = (git) => {
    window.open(git, "_blank");
  };

  const removeProject = (id) => {
    let newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  };

  const pictureChanger = (id) => {
    let allProjects = [...projects];
    let myProject = { ...allProjects[id - 1] };
    console.log(myProject);
    setIndex(index + 1);

    if (index >= myProject.img.length - 1) {
      setIndex(1);
      myProject.img[0] = myProject.img[index];
      allProjects[id - 1] = myProject;
    } else {
      setIndex(index + 1);
      myProject.img[0] = myProject.img[index];
      allProjects[id - 1] = myProject;
    }
  };

  return (
    <>
      {projects.map((project) => {
        const { id, img, title, type, language, framework, description, git } =
          project;
        return (
          <article key={id} className="project">
            <h1>{title.toUpperCase()}</h1>
            {img.length != 0 ? (
              <div id="img">
                <img src={img[0]} alt={title.toUpperCase()} />
                <button
                  type="button"
                  id="changerBtn"
                  onClick={() => pictureChanger(id)}
                >
                  Other screens
                </button>
              </div>
            ) : (
              <p></p>
            )}
            <h2>Program Details:</h2>
            <p className="details">Program type: &nbsp;{type}</p>
            <p className="details">
              Langauge:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {language}
            </p>
            <p className="details">
              Framework:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{framework}
            </p>
            <h3>Program Description:</h3>
            {description.map((descr, index) => (
              <p key={index} className="details">
                {descr}
              </p>
            ))}
            <div id="div_button">
              <button id="link" type="button" onClick={() => gitLinkClick(git)}>
                Link to GitHub
              </button>
              <br></br>
              <button
                id="removeBtn"
                type="button"
                onClick={() => {
                  removeProject(id);
                }}
              >
                Rremove Project
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default UseStateArray;
