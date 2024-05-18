import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import montanha from "../../assets/Cap5/montanha.png"

export default function Sim(){
    const [mostrarPagina_inicial, setMostrarPagina_inicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPagina_inicial(true);
    };

    return (
        
        <div className="container sim">
            {!mostrarPagina_inicial? (

                <div className="inicio">
                    <img className="esconder" src={montanha} alt="Montanha" />

                    <p>
                        Samantha e Luna estavam de férias em uma cabana nas montanhas, rodeadas por árvores altas e o som tranquilo da 
                        natureza. Após os eventos tumultuosos do último mês, a tranquilidade do local parecia um sonho distante, uma quietude
                        perfeita para ambas. Sentadas na varanda, elas observavam o sol se pôr por trás das montanhas, sentiam uma onda de calma 
                        e aconchego. <br />
                        <span className="d_samantha">Samantha</span>: Este lugar é incrível, obrigada estava precisando disso. <br />
                        <span className="d_luna">Luna</span>: Precisávamos de um lugar assim para nos recuperarmos, longe de tudo, só nós duas. <br />
                        Luna pegou na mão de Samantha, seus dedos entrelaçando-se naturalmente, lançando um olhar de admiração, a detetive 
                        estava relaxada pela primeira vez em muito tempo. A conexão que se desenvolveu entre elas nas últimas semanas era 
                        evidente, resultado de uma parceria criada em meio a circunstâncias incomum. <br />
                        <span className="d_samantha">Samantha</span>: O que foi? <br />
                        <span className="d_luna">Luna</span>: Quero agradecer por tudo que você fez por mim.  Você é a pessoa mais incrível que já conheci, talvez a única 
                        que me protegeu quando eu estava em perigo. <br />
                        <span className="d_samantha">Samantha</span>: Estamos juntas nisso. No passado, no presente e no futuro. <br />
                        Elas se aproximaram e a tensão acumulada se dissolveu em um beijo carregado de emoção. Compreenderam que, apesar dos 
                        desafios, haviam encontrado algo precioso, um vínculo que prometia algo novo, um novo destino.

                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Jogar novamente</span> </button>
                </div>


            ) : (
                <Pagina_inicial/>
            )}
            
        </div>
    )
};