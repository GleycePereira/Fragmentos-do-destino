import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import gravacao from "../../assets/Cap4/gravacao.png"

export default function Gravacao(){
    const [mostrarPagina_inicial, setMostrarPagina_inicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPagina_inicial(true);
    };

    return (
        
        <div className="container gravacao">
            {!mostrarPagina_inicial? (

                <div className="inicio">
                    <img className="esconder" src={gravacao} alt="Gravação" />

                    <p>
                        <span className="d_samantha">Samantha</span>: O que? Você vai mandar seus capangas fazer o serviço? <br />
                        <span className="d_alexander">Alexander</span>: Sim, você sabe não posso me envolver diretamente, mas pode deixar que eu fico a frente do seu caso. <br />
                        <span className="d_samantha">Samantha</span>: Hum, me vê um copo de whiskey então. <br />
                        <span className="d_alexander">Alexander</span>: Ei garçon! Vou querer dois copos de whiskey! Lembro de nosso primeiro caso juntos, se recorda da senhora Carla? <br />
                        Samantha Sim, sim, que fez um alarde por causa de uma porta quebrada e no final era o cachorro dela que tinha quebrado. <br />
                        <span className="d_alexander">Alexander</span>: Nosso primeiro porre também depois de um caso solucionado. <br />
                        A bebida chegou, Samantha fez um brinde e depois ficou rindo. <br />
                        <span className="d_alexander">Alexander</span>: Qual o motivo da sua alegria? Lembrou de algum momento? <br />
                        <span className="d_samantha">Samantha</span>: Vou achar bem engraçado quando Fernanda for te prender. Enviei o video de nossa conversa para ela enquanto bebiamos, ela vai 
                        ficar bem feliz com essa história. <br />
                        Nesse momento Alexander ficou nervoso, jogou o copo no chão e atirou contra Samantha três vezes em sua cabeça, porém não adiantava de nada o video já estava 
                        com Fernanda, superior da detetive, e rodando por todas as delegacias. <br />

                        <p className="desfecho">
                            O delegado Alexander pegou 7 anos de prisão pelo envolvimento com a facção Aliança Urbana, 8 anos pela morte de Enrico Salazar e 12 anos pela morte da 
                            detetive Samantha, ao todo foi condenado por 27 anos de cadeia. <br />
                            O crime foi solucionado, porém Samantha pagou um preço alto e custe o que custar isso era e sempre foi o mais importante para ela.
                        </p>
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Jogar novamente</span> </button>
                </div>


            ) : (
                <Pagina_inicial/>
            )}
            
        </div>
    )
};