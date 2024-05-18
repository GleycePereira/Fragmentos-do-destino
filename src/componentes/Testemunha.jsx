import React, { useState } from "react";
import Continuar from "./Continuar";
import Liberar from "./Liberar";
import "./Estilo.css";
import boate from"../assets/boate-punk.jpg";

export default function Testemunha(){
    const [verLiberar, setVerLiberar] = useState(false);
    const [verContinuar, setVerContinuar] = useState(false);

    const liberarClick = () => {
        setVerLiberar(true);
        setVerContinuar(false);
    };

    const continuarClick = () => {
        setVerContinuar(true);
        setVerLiberar(false);
    };

    return (
        <div className="container testemunha">
            {verLiberar ? (
                <Liberar/>
            ) : verContinuar ? (
                <Continuar />
            ) : (
                <div className="inicio">
                    <img className="esconder" src={boate} alt="Boate punk" />
                    <p>
                       Samantha se aproxima do sofá e se senta em frente da garota. <br />
                       <span className="d_luna">Garota</span>: Outro interrogatório, já falei tudo que tinha para ser dito. <br />
                       <span className="d_samantha">Samantha</span>: O que você disse para eles? <br />
                       <span className="d_luna">Garota</span>: Que Enrico vinha aqui toda semana, alugava o mesmo quarto e sempre escolhia meninas diferentes. <br />
                       <span className="d_samantha">Samantha</span>: E você era a preferida? <br />
                       <span className="d_luna">Garota</span>: Não sei se a preferida, mas a que ficava com mais frequência. Pronto? Acabou? <br />
                       <span className="d_samantha">Samantha</span>: Como se chama? <br />
                       <span className="d_luna">Garota</span>: Luna <br />
                       <span className="d_samantha">Samantha</span>: Você sabe que precisa falar seu verdadeiro nome certo? <br />
                       <span className="d_luna">Luna</span>: Esse é meu nome. <br />
                       <span className="d_samantha">Samantha</span>: Ok, como conheceu Enrico? <br />
                       <span className="d_luna">Luna</span>: Aqui na boate mesmo, assim como todos os clientes que vem aqui. <br />
                       <span className="d_samantha">Samantha</span>: Você foi a última pessoa que viu ele? <br />
                       <span className="d_luna">Luna</span>: Acho que sim, não tenho certeza, tinha saído para beber algo. <br />
                       Luna olhou para o relógio três vezes. Então <span className="d_samantha">Samantha</span> disse: Está esperando alguém? <br />
                       <span className="d_luna">Luna</span>: Não, só quero ir para casa, essa noite está cansativa demais.
                    </p>
                   
                    <button className="btn" onClick={continuarClick}> <span>Continuar o interrogatório</span> </button>
                    <button className="btn" onClick={liberarClick}> <span>Liberar a testemunha</span> </button>
                </div>
            )}
        </div>
    );
}