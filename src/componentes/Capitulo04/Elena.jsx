import React, { useState } from "react";
import Hugo from "./Hugo";
import PrenderE from "./PrenderE";
import elena from "../../assets/Cap4/elena.png"

export default function Elena(){
    const [verHugo, setVerHugo] = useState(false);
    const [verPrenderE, setVerPrenderE] = useState(false);

    const HugoClick = () => {
        setVerHugo(true);
        setVerPrenderE(false);
    };

    const PrenderEClick = () => {
        setVerPrenderE(true);
        setVerHugo(false);
    };

    return (
        <div className="container elena">
            {verHugo ? (
                <Hugo />
            ) : verPrenderE ? (
                <PrenderE />
            ) : (
                <div className="inicio">
                    <img className="esconder" src={elena} alt="Elena" />

                    <p>
                        <span className="d_samantha">Samantha</span>: Muito bem Elena Belmonte, como vai? Sabe o motivo da minha visita? <br />
                        <span className="d_elena">Elena</span>: Aposto que seja para falar sobre Enrico, a cidade inteira só fala sobre ele. <br />
                        <span className="d_samantha">Samantha</span>: Acertou, mas me diga qual era seu envolvimento com Enrico Salazar? Descobri que era além da empresa. <br />
                        <span className="d_elena">Elena</span>: Com ele era apenas negócios nada a mais, a empresa está passando por mudanças e como ele era CEO tinha que saber de tudo. <br />
                        <span className="d_samantha">Samantha</span>: Dê uma olhada nesses documentos e me diga o motivo dele ter uma empresa desligada, mas que funciona ilegalmente e tem você como sócia. <br />
                        Ela pega os papéis e nota-se seu nervossismo tomando conta, demorou um pouco até falar novamente com a detetive. <br />
                        <span className="d_elena">Elena</span>: Nesses documentos meu nome não é citado, não sei o motivo disso tudo. <br />
                        <span className="d_samantha">Samantha</span>: Exato seu nome não é citado, porém sua assinatura consta no papel, lógico com outro nome, puxamos a identificação e descobrimos que é 
                        você. <br />
                        <span className="d_elena">Elena</span>: Detetive você acha mesmo que eu me sujaria com drogas? Outra coisa, seus fundamentos não tem base, como eu teria outra identificação tendo o 
                        regime ultra avançado contra os números de registros? <br />
                        <span className="d_samantha">Samantha</span>: Nossas investigações levaram ao Dr Paco, responsavél pelas coisas clandestinas que tem feito para vocês. <br />
                        Elena fica quieta no momento sem saber o que falar, parece espantada pelo fato de conhecerem o doutor.
                    </p>

                    <button className="btn" onClick={HugoClick}> <span>Ver Hugo</span> </button>
                    <button className="btn" onClick={PrenderEClick}> <span>Prender Helena</span> </button>
                </div>
            )}
        </div>
    );
}