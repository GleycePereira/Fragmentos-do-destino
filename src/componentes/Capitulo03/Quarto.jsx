import React, { useState } from "react";
import Capitulo04 from "../Capitulo04/Capitulo04";
import quarto from "../../assets/quarto.png"

export default function Quarto(){
    const [mostrarCap4, setMostrarCap4] = useState(false);
    const proximoCap = () =>{
        setMostrarCap4(true);
    };

    return (
        
        <div className="container quarto">
            {!mostrarCap4? (

                <div className="inicio">
                    <img className="esconder" src={quarto} alt="Quarto" />
                    <p>
                        Samantha entrou no quarto e Luna se sentou no sofá, ficou olhando a detetive. <br />
                        Samantha iniciou o nulix do seu sistema, uma espécie de datiloscopia cinco vezes mais eficiente que está instalado em sua bios, 
                        também ativou o modo raio-x para conseguir captar mais detalhes do local. Logo de primeira conseguiu ver um papel escondido dentro do 
                        sofá que Luna está sentada, parece que o documento se refere a compra de um apartamento. <br />
                        Encontrou uma passagem pequena escondida que tinha 350 mil bytecash , extremamente difícil nos dias de hoje em vista que usa-se transferências. 
                        neuro criptografadas.<br />
                        Porém ao arrastar a cama encontrou impressões digitais e um pedaço de piso meio solto, tinha uns arranhões foi soldado com chumbo embaixo para 
                        dificultar o rastreamento. <br />
                        <span className="d_samantha">Samantha</span>: Luna encontre algo afiado, uma espátula qualquer coisa que possa arrancar esse pedaço. <br />
                        Luna fez que sim com a cabeça e saiu para procurar, voltou depois de dez minutos com uma espátula. Samantha conseguiu abrir depois de muito esforço, 
                        encontrou um envelope dentro tinha alguns papéis não relevantes, mas encontrou um saco enrolado tinha uma chave e um papel com senha e endereço. <br />
                        Agradeceu a Luna e disse que ia investigar essa pista, antes mesmo de sair do quarto Luna pegou em seu braço. <br />
                        <span className="d_luna">Luna</span>: Onde você vai? Não vai me levar? <br />
                        <span className="d_samantha">Samantha</span>: Não, pode ser perigoso. <br />
                        <span className="d_luna">Luna</span>: Eu te ajudei a procurar, você não vai conseguir sair daqui sozinha, o segurança vai te revistar, sempre fazem isso. <br />
                        <span className="d_samantha">Samantha</span>: Que droga! Vamos logo que estou sem tempo. <br />
                        As duas sairam do quarto, antes mesmo de sair um dos seguranças parou elas. <br />
                        <span className="d_luna">Luna</span>: Não precisa revistar Nando, ela ta comigo. Vamos sair porque a detetive aqui não gostou do local prefere ser feliz em outro lugar. <br /> 
                        Samantha olhou feio para Luna e saiu o mais rápido possível atrás desse apartamento. <br />
                         
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Capítulo IV</span> </button>
                </div>


            ) : (
                <Capitulo04/>
            )}
            
        </div>
    )
};