import React, { useState } from "react";
import Capitulo05_3 from "../Capitulo05/Capitulo05_3";
import ambulancia from "../../assets/Cap4/ambulancia.jpg"

export default function Atirar(){
    const [mostrarCap5, setMostrarCap5] = useState(false);
    const proximoCap = () =>{
        setMostrarCap5(true);
    };

    return (
        
        <div className="container atirar">
            {!mostrarCap5? (

                <div className="inicio">
                    <img className="esconder" src={ambulancia} alt="Ambulância" />

                    <p>
                        Samantha pegou sua arma e atirou no homem, o tiro pegou na perna esquerda fazendo ele correr para dentro do quarto, a detetive pensou rápido se levantou e foi 
                        atrás, só que ele tinha conseguido pular pela janela caindo em cima da pilha de lixo e conseguiu ir até a moto e fugir. Samantha correu para ver se o tiro tinha 
                        pegado em Luna, a garota foi baleada na região do abdômen estava em estado crítico, a detetive ligou para os paramédicos contando sobre a situação, depois de dez 
                        minutos conseguiu estancar o sangue e agora aguardava a ambulância chegar. <br />
                        A investigação não podia parar então ela analisou o sangue do homem e acessou o banco de dados da polícia pelo seu neurochip, as informações parece que estavam 
                        criptografadas, ela pediu ajuda para Brena, DBA da policia, ajudar a acessar os dados dele. Depois de longos minutos ela teve acesso e descobriu que o homem era 
                        uma espécie de mercenário de alta patente chamado Antônio Relva, o que a deixou intrigada é que 5 meses antes foi liberado de uma acusação com a ajuda do delegado 
                        Alexander. <br />
                        Nesse momento os paramédicos chegaram no apartamento e levaram Luna as presas ao hospital, parece que a chance dela sobreviver não era nada animador, enquanto 
                        isso Samantha estava fazendo uma cópia dos dados para seu sistema, não queria correr o risco de perder os arquivos.
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Capítulo V</span> </button>
                </div>


            ) : (
                <Capitulo05_3/>
            )}
            
        </div>
    )
};