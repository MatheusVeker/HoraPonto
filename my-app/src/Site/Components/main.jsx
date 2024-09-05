import React from "react";

function Banner() {
    return (
            <div className="cotainerMain" >
                <div className="conteinerMainRight" >
                    <h2>Transforme o jeito de gerenciar a frequência da sua equipe.</h2>
                    <h2>Simples, moderno e eficaz.</h2>
                    <button>Acessar Sistema</button>
                </div>

                <div className="cotainerMainLeft">
                    <img src="./images/imagemSite.png" alt="Banner repesentativo"/>
                </div>
            </div>
    );
}

export default Banner;