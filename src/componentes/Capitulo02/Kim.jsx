import React, { useState } from "react";
import Capitulo03_2 from "../Capitulo03/Capitulo03_2";
import kim from "../../assets/Cap2/kim.jpg"


export default function Kim(){
    const [mostrarCap3, setMostrarCap3] = useState(false);
    const proximoCap = () =>{
        setMostrarCap3(true);
    };

    return (
        
        <div className="container kim">
            {!mostrarCap3? (

                <div className="inicio">
                    <img className="esconder" src={kim} alt="Kim" />
                    <p>
                        Samantha foi até o 13º andar e procurou pela sala 209, estava preocupada se tinha alguma pista concreta sobre o caso.<br />
                        <span className="d_samantha">Samantha</span>: Olá Dra Kim, posso entrar? <br />
                        <span className="d_kim">Dra Kim</span>: Oi Samantha, entre e fique a vontade. Então depois de passar a noite toda com a equipe para conseguir acessar e resgatar o neurochip
                        não tivemos sucesso, pois está muito danificado nem a bios escapou disso. <br />
                        <span className="d_samantha">Samantha</span>: Não teria como acessar o backup do sistema dele? Qual a empresa ele contratou para a implementação do chip? <br />
                        <span className="d_kim">Dra Kim</span>: Outra questão difícil porque ele contratou uma empresa clandestina para realizar a implementação, a única informação que temos do chip é que 
                        é da antiga fábrica no Neblon. Fizemos de tudo para conseguir recuperar pelo menos uma parte. <br />
                        <span className="d_samantha">Samantha</span>: Que droga! Qual o motivo de um cara daquele usar um neurochip clandestino? Ainda temos muitas pontas soltas. <br />
                        <span className="d_kim">Dra Kim</span>: Realmente é muito estranho essa situação, principalmente se trantando de um CEO de umas das maiores empresas do país. Fique a vontade para olhar o documento da análise 
                        completa do neurochip.
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Capítulo III</span> </button>
                </div>


            ) : (
                <Capitulo03_2/>
            )}
            
        </div>
    )
};