import React, { useState } from "react";
import Capitulo03_2 from "../Capitulo03/Capitulo03_2";
import ligacao from"../../assets/Cap2/ligacao.png"

export default function Alexander(){
    const [mostrarCap3, setMostrarCap3] = useState(false);
    const proximoCap = () =>{
        setMostrarCap3(true);
    };

    return (
        
        <div className="container alexander">
            {!mostrarCap3? (

                <div className="inicio">
                    <img className="esconder" src={ligacao} alt="Ligação" />
                    <p>
                        <span className="d_samantha">Samantha</span>: Oi Alexander, o neurochip foi danificado quando tentaram tirar do Enrico. <br />
                        <span className="d_alexander">Alexander</span>: Alô? Espera um minuto Samantha. <br />
                        Enquanto aguardava ela verificava o suposto endereço que a Dra Kim disse. <br />
                        <span className="d_alexander">Alexander</span>: Não conseguiram extrair nenhuma imagem fragmentada? <br />
                        <span className="d_samantha">Samantha</span>: Não, parece que a bios foi corrompida ao tentar acessar as informações dele. <br />
                        <span className="d_alexander">Alexander</span>: Passa aqui na delegacia mais tarde, estou aguardando um depoimento que pode ser importante. <br />
                        <span className="d_samantha">Samantha</span>: Tranquilo, chego aí no período da tarde.
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Capítulo III</span></button>
                </div>


            ) : (
                <Capitulo03_2/>
            )}
            
        </div>
    )
};