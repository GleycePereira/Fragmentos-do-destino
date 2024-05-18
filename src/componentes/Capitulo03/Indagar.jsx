import React, { useState } from "react";
import Capitulo04_4 from "../Capitulo04/Capitulo04_4";
import mesa from "../../assets/Cap3/mesa.jpg"

export default function Indagar(){
    const [mostrarCap4, setMostrarCap4] = useState(false);
    const proximoCap = () =>{
        setMostrarCap4(true);
    };

    return (
        
        <div className="container indagar">
            {!mostrarCap4? (

                <div className="inicio">
                    <img className="esconder" src={mesa} alt="Mesa" />

                    <p>
                        <span className="d_samantha">Samantha</span>: Estranho você nunca ter falado isso com ninguém? Ainda mais como essa investigação esta sendo difícil. <br />
                        <span className="d_alexander">Alexander</span>: Não comentei com você? Me perdoe, parece que esse caso a todo momento aparece algo novo nele, fica até complicado de acompanhar. <br />
                        <span className="d_samantha">Samantha</span>: É em casos assim que devemos compartilhar qualquer informação que encontrar, quem mais sabe sobre isso? <br />
                        <span className="d_alexander">Alexander</span>: Contei para o Manoel, inclusive foi ele que descobriu o que pode estar acontecendo na fábrica. <br />
                        <span className="d_samantha">Samantha</span>: Ótimo vou chamar ele para discutirmos algumas hipóteses sobre esse caso. <br />
                        <span className="d_alexander">Alexander</span>: Não vai encontrar ele agora aqui, pediu permissão para sair mais cedo precisava levar a mulher no médico. Já estou de saida, podemos beber 
                        em algum lugar e discutir algumas teorias. <br />
                        Samantha aceita o pedido do delegado, mas ainda acha muito estranho ele não ter comentado isso com a equipe e estar nesse momento em uma mesa debatendo 
                        e vendo se as provas do crime fazem sentido. <br />
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Capítulo IV</span></button>
                </div>


            ) : (
                <Capitulo04_4/>
            )}
            
        </div>
    )
};