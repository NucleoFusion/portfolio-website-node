import React from "react";

function BigPage(){

    return (
        <div className="BigPage-container">
            <div className="Name-container">
                <div className="Name-element">
                    <h1 className="text-align dancing-script name">Lakshit Singh</h1>
                </div>
                <div>
                    <h2 className="bebas-neue-regular designation">A Programmer</h2>
                </div>
            </div>
            <div className="BigPage-about-container">
                <div></div>
                <div className='BigPage-about-element'>
                    <p className="BigPage-about montserrat">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi omnis, quia odio labore officiis molestias quo alias deserunt ullam maxime in, assumenda, perferendis animi nisi fuga eaque! Tenetur, nemo ea!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BigPage;