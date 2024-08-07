import React from "react";

function ProjectCard(props){

    return (
        <div>
            <div className="ProjectCard-container">
                <div className="ProjectCard-details" >
                    <h3 className="bebas-neue-regular">{props.title}</h3>
                    <p className="montserrat">{props.descr}</p>
                    <div className="dependency-dropright">
                        <span className="montserrat">
                            Dependencies 
                            <img src='./img/icons8-arrow-right-50.png' style={{width:'1.5rem', marginLeft:'1rem'}}/>
                        </span>
                        <ul className="dropdown-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </div>
                <button>
                    <img src='./img/icons8-arrow-right-30.png'/>
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;