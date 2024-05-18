import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import "../Estilo.css";
import thug from "../../assets/Cap3/thug.jpg"

export default function Porta(){
    const [mostrarPaginaInicial, setMostrarPaginaInicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPaginaInicial(true);
    };

    return (
        
        <div className="container porta">
            {!mostrarPaginaInicial? (

                <div className="inicio">
                    <img className="esconder" src={thug} alt="Bandido" />
                    <p className="desfecho">
                       Depois de três chutes Samantha consegue arrombar a porta da frente, mas leva um susto ao se deparar com dois policiais conehcidos negociando drogas 
                       com um traficante, todos levam um susto com o barulho, um dos policiais atira nela assim que a porta cai, dispara mais quatro vezes contra ela, ao se 
                       aproximar percebe que aquela mulher era detetive, reconheceu pelo seu distintivo.
                    </p>

                    <p className="centro">
                        Não fique triste jogue novamente e tente outro caminho, mas lembre-se qualquer escolha errada pode ser o fim. 
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Jogar novamente</span> </button>
                </div>


            ) : (
                <Pagina_inicial/>
            )}
            
        </div>
    )
};