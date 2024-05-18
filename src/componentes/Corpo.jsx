import React, { useState } from "react";
import Delegado from "./Delegado";
import Pertences from "./Pertences";
import "./Estilo.css";
import cena from"../assets/cena-crime.png"

export default function Corpo() {
    const [verDelegado, setVerDelegado] = useState(false);
    const [verPertences, setVerPertences] = useState(false);

    const delegadoClick = () => {
        setVerDelegado(true);
        setVerPertences(false);
    };

    const pertencesClick = () => {
        setVerPertences(true);
        setVerDelegado(false);
    };

    return (
        <div className="container corpo">
            {verDelegado ? (
                <Delegado/>
            ) : verPertences ? (
                <Pertences />
            ) : (
                <div className="inicio">
                    <img className="esconder" src={cena} alt="Cena" />
                    <p>
                        Havia um policial analisando a cena, ao examinar o corpo da vítima, Samantha percebeu que seu neurochip estava danificado, como se alguém estivesse 
                        tentado tirar para encobrir os rastros, percebeu que a pessoa que tentou retirar é totalmente leigo no assunto ao forçar para arrancar da cabeça. <br />
                        Retirou delicadamente o chip para uma perícia e ver se há algo de relevante para avançar na investigação.
                    </p>
                    <button className="btn" onClick={delegadoClick}> <span>Falar com o delegado</span></button>
                    <button className="btn" onClick={pertencesClick}><span>Ver pertences</span></button>
                </div>
            )}
        </div>
    );
}
