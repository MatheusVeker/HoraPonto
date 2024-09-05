import React from "react";

function Header() {
    return (
        <nav className="">
                <a  href="#">
                    <img className="NavLogo" src="./images/logoHeader.png" alt="Logo" width="100" height="100" />
                </a>

                <div className="containerlinks">
                    <a href="#sobre-o-projeto">Sobre o Projeto</a>
                    <a href="#contato">Contato</a>
                </div>
        </nav>
    );
}

export default Header;
 