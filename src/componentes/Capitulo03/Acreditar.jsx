import React, { useState } from "react";
import Capitulo04_2 from "../Capitulo04/Capitulo04_2";
import valdo from "../../assets/Cap3/valdo.jpg"

export default function Acreditar(){
    const [mostrarCap4, setMostrarCap4] = useState(false);
    const proximoCap = () =>{
        setMostrarCap4(true);
    };

    return (
        
        <div className="container acreditar">
            {!mostrarCap4? (

                <div className="inicio">
                    <img className="esconder" src={valdo} alt="Valdo" />
                    <p>
                        <span className="d_samantha">Samantha</span>: Ta certo Valdo, você teve algum contato com Hugo ou Elena? <br />
                        <span className="d_valdo">Valdo</span>: Uma vez só, tava levando Enrico e eles para a empresa, estavam almoçando antes disso. Conversaram sobre um contrato sobre as mercadorias, que a 
                        polícia tava em cima deles fazia um tempo. Falaram de os papéis estarem todos na empresa, que precisavam escolher outro lugar para guardarem. <br />
                        <span className="d_samantha">Samantha</span>: Tem alguma coisa que possa ser decisivo para incrimina-lós? <br />
                        <span className="d_valdo">Valdo</span>: O único lugar que citaram na conversa foi a antiga fábrica no Neblon. <br />
                        <span className="d_samantha">Samantha</span>: Agradeço Valdo, vu procurar e vejo se encontro algo com essas informações. <br />

                        Samantha antes de ir embora transferiu 100 eletrobits para Luna, logo em seguida ligou para a delegacia contando sobre as novas informações que conseguiu 
                        para conseguir um mandato. 

                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Capítulo IV</span> </button>
                </div>


            ) : (
                <Capitulo04_2/>
            )}
            
        </div>
    )
};