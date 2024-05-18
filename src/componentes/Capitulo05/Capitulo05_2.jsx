import React, { useState } from "react";
import Aceitar from "./Aceitar";
import Recusar from "./Recusar";
import apart from "../../assets/Cap5/apart.png"

export default function Capitulo05_2(){
    const [verAceitar, setVerAceitar] = useState(false);
    const [verRecusar, setVerRecusar] = useState(false);

    const AceitarClick = () => {
        setVerAceitar(true);
        setVerRecusar(false);
    };

    const RecusarClick = () => {
        setVerRecusar(true);
        setVerAceitar(false);
    };

    return (
        <div className="container Cap5_2">
            {verAceitar ? (
                <Aceitar />
            ) : verRecusar ? (
                <Recusar />
            ) : (
                <div className="inicio">

                    <h1>V</h1>
                    <h2>"A verdade, para os fracos, é uma flecha na carne." - Paulo Coelho</h2>
                    <img className="esconder" src={apart} alt="Apartamento" />

                    <p>
                        Após a equipe investigar o apartamento e pegar evidências, Samantha passou a noite toda tentando juntar alguma pista para saber no que ocasiou a morte 
                        de Enrico, mas todas as possíveis provas que conseguia achar acabavam terminando em nada, estava voltando a estaca zero. Sobre o homem que atacou ela, a 
                        polícia não conseguiu nenhum paradeiro sobre ele, as camêras de vigilância não capturou o rosto, parece que usava um inibidor de imagem, por isso a 
                        dificuldade em descobrir qualquer coisa. <br />
                        Samantha dormia sobre a mesa seu celular tocou uma ligação de um número deconhecido ela atendeu. <br />
                        <span className="d_samantha">Samantha</span>: Detetive Samantha, quem fala? <br />
                        <span className="d_desconhecido">Desconhecido</span>: Fiquei sabendo que foi atacada noite passada no apartamento de Enrico. <br />
                        <span className="d_samantha">Samantha</span>: Não estou entendo, quem é? O que quer? <br />
                        <span className="d_desconhecido">Desconhecido</span>: Tenho informações sobre a morte dele, mas quero te encontrar e falar pessoalmente com você. <br />
                        <span className="d_samantha">Samantha</span>: Hum, o que você quer em troca disso? Essa informação não vai ser de graça, certo? <br />
                        <span className="d_desconhecido">Desconhecido</span>: Sim, em troca eu quero uma proteção para testemunha, aliás vou te dar informações valiosas sobre a morte de Enrico, minha cabeça vai estar em 
                        jogo assim que abrir a boca. <br />
                        <span className="d_samantha">Samantha</span>: Como posso garantir que não é uma tocaia? <br />
                        <span className="d_desconhecido">Desconhecido</span>: Acredito que você tem algumas evidências que pegou no apartamento, tem um documento com nomes criptografados, um deles é Frankenstein, esse sou 
                        eu. <br />
                        A detetive foi conferir e viu que o que o desconhecido disse era verdade, também tinha outros nomes nessa lista. <br />
                        Desconhecido: Pelo silêncio deduzo que estou certo, me encontre no Bar Diamantes hoje às 20h sozinha, se eu ver alguém com você sai do lugar e nunca vai ter 
                        as informações. 
                    </p>


                    <button className="btn" onClick={AceitarClick}> <span>Aceitar</span></button>
                    <button className="btn" onClick={RecusarClick}> <span>Recusar</span></button>
                </div>
            )}
        </div>
    );
}