import React, { useState } from "react";
import Capitulo04_3 from "../Capitulo04/Capitulo04_3";
import anotacao from "../../assets/Cap3/anotacao.jpg"

export default function Anotar(){
    const [mostrarCap2, setMostrarCap2] = useState(false);
    const proximoCap = () =>{
        setMostrarCap2(true);
    };

    return (
        
        <div className="container anotar">
            {!mostrarCap2? (

                <div className="inicio">
                    <img className="esconder" src={anotacao} alt="Anotação" />
                    <p>
                        <span className="d_samantha">Samantha</span>: Me passe o endereço dessa fábrica no Neblon. <br />
                        <span className="d_alexander">Alexander</span>: Toma escrevi nesse papel aí. Toma cuidado detetive lá é perigoso. <br />
                        <span className="d_samantha">Samantha</span>: Sim, eu sei, fique atento ao seu celular dependendo posso precisar de você. <br />
                        <span className="d_alexander">Alexander</span>: Estou sempre em alerta Samantha, qualquer coisa só me chamar. <br />
                        Samantha pegou o papel e saiu para ir ao local da possível prova.
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Capítulo IV</span> </button>
                </div>


            ) : (
                <Capitulo04_3/>
            )}
            
        </div>
    )
};