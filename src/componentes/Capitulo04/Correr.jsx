import React, { useState } from "react";
import Capitulo05_2 from "../Capitulo05/Capitulo05_2";
import correr from "../../assets/Cap4/correr.jpg"

export default function Correr(){
    const [mostrarCap5, setMostrarCap5] = useState(false);
    const proximoCap = () =>{
        setMostrarCap5(true);
    };

    return (
        
        <div className="container correr">
            {!mostrarCap5? (

                <div className="inicio">
                    <img className="esconder" src={correr} alt="Correr" />

                    <p>
                        Samantha esperou o homem se aproximar e empurrou ele, gritou para Luna correr até a porta para escapar, a detetive correu em direção a saída, mas o homem 
                        alcançou empurrando-a, ela se bateu contra a parede e num contra-ataque o empurrou de volta e congelou seu sistema por dez segundos, o máximo que conseguiu 
                        para o momento, desceu as escadas correndo estava indo em direção ao carro. <br />
                        Ao chegar na rua viu que Luna a esperava atrás de uma lata de lixo, quando Samantha foi se aproximando o homem começou a atirar na direção delas, a detetive 
                        correu para se esconder atrás de uma parede, assim começou o tiroteio, ela queria apenas alcançar o carro e sair dali. Trocaram alguns tiros por pelo menos 
                        dez minutos até ela ir em direção de Luna para irem ao carro, um tiro acabou pegando no pneu, mas ela não parou e acelerou o mais rápido para sair dali. <br />
                        Samantha chamou reforços explicando a situação e uma equipe estava indo imediatamente para o apartamento, ela estava furiosa por não ter conseguido pegar o 
                        cara.
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Capítulo V</span> </button>
                </div>


            ) : (
                <Capitulo05_2/>
            )}
            
        </div>
    )
};