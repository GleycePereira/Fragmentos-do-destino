import React, { useState } from "react";
import Capitulo03_3 from "../Capitulo03/Capitulo03_3";
import ligacao from "../../assets/Cap2/ligacao.png"


export default function Ligacao(){
    const [mostrarCap3, setMostrarCap3] = useState(false);
    const proximoCap = () =>{
        setMostrarCap3(true);
    };

    return (
        
        <div className="container ligacao">
            {!mostrarCap3? (

                <div className="inicio">
                    <img className="esconder" src={ligacao} alt="Ligação" />
                    <p>
                        <span className="d_samantha">Samantha</span>: Detetive Samantha, quem deseja? <br />
                        <span className="d_desconhecido">Desconhecido</span>: Oi, não se lembra mais de mim? Sou eu Luna. <br />
                        <span className="d_samantha">Samantha</span>: Ah sim, o que você quer? lembrou de algo? <br />
                        <span className="d_luna">Luna</span>: Não lembrei de nada, mas parece que tem algumas coisas que podem te servir de prova. <br />
                        <span className="d_samantha">Samantha</span>: Onde você ta? E quais provas seriam essa? <br />
                        <span className="d_luna">Luna</span>: Estou na boate, parece que ele escondia uns papéis aqui no quarto que ele sempre alugava ou algo do tipo. <br />
                        <span className="d_samantha">Samantha</span>: Chego daqui a pouco aí na boate, me espere. <br />
                    </p>


                    <button className="btn" onClick={proximoCap}> <span>Capítulo III</span> </button>
                </div>


            ) : (
                <Capitulo03_3/>
            )}
            
        </div>
    )
};