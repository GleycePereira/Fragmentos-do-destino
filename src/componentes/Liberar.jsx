import React, { useState } from "react";
import Capitulo02 from "./Capitulo02";
import CApitulo02 from "./Capitulo02/CApitulo02";
import "./Estilo.css";
import boate from"../assets/boate-punk.jpg"

export default function Liberar(){
    const [mostrarCap2, setMostrarCap2] = useState(false);
    const proximoCap = () =>{
        setMostrarCap2(true);
    };

    return (
        
        <div className="container liberar">
            {!mostrarCap2? (

                <div>
                    <div className="inicio">
                        <img className="esconder" src={boate} alt="Boate punk" />
                        <p>
                            Samantha libera Luna do interrogatório, mas antes de ir embora pergunta a garota se Enrico falava alguma coisa de
                            importante para ela.<br />

                            <span className="d_luna">Luna</span>: Não, nunca falava nada sobre sua vida, comentava as vezes de lugares que já viajou e comidas daquelas regiões,
                            mas nada importante.<br />

                            Samantha fica em silêncio e apenas vai embora.
                        </p>

                        <div>
                            <button className="btn" onClick={proximoCap}> <span>Capítulo II</span></button>
                        </div>
                    </div>
                </div>


            ) : (
                <CApitulo02/>
            )}
            
        </div>
    )
};