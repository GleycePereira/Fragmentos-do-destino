import React, { useState } from "react";
import Kim from "./Kim";
import Ligacao from "./Ligacao";
import front from "../../assets/Cap2/front-desk.jpg"


export default function Laboratorio() {
    const [verKim, setVerKim] = useState(false);
    const [verLicacao, setVerLicacao] = useState(false);

    const KimClick = () => {
        setVerKim(true);
        setVerLicacao(false);
    };

    const LicacaoClick = () => {
        setVerLicacao(true);
        setVerKim(false);
    };

    return (
        <div className="container laboratorio">
            {verKim ? (
                <Kim />
            ) : verLicacao ? (
                <Ligacao />
            ) : (
                <div className="inicio">
                    <img className="esconder" src={front} alt="Secretaria" />
                    <p>
                        Chegando ao laboratório Nix, Samantha foi até a recepção e disse que gostaria de ver a Dra. Kim e mostrou o distintivo para a recepcionista. 
                        Enquanto aguardava a liberação ela tentava ligar para o escritório de Enrico Salazar, porém todos falavam que só daria informações com um mandato 
                        de justiça. <br />
                        De repente seu celular começou a tocar era uma ligação privada não sabia quem ligava, nesse momento a recepcionista falou que ela poderia subir 
                        que a Dra. Kim estava no aguardo.
                    </p>
                    <button className="btn" onClick={KimClick}> <span>Ver Dra Kim</span> </button>
                    <button className="btn" onClick={LicacaoClick}> <span>Atender ligação</span> </button>
                </div>
            )}
        </div>
    );
}