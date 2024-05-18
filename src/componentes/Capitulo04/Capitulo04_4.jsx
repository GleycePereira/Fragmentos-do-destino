import React, { useState } from "react";
import Gravacao from "./Gravacao";
import Fugir from "./Fugir";
import mesa from "../../assets/Cap3/mesa.jpg"


export default function Capitulo4(){
    const [verGravacao, setVerGravacao] = useState(false);
    const [verFugir, setVerFugir] = useState(false);

    const GravacaoClick = () => {
        setVerGravacao(true);
        setVerFugir(false);
    };

    const FugirClick = () => {
        setVerFugir(true);
        setVerGravacao(false);
    };

    return (
        <div className="container cap4_4 ">
            {verGravacao ? (
                <Gravacao />
            ) : verFugir ? (
                <Fugir />
            ) : (
                <div className="inicio">

                    <h1>IV</h1>
                    <h2>"O mistério é a sombra da realidade." - Orson Welles</h2>
                    <img className="esconder" src={mesa} alt="Mesa" />

                    <p>
                        Samantha e Alexander foram ao Bar Diamantes, na mesma região da boate Bons Desejos. Ao entrar a detetive se deparou com duas pessoas te 
                        olhando como se estivesse a sua espera, ela ficou em alerta enquanto isso o delegado ia na frente para escolher a mesa. Ao se sentar com Alexander 
                        ela notou que as duas pessoas se aproximaram um pouco mais perto deles. <br />
                        <span className="d_samantha">Samantha</span>: Alexander você notou que tem gente seguindo a gente a partir do momento que entramos? <br />
                        <span className="d_alexander">Alexander</span>: Sim notei, mas não se preocupe estão comigo. <br />
                        <span className="d_samantha">Samantha</span>: Pode me dizer o motivo de estarmos aqui? Não estou entendendo? <br />
                        <span className="d_alexander">Alexander</span>: Detetive você deveria ser mais esperta, o motivo é simples, você perguntou demais sobre Enrico e eu acabei falando demais. <br />
                        <span className="d_samantha">Samantha</span>: Como assim? Você está envolvido com a morte dele? <br />
                        <span className="d_alexander">Alexander</span>: Eu e Enrico tinhamos negócios pendentes e ele queria dar o fora, mas não se pode abandonar o barco andando, ainda mais que ele tinha uma 
                        dívida comigo. <br />
                        <span className="d_samantha">Samantha</span>: Que dívida? Por que ele queria ir embora? <br />
                        <span className="d_alexander">Alexander</span>: Enrico quis dar um fim no Dr Paco e eu ajudei ele, parece que o doutor queria se entregar para a policia e bla, bla, bla. Agora era ele
                        que queria meter o pé, não podia deixar acontecer principalmente ele sabendo de muitas coisas, ia embora para expandir a empresa. <br />
                        <span className="d_samantha">Samantha</span>: Então você deixou aquele bilhete para despistar a policia, você matou Enrico com suas próprias mãos? <br />
                        <span className="d_alexander">Alexander</span>: Muito bem detetive, pena que descobriu tarde demais. Não matei, mas mandei matar ele, não me colocaria em risco de me verem matando ele. <br />
                        <span className="d_samantha">Samantha</span>: Como aconteceu a morte dele? Qual sua participação na facção Aliança Urbana? <br />
                        <span className="d_alexander">Alexander</span>: Coloquei uma garota diferente em Bons Desejos, depois de um tempo eles nem lembram mais quem é quem daquelas garotas. Enrico tinha um tipo, 
                        mulheres indígenas, então coloquei aquela garota lá e quando entrou no quarto ele conheceu o matador contratado, tiveram uma breve conversa, seu último 
                        pedido foi deixar fazer uma transação para sua filha. <br />
                        <span className="d_samantha">Samantha</span>: E a facção? <br />
                        <span className="d_alexander">Alexander</span>: Ele era importante, porém substituível. Faço parte da mesa da Aliança Urbana, a mesa é composta por 8 membros, todos importantes dentro dessa 
                        cidade, seja político, médico, delegado e assim vai. Agora chega de papo, algum último pedido antes de eu ir embora? Ou melhor você partir dessa para 
                        melhor? <br />
                        Assim que notou a estranheza da situação Samantha tinha iniciado uma gravação em seu sistema, não queria perder nada dessa conversa. Agora ela tinha duas 
                        opções para esse momento.

                    </p>

                    
                    <button className="btn" onClick={GravacaoClick}> <span>Enviar gravação</span> </button>
                    <button className="btn" onClick={FugirClick}> <span>Fugir</span> </button>
                </div>
            )}
        </div>
    );
}