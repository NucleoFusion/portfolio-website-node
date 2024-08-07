import React from "react";

function Navbar(){

    return (
        <div className="navbar" id='navbar'>
            <div className="navbar-elements">
                <button>Logo</button>
                <button>Home</button>
                <button>About</button>
                <button>Projects</button>
            </div>
            <div className="navbar-logo">
                <button>
                    <img src="./img/icons8-linkedin.svg" style={{width:'30px',height:'30px'}} alt="linkedin"/>
                </button>
                <button>
                    <img src="./img/github-mark-white.svg" style={{width:'30px',height:'30px'}} alt="github"/>
                </button>
                <button>
                    <img src="./img/pngaaa.com-6749427.png" style={{width:'30px',height:'30px'}} alt='Leetcode'/>
                </button>
            </div>
        </div>
    );
}

export default Navbar;