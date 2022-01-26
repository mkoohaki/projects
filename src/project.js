import React from 'react'
import reactDom from 'react-dom'


const Project = ({id, img, title, type, language, framework, description, git}) => {

    const gitLiinkClick = (git) => {
        window.open(git, "_blank");
    }

    return (
        <article className="project">
            <h1>{title.toUpperCase()}</h1>
            {img !== 'na' ? <img src={img} alt={title.toUpperCase()} /> : <p></p>}
            <h2>Program Details:</h2>
            <ul>
                <li key={title+id}>Program type: {type}</li>
                <li key={language+id}>Langauge:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{language}</li>
                <li key={framework+id}>Framework:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{framework}</li>
            </ul>
            <h3>Program Description:</h3>
            <ul>
                {description.map((descr, index) => (
                    <li key={index} > {descr}</li>
                ))}
            
            </ul>
            <div id="div_button">
                <button id="link" type='button' onClick={() => gitLiinkClick(git)}>Link to GitHub</button>
            </div>
        </article>
    );
}
export default Project