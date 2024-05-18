import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import algema from "../../assets/Cap4/algema.jpg"

export default function PrenderH(){
    const [mostrarPagina_inicial, setMostrarPagina_inicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPagina_inicial(true);
    };

    return (
        
        <div className="container prender">
            {!mostrarPagina_inicial? (

                <div className="inicio">
                    <img className="esconder" src={algema} alt="Algema" />

                    <p>
                        Com um mandato nas mãos Samantha pode acessar o neurochip de Hugo para coletar informações de seu sistema. A detetive congelou 
                        a parte neural dele e acessou as imagens do dia da morte de Enrico e descobriu uma série de crimes, como venda e fabricação de 
                        drogas, inumeras cobaias para testes e tráfico de pessoas. <br />
                        Quanto a morte de Enrico Salazar, Hugo foi responsavél de contratar um matador de alugar, porém a mando de alguém não identificado, 
                        foi feito através de uma ligação usando um sistema de alteração de voz. <br />
                        Agora a justiça será encarregada de descobrir o mandante do crime, já conta com três pessoas altamente suspeitas, Hugo pode a qualquer 
                        momento citar um nome através de um acordo feito com a corte de justiça.
                    </p>
                    <p className="desfecho">
                        O trabalho da detetive Samantha Portes foi feito, prendeu os responsáveis pela morte de Enrico Salazar, agora ela espera que a justiça 
                        seja feita. 
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Jogar novamente</span> </button>
                </div>


            ) : (
                <Pagina_inicial/>
            )}
            
        </div>
    )
};