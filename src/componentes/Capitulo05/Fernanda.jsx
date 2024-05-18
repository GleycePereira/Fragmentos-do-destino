import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import executiva from "../../assets/Cap5/executiva.jpg"

export default function Fernanda(){
    const [mostrarPagina_inicial, setMostrarPagina_inicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPagina_inicial(true);
    };

    return (
        
        <div className="container fernanda">
            {!mostrarPagina_inicial? (

                <div className="inicio">
                    <img className="esconder" src={executiva} alt="Executiva" />

                    <p>
                        Samantha mandou todas os arquivos e provas concretas para Fernanda informando que Alexander fazia parte da morte de Enrico, imediatamente ela 
                        mandou sua equipe para a delegacia, delegado já estava ssbendo sobre o depoimento de Antônio e se preparava para sair da cidade, mas foi impedido a tempo. <br /> 
                        A detetive aproveitou que Alexander estava sendo preso e foi visitar Luna, a garota estava com o quadro estável, até o momento não tinha acordado, os médicos 
                        disseram para não se preocupar que logo mais ela estaria recuperada. Samantha entrou no quarto que ela estava e deixou um cartão de visita com uma mensagem no 
                        verso: <br /> 
                        <div className="msg">
                            Oi, espero que esteja melhor quando acordar, me desculpe por não te proteger, mas saiba que o responsável pela morte do Enrico foi preso. Me ligue quando 
                            estiver bem, aguardo seu retorno.
                        </div>
                        <div className="desfecho">
                            Delegado Alexander foi condenado a 7 anos pelo envolvimento com a facção Aliança Urbana e 8 anos pela morte de Enrico Salazar, totalizando 15 anos de prisão, 
                            Samantha estava no tribunal e ouviu tudo que a juiza decretou, não se sabe ao certo o que mais ele possa estar envolvido, mas pelo menos foi condenado pelos 
                            crimes descobertos.
                        </div>
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Jogar novamente</span> </button>
                </div>


            ) : (
                <Pagina_inicial/>
            )}
            
        </div>
    )
};