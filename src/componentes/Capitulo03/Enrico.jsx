import React, { useState } from "react";
import Anotar from "./Anotar";
import Indagar from "./Indagar";
import dados from "../../assets/Cap3/dados-enrico.png"

export default function Enrico(){
    const [verAnotar, setVerAnotar] = useState(false);
    const [verIndagar, setVerIndagar] = useState(false);

    const AnotarClick = () => {
        setVerAnotar(true);
        setVerIndagar(false);
    };

    const IndagarClick = () => {
        setVerIndagar(true);
        setVerAnotar(false);
    };

    return (
        <div className="container enrico">
            {verAnotar ? (
                <Anotar />
            ) : verIndagar ? (
                <Indagar />
            ) : (
                <div className="inicio">
                    <img className="esconder" src={dados} alt="Dados Enrico" />

                    <p>
                        <span className="d_alexander">Alexander</span>: Fizemos uma busca bem detalhada de acordo com o relatório da Dra Kim, realmente o neurochip do Enrico era clandestino, temos suspeita de 
                        dez médicos banidos que fazem parte do banco de dados de doutores negligentes, que possam fazer parte dessas implementações clandestinas. Também parece
                        que ele era um alto membro da facção Aliança Urbana e usavam a fábrica de Neblon para se encontrarem, dizem por aí que deve ser o motivo de frequentar 
                        Bons Desejos. <br />
                        <span className="d_samantha">Samantha</span>: Hum interessante, você não comentou nada sobre isso na boate, até ficou confuso sobre o motivo de ele frenquentar ali. <br />
                        <span className="d_alexander">Alexander</span>: Ora detetive, as notícias correm ainda mais que ele morreu, saem ratos de todo lugar nesse momento. Ouvi de alguém na boate que a antiga fábrica 
                        pode ser uma ótima pista. <br />
                        <span className="d_samantha">Samantha</span>: Então você acha uma boa ideia de ir na antiga fábrica? <br />
                        <span className="d_alexander">Alexander</span>: Pode ser um bom lugar de qualquer maneira.<br />
                        Samantha ficou em dúvida sobre a informação que ele conseguiu, invista de não ter comentado isso com ela, mas talvez possa
                        ter dito e não deu atenção.<br /> 

                    </p>


                    <button className="btn" onClick={AnotarClick}> <span>Anotar endereço</span></button>
                    <button className="btn" onClick={IndagarClick}> <span>Indagar delegado</span></button>
                </div>
            )}
        </div>
    );
}