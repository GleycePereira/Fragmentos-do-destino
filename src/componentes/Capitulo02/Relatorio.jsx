import React, { useState } from "react";
import Local from "./Local";
import Alexander from "./Alexander";
import blur from "../../assets/Cap2/interface-blur.png"

export default function Relatorio(){
    const [irLocal, setLocal] = useState(false);
    const [irLigar, setLigar] = useState(false);

    const localClick = () => {
        setLocal(true);
        setLigar(false);
    };

    const ligarClick = () => {
        setLigar(true);
        setLocal(false);
    };

    return (
        <div className="container relatorio">
            {irLocal ? (
                <Local />
            ) : irLigar ? (
                <Alexander />
            ) : (
                <div className="inicio ">
                    <img className="esconder" src={blur} alt="Interface blur" />
                    <p>
                        Samantha recebeu no email um relatório sobre o neurochip que tinha achado na cabeça de Enrico Salazar.<br />

                        <div className="email">
                            "Assunto: Atualização sobre o neurochip e sua extração. <br />
                            Espero que esta mensagem lhe encontre bem. Escrevo para fornecer uma atualização sobre o caso do neurochip em questão.<br />
                            Após realizar uma série de procedimentos e exames detalhados, lamento informar que não fomos capazes de realizar a extração da imagem do neurochip 
                            conforme planejado. Durante a tentativa de remoção, encontramos dificuldades devido à danificação da bios, que ocorreu quando tentaram retirar o chip 
                            à força. Essa ação resultou em danos adicionais que impediram a obtenção da informação desejada.<br />
                            Além disso, ao analisar o número do chip, descobrimos que ele está associado a uma antiga fábrica, o que complica ainda mais nossa investigação. Essa 
                            descoberta sugere a possibilidade de que o chip possa ter sido modificado ou adulterado de alguma forma, o que aumenta a complexidade do caso. <br />
                            Entendo a importância crucial de obter informações precisas e relevantes para o avanço da investigação, e estou frustrada por não ser capaz de fornecer 
                            os resultados desejados neste momento. No entanto, permaneço comprometida em colaborar com você e sua equipe para explorar outras estratégias e alternativas 
                            que possam nos ajudar a avançar neste caso desafiador. <br />
                            Agradeço sua compreensão e estou à disposição para qualquer esclarecimento. <br />
                            Atenciosamente, <br />
                            Dra Kim <br />
                            Médica"
                        </div>
                
                    </p>
                    <button className="btn" onClick={localClick}> <span>Investigar local</span> </button>
                    <button className="btn" onClick={ligarClick}> <span>Ligar para Alexander</span> </button>
                </div>
            )}
        </div>
    );
}