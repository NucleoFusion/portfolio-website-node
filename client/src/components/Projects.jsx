import React from "react";
import ProjectCard from "./ProjectCard";

function Projects(){

    return (
        <div className="Projects-container">
            <ProjectCard title='AgroFuture'
                descr='A one-day project made for a hackathon. It is an app for farmers that allows them to get weather forecast and map that forecast with their crop growth. also shows data on different types of seeds.'
                dependencies='MERN'
            />
            <ProjectCard title='AgroFuture'
                descr='A one-day project made for a hackathon. It is an app for farmers that allows them to get weather forecast and map that forecast with their crop growth. also shows data on different types of seeds.'
                dependencies='MERN'
            />
            <ProjectCard title='AgroFuture'
                descr='A one-day project made for a hackathon. It is an app for farmers that allows them to get weather forecast and map that forecast with their crop growth. also shows data on different types of seeds.'
                dependencies='MERN'
            />
        </div>
    );
}

export default Projects;