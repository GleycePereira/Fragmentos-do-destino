import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import algema from "../../assets/Cap4/algema.jpg"


export default function(){
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
                        Com um mandato nas mãos Samantha pode acessar o neurochip de Elena para coletar informações de seu sistema. A detetive congelou 
                        a parte neural dela e acessou as imagens do dia da morte de Enrico e descobriu uma série de crimes, como venda e fabricação de 
                        drogas, falsificação ideológica e desvio de dinheiro. <br />
                        Quanto a morte de Enrico Salazar, Elena foi responsavél por entrar em contato com ele para marcar um encontro, na ligação não se sabe 
                        quem mandou ela fazer isso, mas estava ciente que iriam matar ele. <br />
                        Agora a justiça será encarregada de descobrir o mandante do crime, já conta com quatro pessoas altamente suspeitas, Elena pode a qualquer 
                        momento ser condenada com a opção de reduzir a pena se citar o responsavél de mandar matar.
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