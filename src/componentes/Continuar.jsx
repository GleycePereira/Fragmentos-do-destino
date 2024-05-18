import React, { useState } from "react";
import CApitulo02 from "./Capitulo02/CApitulo02";
import "./Estilo.css";
import boate from"../assets/boate-punk.jpg"

export default function Continuar(){
    const [mostrarCap2, setMostrarCap2] = useState(false);
    const proximoCap = () =>{
        setMostrarCap2(true);
    };

    return (
        
        <div className="container continuar">
            {!mostrarCap2? (

                <div className="inicio">
                    <img className="esconder" src={boate} alt="Boate" />
                    <p>
                       <span className="d_samantha">Samantha</span>: Como Enrico conheceu esse lugar? <br />
                       <span className="d_luna">Luna</span>: Pela internet talvez. <br />
                       Não estava confiante com a resposta e persistiu. <br />
                       <span className="d_samantha">Samantha</span>: O que ele falava para você? Eu quero a verdade. <br />
                       <span className="d_luna">Luna</span>: Ele não falava muito, apenas o necessário. <br />
                       <span className="d_samantha">Samantha</span>: Você precisa ser mais precisa, senão irei te levar esta noite, pois você é uma das poucas pessoas que viu ele esta noite. <br />
                       <span className="d_luna">Luna</span>: Ele nunca deu detalhes de como conheceu esse lugar, só disse que foi alguém próximo a ele que recomendou. <br />
                       Algum policial estava chamando a detetive. <br />
                       <span className="d_samantha">Samantha</span>: Aqui está meu cartão se lembrar de algo me ligue. <br />

                       Antes de ir embora pergunta a garota o motivo de Enrico frenquentar a boate Bons Desejos. <br />

                       <span className="d_luna">Luna</span>: Possa ser pelo anonimato, ele sabia o que acontecia aqui ficava aqui.<br />

                    </p>

                    
                    <button className="btn" onClick={proximoCap}> <span>Capitulo II</span></button>
                       
                </div>


            ) : (
                <CApitulo02/>
            )}
            
        </div>
    )
};