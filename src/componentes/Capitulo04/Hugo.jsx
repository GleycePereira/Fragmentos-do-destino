import React, { useState } from "react";
import PrenderH from "./PrenderH";
import Elena from "./Elena";
import hugo from "../../assets/Cap4/hugo.jpg"


export default function Hugo(){
    const [verElena, setVerElena] = useState(false);
    const [verPrenderH, setVerPrenderH] = useState(false);

    const ElenaClick = () => {
        setVerElena(true);
        setVerPrenderH(false);
    };

    const PrenderHClick = () => {
        setVerPrenderH(true);
        setVerElena(false);
    };

    return (
        <div className="container hugo">
            {verElena ? (
                <Elena />
            ) : verPrenderH ? (
                <PrenderH />
            ) : (
                <div className="inicio">
                    <img className="esconder" src={hugo} alt="Hugo" />

                    <p>
                        <span className="d_samantha">Samantha</span>: Muito bem Hugo Dias, como vai? Sabe o motivo da minha visita? <br />
                        <span className="d_hugo">Hugo</span>: Falar sobre o morto mais famoso da cidade.<br />
                        <span className="d_samantha">Samantha</span>: Acertou, parece que você gostou disso? Digo pelo seu tom de voz. <br />
                        <span className="d_hugo">Hugo</span>: As vezes sim, as vezes não, Enrico era um cretino que sabia o que fazer, um dos melhores nesse quesito. Meu tom? Eu e ele
                        tivemos algo passageiro nada que envolvesse amor, apenas negócios e prazer.<br />
                        <span className="d_samantha">Samantha</span>: Interessante, não sabia que tinha tido algo a mais com ele, será esse o motivo de estar morto? <br />
                        <span className="d_hugo">Hugo</span>: Não, nunca deixaria me levar pela emoção até tal ato, além do mais era um ótimo CEO. <br />
                        <span className="d_samantha">Samantha</span>: Tenho provas contra você que os dois faziam parte de algo clandestino na cidade, muito bem sucedido digamos. Dê uma olhada
                        nesses documentos. <br />
                        Hugo olha atentamente os papéis sobre a mesa, parece meio incrédulo e nervoso pelo que vê.<br />
                        <span className="d_hugo">Hugo</span>: Nada demais aqui, apenas umas assinaturas minhas do dia a dia, negócios sabe? Temos papéis para assinar todo dia. <br />
                        <span className="d_samantha">Samantha</span>: Engraçado que temos uma foto sua com um carregamento de droga não apenas com Enrico, mas também com Dr Paco responsavél pelas coisas 
                        clandestinas que ocorrem com vocês. <br />
                        <span className="d_hugo">Hugo</span>: Dr Paco antes do seu escândalo fazia parte da empresa. <br /> 
                        A detetive entrega a foto e o outro documento para Hugo e ele olha atentamente, porém nesse momento fica aflito com as provas.
                    </p>

                    <button className="btn" onClick={ElenaClick}> <span>Ver Elena</span> </button>
                    <button className="btn" onClick={PrenderHClick}> <span>Prender Hugo</span> </button>
                </div>
            )}
        </div>
    );
}