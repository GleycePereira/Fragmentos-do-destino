import React, { useState } from "react";
import Documento from "./Documento";
import Enrico from "./Enrico";
import police from "../../assets/Cap3/police-dep.jpg"

export default function Capitulo03_2(){
    const [verDocumento, setVerDocumento] = useState(false);
    const [verEnrico, setVerEnrico] = useState(false);

    const DocumentoClick = () => {
        setVerDocumento(true);
        setVerEnrico(false);
    };

    const EnricoClick = () => {
        setVerEnrico(true);
        setVerDocumento(false);
    };

    return (
        <div className="container cap3_2">
            {verDocumento ? (
                <Documento />
            ) : verEnrico ? (
                <Enrico />
            ) : (
                <div className="inicio">

                    <h1>III</h1>
                    <h2>Escolhas que podem mudar o destino</h2>
                    <img className="esconder" src={police} alt="Departamento de polícia" />

                    <p>
                       Samantha vai a delegacia conversar com Alexander, ela entra em sua sala e ele está sentado atrás de sua mesa mexendo no computador.<br />
                       <span className="d_alexander">Alexander</span>: Olá Samantha, como vai? Não tenho muitas novidades sobre o caso. <br />
                       <span className="d_samantha">Samantha</span>: Diga o que você encontrou, porque parece que está cada dia mais difícil de encontrar alguma prova sobre esse caso. <br />
                       <span className="d_alexander">Alexander</span>: De acordo com o depoimento de uma testemunha, o caso pode estar envolvido com alguém de sua empresa e estar interligado
                       a uma antiga fábrica que pode ser do fabricante do seu neurochip. <br />
                       <span className="d_samantha">Samantha</span>: Fiquei sabendo disso, será que essa pista leva a alguma coisa? <br />
                       <span className="d_alexander">Alexander</span>: Bom, aí só investigando mesmo para saber, da uma olhada nisso aqui.
                    </p>


                    <button className="btn" onClick={DocumentoClick}> <span>Ver documento</span> </button>
                    <button className="btn" onClick={EnricoClick}> <span>Dados de Enrico Salazar</span> </button>
                </div>
            )}
        </div>
    );
}