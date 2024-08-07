import React from "react";

function AboutSection(){

    return (
        <div className="AboutSection-container">
            <div className="mypic-container">
                <img src="./img/mypic.jpg" alt="My Profile Pic"/>
            </div>
            <div className="AboutSection-details">
                <h3 className="bebas-neue-regular">Name: Lakshit Singh</h3>
                <h4  className="bebas-neue-regular">Email: lakshitsinghproffesional@gmail.com</h4>
                <p className="montserrat">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae non rem veritatis sequi quisquam iure dolorum temporibus. Quisquam magni vel nisi fuga explicabo ab, saepe alias numquam esse voluptatibus.
                </p>
            </div>
        </div>
    );
}

export default AboutSection;