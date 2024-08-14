import React from "react";

export default function ProjectCard(props) {
  console.log(props);

  return (
    <div className={props.cardStyle}>
      <div>
        <div>
          <h1>{props.name}</h1>
        </div>
        <div>
          <p>{props.descr}</p>
        </div>
        <div>
          <h5>Stack Used:-</h5>

          <ul>
            {props.stackArr.map((obj) => {
              return <li key={props.stackArr.indexOf(obj)}>{obj}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
