import React, { useState } from "react";
import Lutar from "./Lutar";
import Correr from "./Correr";
import proteger from "../../assets/Cap4/proteger.jpg"

export default function Proteger(){
    const [verLutar, setVerLutar] = useState(false);
    const [verCorrer, setVerCorrer] = useState(false);

    const LutarClick = () => {
        setVerLutar(true);
        setVerCorrer(false);
    };

    const CorrerClick = () => {
        setVerCorrer(true);
        setVerLutar(false);
    };

    return (
        <div className="container proteger">
            {verLutar ? (
                <Lutar />
            ) : verCorrer ? (
                <Correr />
            ) : (
                <div className="inicio">
                    <img className="esconder" src={proteger} alt="Proteger" />

                    <p>
                        Samantha não pensou duas vezes e foi até Luna para protege-lá, o tiro acabou acertando seu ombro esquerdo, a garota se abaixou atrás do balcão e a detetive 
                        se escondeu também, o ferimento não estava muito grave. <br />
                        <span className="d_samantha">Samantha</span>: Você está machucada? Algum tiro pegou em você? <br />
                        <span className="d_luna">Luna</span>: Não pegou nada em mim, mas em você sim, olhe o estado do seu ombro. <br />
                        <span className="d_samantha">Samantha</span>: Não se preocupe, o ferido não foi profundo. <br />
                        <span className="d_luna">Luna</span>: Deveria ter atacado o homem. <br />
                        <span className="d_samantha">Samantha</span>: E deixar você tomar uma bala? Jamais. <br />
                        Luna abriu um sorriso apenas, rasgou um pedaço da sua roupa e tentou estancar o sangue do ombro, elas ouviram o homem se aproximar para perto do balcão, 
                        a detetive não tinha muita opção era correr ou lutar.
                    </p>


                    <button className="btn" onClick={LutarClick}> <span>Lutar</span> </button>
                    <button className="btn" onClick={CorrerClick}> <span>Correr</span> </button>
                </div>
            )}
        </div>
    );
}