import React, { useState } from "react";
import Ameacar from "./Ameacar";
import Acreditar from "./Acreditar";
import valdo from "../../assets/Cap3/valdo.jpg"

export default function Seguranca(){
    const [verAmeacar, setVerAmeacar] = useState(false);
    const [verAcreditar, setVerAcreditar] = useState(false);

    const AmeacarClick = () => {
        setVerAmeacar(true);
        setVerAcreditar(false);
    };

    const AcreditarClick = () => {
        setVerAcreditar(true);
        setVerAmeacar(false);
    };

    return (
        <div className="container seguranca">
            {verAmeacar ? (
                <Ameacar />
            ) : verAcreditar ? (
                <Acreditar />
            ) : (
                <div className="inicio">
                    <img className="esconder" src={valdo} alt="Valdo" />
                    <p>
                        Luna levou Samantha até os fundos para conversar com o segurança. <br />
                        <span className="d_luna">Luna</span>: Oi Valdo, tem um minuto? <br />
                        <span className="d_valdo">Valdo</span>: Tenho sim Luna, mas tem que ser rápido. <br />
                        <span className="d_samantha">Samantha</span>: Eu que quero falar com você, podemos ser rápidos se não ficar enrolando. <br />
                        <span className="d_valdo">Valdo</span>: O que é isso Luna, ta me colocando pra conversar com tira? <br />
                        <span className="d_luna">Luna</span>: Relaxa Valdo, coisa rápida e outra to ganhando aqui também. <br />
                        <span className="d_samantha">Samantha</span>: De onde você conhecia o Enrico Salazar? Eram próximos? <br />
                        <span className="d_valdo">Valdo</span>: Conheci Enrico na sua empresa, na época trabalhava aqui e lá também. <br />
                        <span className="d_samantha">Samantha</span>: Então indicou a boate para ele? <br />
                        <span className="d_valdo">Valdo</span>: Sim, ele queria algo que não chamasse atenção. <br />
                        <span className="d_samantha">Samantha</span>: Sabe de mais alguma coisa de importante? <br />
                        <span className="d_valdo">Valdo</span>: Só sei que ele mantinha contado frequente com um tal de Hugo e Elena da empresa, tinham contrato sobre algo ilícito. <br />
                        <span className="d_samantha">Samantha</span>: Hum então você deve saber mais coisas. <br />
                        <span className="d_valdo">Valdo</span>: Não, sei só isso, ainda foi de conversas que escutei em ligações dentro do carro. Enrico era bem reservado. <br />

                    </p>

                    <button className="btn" onClick={AmeacarClick}> <span>Ameaçar Valdo</span> </button>
                    <button className="btn" onClick={AcreditarClick}> <span>Acreditar em Valdo</span> </button>
                </div>
            )}
        </div>
    );
}