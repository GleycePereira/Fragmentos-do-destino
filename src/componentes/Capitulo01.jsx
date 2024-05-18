import React, { useState } from "react";
import Corpo from "./Corpo";
import Testemunha from "./Testemunha";
import "./Estilo.css";
import Boate from "../assets/boate-cyber.jpg";

export default function Capitulo01() {
    const [verCorpo, setVerCorpo] = useState(false);
    const [verTestemunha, setVerTestemunha] = useState(false);

    const corpoClick = () => {
        setVerCorpo(true);
        setVerTestemunha(false);
    };

    const testemunhaClick = () => {
        setVerTestemunha(true);
        setVerCorpo(false);
    };

    return (
        <div className="container cap1" >
            {verCorpo ? (
                <Corpo />
            ) : verTestemunha ? (
                <Testemunha />
            ) : (
                <div className="inicio">
                    <h1>I</h1>
                    <h2>Corpo na escuridão</h2>

                    <img className="esconder" src={Boate} alt="Boate cyber" />
                    <p>
                        Samantha é designada para investigar o brutal assassinato de um cliente importante na boate Bons Desejos, localizada em Polua um bairro altamente perigoso.
                        Chegando na boate, ela nota que a policia local já está investigando a cena do crime, mas precisamente o delegado Alexander, antigo parceiro no começo de usa carreira,
                        ela aproveita se apresenta e informa-se sobre as descobertas até o momento. <br />

                        Um policial diz que no momento as provas ainda não revela muita coisa, mas pode investigar o local.
                    </p>


                    <button className="btn" onClick={corpoClick}> <span>Ver corpo</span> </button>
                    <button className="btn" onClick={testemunhaClick}> <span>Ver testemunha</span> </button>


                </div>
            )}
        </div>
    );
}
