import React, { useState } from "react";
import Sim from "./Sim";
import Nao from "./Nao";
import hospital from "../../assets/Cap5/hospital.jpg"


export default function Capitulo05(){
    const [verSim, setVerSim] = useState(false);
    const [verNao, setVerNao] = useState(false);

    const SimClick = () => {
        setVerSim(true);
        setVerNao(false);
    };

    const NaoClick = () => {
        setVerNao(true);
        setVerSim(false);
    };

    return (
        <div className="container cap5">
            {verSim ? (
                <Sim />
            ) : verNao ? (
                <Nao />
            ) : (
                <div className="inicio">

                    <h1>V</h1>
                    <h2>"A verdade, para os fracos, é uma flecha na carne." - Paulo Coelho</h2>
                    <img className="esconder" src={hospital} alt="Hospital" />
                    
                    <p>
                        Samantha está no hospital, ficou internada por um pouco mais de um mês, ela tem a sensação que o mundo parou para ela, 
                        tem breve lembrança da luta que teve no apartamento, não se lembra de muita coisa também. Seu corpo doía, e sua mente 
                        estava confusa. Ao seu lado, Luna, segurava sua mão com um sorriso de alívio. <br />
                        <span className="d_luna">Luna</span>: Você acordou! Pensei que nunca mais fosse ver você acordada. <br />
                        <span className="d_samantha">Samantha</span>: Não chore, vou melhorar. Me conte sobre o aconteceu nesse meio tempo. <br />
                        Luna enxugou as lágrimas e contou que Antônio Relva, um mercenário aposentado, era o homem do ataque e vinha fazendo 
                        serviços ilícitos para pessoas importantes bastante tempo. Através de seu depoimento descobriu que o delegado Alexander estava 
                        envolvido com a morte de Enrico desde o começo, fazendo parte da facção Aliança Urbana, que conta com membros importantes da alta 
                        sociedade. <br /> 
                        O delegado pegou ao todo 15 anos de prisão, Fernanda, superior da detetive, acompanhou o caso de perto e fez questão de 
                        saber tudo o que ocorria no julgamento, fazendo com que o juri e os juízes não fossem comprados. <br />
                        <span className="d_luna">Luna</span>: Eu fiquei ao seu lado todo esse tempo, os médicos disseram que sua recuperação seria lenta, mas você é forte. <br />
                        <span className="d_samantha">Samantha</span>: Como diz o ditado: vaso ruim não quebra. <br />
                        <span className="d_luna">Luna</span>: O que você acha de tirar umas férias? Seu corpo ainda precisa de repouso, pensei em cairmos na estrada para relaxar depois 
                        desse acontecimento. <br />
                        A detetive ficou pensando na proposta de Luna, até que não era nada mal, porém estava pensando em investigar mais sobre a 
                        facção Aliança Urbana. Estava na dúvida se dizia sim ou não. 

                    </p>



                    <button className="btn" onClick={SimClick}> <span>Sim</span> </button>
                    <button className="btn" onClick={NaoClick}> <span>Não</span> </button>
                </div>
            )}
        </div>
    );
}