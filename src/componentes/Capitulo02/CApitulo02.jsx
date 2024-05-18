import React, { useState } from "react";
import Laboratorio from "./Laboratorio";
import Relatorio from "./Relatorio";
import "../Estilo.css";
import cap2 from "../../assets/Cap2/cap2.jpg"

export default function CApitulo02(){
    const [verRelatorio, setVerRelatorio] = useState(false);
    const [irLab, setIrLab] = useState(false);

    const relatorioClick = () => {
        setVerRelatorio(true);
        setIrLab(false);
    };

    const labClick = () => {
        setIrLab(true);
        setVerRelatorio(false);
    };

    return (
        <div className="container cap2">
            {verRelatorio ? (
                <Relatorio />
            ) : irLab ? (
                <Laboratorio />
            ) : (
                <div className="inicio">
                    <h1>II</h1>
                    <h2>Investigações</h2>

                    <img className="esconder" src={cap2} alt="Capitulo 2" />
                    <p>
                        Com algumas evidências que foram encontradas, Samantha precisa tomar uma decisão de como vai fazer para continuar 
                        investigando o caso a partir de agora.<br />

                        Um policial disse que no momento as provas ainda não revela muita coisa, mas pode investigar o local ou ir ao laboratório para ver as evidências.
                    </p>
                    <button className="btn" onClick={relatorioClick}> <span>Ver relatório</span> </button>
                    <button className="btn" onClick={labClick}> <span>Ir para o laboratório</span> </button>
                </div>
            )}
        </div>
    );
}

