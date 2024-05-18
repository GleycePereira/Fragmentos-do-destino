import React, { useState } from "react";
import Fundos from "../Capitulo03/Fundos";
import Porta from "../Capitulo03/Porta";
import industrial from "../../assets/Cap3/industrial.jpg"

export default function Capitulo4_3(){
    const [verFundos, setVerFundos] = useState(false);
    const [verPorta, setVerPorta] = useState(false);

    const FundosClick = () => {
        setVerFundos(true);
        setVerPorta(false);
    };

    const PortaClick = () => {
        setVerPorta(true);
        setVerFundos(false);
    };

    return (
        <div className="container cap4_3">
            {verFundos ? (
                <Fundos />
            ) : verPorta ? (
                <Porta />
            ) : (
                <div className="inicio">

                    <h1>IV</h1>
                    <h2>"O mistério é a sombra da realidade." - Orson Welles</h2>
                    <img className="esconder" src={industrial} alt="Industrial" />

                    <p>
                       Samantha chegou na antiga fábrica no Neblon onde estava muito quieto, parece que não tinha ninguém ali, o caminho estava deserto desde que faltava 
                       3km para chegar ao local. <br />
                       De repente ela escutou um barulho alto vindo de dentro do galpão que estava abandonado, colocou sua arma na mão e caminhou em direção do estrondo.
                    </p>


                    <button className="btn" onClick={FundosClick}> <span>Entrar pelos fundos</span> </button>
                    <button className="btn" onClick={PortaClick}> <span>Arrombar porta</span> </button>
                </div>
            )}
        </div>
    );
}