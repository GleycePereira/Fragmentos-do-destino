import React, { useState } from "react";
import Quarto from "./Quarto";
import Seguranca from "./Seguranca";
import boate from "../../assets/boate-punk.jpg"

export default function Capitulo03_3(){
    const [verQuarto, setVerQuarto] = useState(false);
    const [verSeguranca, setVerSeguranca] = useState(false);

    const QuartoClick = () => {
        setVerQuarto(true);
        setVerSeguranca(false);
    };

    const SegurancaClick = () => {
        setVerSeguranca(true);
        setVerQuarto(false);
    };

    return (
        <div className="container cap3_3">
            {verQuarto ? (
                <Quarto />
            ) : verSeguranca ? (
                <Seguranca />
            ) : (
                <div className="inicio">

                    <h1>III</h1>
                    <h2>Escolhas que podem mudar o destino</h2>
                    <img className="esconder" src={boate} alt="Boate punk" />

                    <p>
                        Samantha chegou a boate Bons Desejos e sentou na cadeira perto do balcão, pediu uma bebida e falou para o bartender chamar Luna, que a detetive 
                        estava esperando ela. Enquanto isso abriu o relatório do chip no seu celular e ficou relendo novamente para ver se encontrava algo. <br />

                        <span className="d_luna">Luna</span>: Oi detetive, tudo bem? <br />
                        <span className="d_samantha">Samantha</span>: Oi Luna, o que você tem de importante para me dizer? <br />
                        <span className="d_luna">Luna</span>: Vamos sentar ali naquele sofá mais distante. <br />
                        Ela se levantou da cadeira e acompanhou Luna até o lugar que indicou, sentou-se e ficou olhando ela. <br />
                        <span className="d_luna">Luna</span>: Parece que Enrico tinha algumas coisas aqui. <br />
                        <span className="d_samantha">Samantha</span>: O que é? Pode parar de enrolação e dizer o que você achou? <br />
                        <span className="d_luna">Luna</span>: A detetive é muito bonita para ficar sempre de cara fechada. <br />
                        <span className="d_samantha">Samantha</span>: Ande logo e pare de enrolar, tenho coisas para fazer. <br />
                        <span className="d_luna">Luna</span>: Não espera, parece que ele escondia algo no quarto e também tem o segurança que sempre conversava, ele ta por aqui hoje. <br />
                        <span className="d_samantha">Samantha</span>: Por que você nunca disse que ele conversava com alguém além das meninas? <br />
                        <span className="d_luna">Luna</span>: Não me lembrei naquele dia, estava muito assustada. Posso te mostrar se você quiser. <br />
                        Samantha terminou de tomar sua bebida e indicou onde queria ir. <br />
                    </p>

                    <button className="btn" onClick={QuartoClick}> <span>Investigar quarto</span> </button>
                    <button className="btn" onClick={SegurancaClick}> <span>Falar com segurança</span> </button>
                </div>
            )}
        </div>
    );
}