import React, { useState } from "react";
import Proteger from "./Proteger";
import Atirar from "./Atirar";
import apartamento from "../../assets/Cap4/apartamento.jpg"


export default function Capitulo4(){
    const [verProteger, setVerProteger] = useState(false);
    const [verAtirar, setVerAtirar] = useState(false);

    const ProtegerClick = () => {
        setVerProteger(true);
        setVerAtirar(false);
    };

    const AtirarClick = () => {
        setVerAtirar(true);
        setVerProteger(false);
    };

    return (
        <div className="container cap4" >
            {verProteger ? (
                <Proteger />
            ) : verAtirar ? (
                <Atirar />
            ) : (
                <div className="inicio">

                    <h1>IV</h1>
                    <h2>"O mistério é a sombra da realidade." - Orson Welles</h2>
                    <img className="esconder" src={apartamento} alt="Apartamento" />

                    <p>
                        Samantha e Luna chegaram no apartamento de Enrico Salazar em Rizzo, um lugar bem calmo até, porém perigoso tendo que ficar sempre em alerta.
                        A detetive deixou seu distintivo no carro, levou apenas sua arma escondida na cintura para evitar qualquer coisa que possa surgir. <br />
                        <span className="d_samantha">Samantha</span>: Luna você não acha melhor ficar no carro? Esse lugar não está me cheirando bem. <br />
                        <span className="d_luna">Luna</span>: Não, eu vou com você quero saber no que ele se metia. Enrico era um dos homens mais despezíveis que já conheci. <br />
                        <span className="d_samantha">Samantha</span>: Ele já te prejudicou? <br />
                        <span className="d_luna">Luna</span>: Sim, algo do tipo. <br />
                        Elas chegaram na portaria e não tinha ninguém, parece que podiam andar livremente pelo prédio, Samantha pega a chave e vê que o número do apartamento é 
                        o 23, fica no 3º andar, ela chama Luna para subirem, não tinha muita gente pelo prédio, só viram algumas pessoas e pareciam estar entorpecida de alguma 
                        coisa. <br />
                        Ao entrar viram que estava tudo revirado, tinha papéis soltos pelo chão e alguns objetos também, Samantha pegou alguns documentos e viu que eram sobre 
                        vendas de drogas, tráfico de pessoas entre outras coisas. <br />
                        Quando a detetive foi até o quarto ouviu um barulho, ao se aproximar a porta se abriu com tudo e derrubou ela no chão, surgiu um homem com o rosto coberto, 
                        assim que viu Luna ele pegou em sua arma.
                    </p>

                    
                    <button className="btn" onClick={ProtegerClick}> <span>Proteger Luna</span> </button>
                    <button className="btn" onClick={AtirarClick}> <span>Atirar no homem</span> </button>
                </div>
            )}
        </div>
    );
}