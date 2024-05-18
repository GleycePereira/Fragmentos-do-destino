import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import "../Estilo.css";
import laboratorio from "../../assets/Cap3/laboratorio.jpg"

export default function Fundos(){
    const [mostrarPaginaInicial, setMostrarPaginaInicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPaginaInicial(true);
    };

    return (
        
        <div className="container fundos">
            {!mostrarPaginaInicial? (

                <div className="inicio">
                    <img className="esconder" src={laboratorio} alt="Laboratório" />

                    <p className="desfecho">
                        Ao entrar pelos fundos Samantha é surpreendida por três pessoas que cozinhavam drogas no galpão, ao escutar o barulho um deles atirou 
                        em direção dela, conseguiu desviar da primeira bala e atirou em seguida, porém ela não viu que mais ao lado tinha mais gente, acabou 
                        levando dois tiros no peito e morreu ali mesmo.
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