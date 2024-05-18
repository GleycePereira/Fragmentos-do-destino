import React, { useState } from "react";
import Capitulo03 from "../Capitulo03/Capitulo03";
import deserto from "../../assets/Cap2/deserto.jpg"

export default function Local(){
    const [mostrarCap3, setMostrarCap3] = useState(false);
    const proximoCap = () =>{
        setMostrarCap3(true);
    };

    return (
        
        <div className="container local">
            {!mostrarCap3? (

                <div className="inicio">
                    <img className="esconder" src={deserto} alt="Deserto" />
                    <p>
                        Samantha pesquisou o endereço da antiga fárica, descobriu que estava desativada há mais ou menos três anos e meio. A detetive se 
                        interessou para poder investigar o que tinha naquele local, enquanto isso acessou o banco de dados para obter informações da fábrica abandonada.
                        Ela entrou no carro e foi até Neblon.
                    </p>
                    
                    <button className="btn" onClick={proximoCap}> <span>Capítulo III</span></button>
                </div>


            ) : (
                <Capitulo03/>
            )}
            
        </div>
    )
};