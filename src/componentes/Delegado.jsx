import React, { useState } from "react";
import Capitulo02 from "./Capitulo02";
import CApitulo02 from "./Capitulo02/CApitulo02";
import "./Estilo.css";
import boate from"../assets/boate.jpg"


export default function Delegado(){
    const [mostrarCap2, setMostrarCap2] = useState(false);
    const proximoCap = () =>{
        setMostrarCap2(true);
    };

    return (
        
        <div className="container delegado"> 
            {!mostrarCap2? (

                    <div className="inicio">
                        <img className="esconder" src={boate} alt="Boate" />
                        <p>
                            <span className="d_samantha">Samantha</span>: Encontrou alguma coisa relevante? <br/>
                            <span className="d_alexander">Alexander</span>: No momento nada comprometedor, analisou o corpo? <br />
                            <span className="d_samantha">Samantha</span>: Sim, achei um neurochip danificado, entreguei para a perícia, quem quer que seja não sabia o que estava fazendo. <br />
                            <span className="d_alexander">Alexander</span>: Samantha o que você acha que possa ser? As digitais foram apagadas, o pessoal da boate disse que ele não tinha inimizade por aqui que tratava todas as garotas bem. <br />
                            <span className="d_samantha">Samantha</span>: Está muito cedo para suspeitas Alexander, você conhecia o sujeito, certo? <br />
                            <span className="d_alexander">Alexander</span>: Hum quem não conhece Enrico Salazar? Um dos caras mais bem sucedidos da metrópole, por que pergunta? <br />
                            <span className="d_samantha">Samantha</span>: Aí está a sua resposta um dos caras mais bem sucedidos da cidade, agora a pergunta que não quer calar, por qual motivo um homem como ele vem a essa boate? <br />
                            <span className="d_alexander">Alexander</span>: Talvez um pouco de sossego fora dos holofotes, não sei pode ser outros motivos também.<br />
                            <span className="d_samantha">Samantha</span>: Estranho, me ligue amanhã se tiver algo.<br />
                            Samantha se retirou. <br />
                        </p>

                            <button className="btn" onClick={proximoCap}><span>Capítulo II</span></button>
                    </div>

            ) : (
                <CApitulo02/>
            )}
            
        </div>
    )
};