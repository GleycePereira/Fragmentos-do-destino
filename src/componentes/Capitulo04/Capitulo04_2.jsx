import React, { useState } from "react";
import Hugo from "./Hugo";
import Elena from "./Elena";
import front from "../../assets/Cap4/front-desk.png"


export default function Capitulo4(){
    const [verHugo, setVerHugo] = useState(false);
    const [verElena, setVerElena] = useState(false);

    const HugoClick = () => {
        setVerHugo(true);
        setVerElena(false);
    };

    const ElenaClick = () => {
        setVerElena(true);
        setVerHugo(false);
    };

    return (
        <div className="container Cap4_2">
            {verHugo? (
                <Hugo />
            ) : verElena ? (
                <Elena />
            ) : (
                <div className="inicio">

                    <h1>IV</h1>
                    <h2>"O mistério é a sombra da realidade." - Orson Welles</h2>
                    <img className="esconder" src={front} alt="Secretária" />

                    <p>
                        Samantha chegou na empresa mostrando o mandato e pediu para a secretária informar que ela estava a procura de Hugo e Elena. <br />
                        <span className="d_secretaria">Secretária</span>: Espere um momento detetive vou informar a eles sobre sua presença. <br />
                        Enquanto espera ela recebeu um documento sobre as atividades ilegais, precisava saber quem estava envolvido na morte de Enrico para dar voz de prisão. <br />
                        <span className="d_secretaria">Secretária</span>: Detetive Samantha, os dois estão aguardando no 32º andar, nosso segurança vai te acompanhar até o elevador. <br />
                        Samantha acompanhou o segurança para leva-lá até o encontro deles. Ao chegar a detetive precisava decidir com quem iria conversar.  
                    </p>

                    
                    <button className="btn" onClick={HugoClick}> <span>Ver Hugo</span> </button>
                    <button className="btn" onClick={ElenaClick}> <span>Ver Helena</span> </button>
                </div>
            )}
        </div>
    );
}