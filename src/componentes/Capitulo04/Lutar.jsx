import React, { useState } from "react";
import Capitulo05 from "../Capitulo05/Capitulo05";
import bagunca from "../../assets/Cap4/bagunca.jpg"

export default function Lutar(){
    const [mostrarCap5, setMostrarCap5] = useState(false);
    const proximoCap = () =>{
        setMostrarCap5(true);
    };

    return (
        
        <div className="container lutar">
            {!mostrarCap5? (

                <div className="inicio">
                    <img className="esconder" src={bagunca} alt="Bagunça" />

                    <p>
                        O homem, com uma expressão de ódio, avançou rapidamente, nisso Samantha estava pronta para enfrentá-lo. Ele atacou primeiro, com
                        um soco que ela conseguiu desviar por pouco. A detetive contra-atacou, mas ele era mais forte do que parecia. No pequeno espaço do apartamento, 
                        cada movimento parecia mais intenso. Samantha conseguiu acertar um chute no estômago do homem, mas ele recuperou-se rapidamente e, com um movimento 
                        brusco, a empurrou contra a mesa de centro, que quebrou com o impacto. <br />
                        A detetive tentou se levantar, mas o homem estava sobre ela em segundos. Ele agarrou seu braço e torceu-o, fazendo-a gritar, descarregou uma carga
                        elétrica em sua cabeça, danificando a parte esquerda. Sentindo a dor intensa, ela usou a perna para chutá-lo com força na lateral do joelho, fazendo-o 
                        cambalear. Mesmo com seu sistema extremamente danificado ela conseguiu acessar a bios dele e dar uma sobrecarga, isso daria alguns minutos a mais. Luna, 
                        encolhida em um canto, observava a cena aterrorizada estava totalmente imóvel. Respirando pesadamente e sentindo a dor latejante em sua cabeça, Samantha 
                        acenou com a cabeça para irem embora dali naquele instante o mais rápido possível.
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Capítulo V</span> </button>
                </div>


            ) : (
                <Capitulo05/>
            )}
            
        </div>
    )
};