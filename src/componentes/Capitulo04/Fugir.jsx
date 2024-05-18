import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import medico from "../../assets/Cap4/medico.jpg"

export default function Fugir(){
    const [mostrarPagina_inicial, setMostrarPagina_inicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPagina_inicial(true);
    };

    return (
        
        <div className="container fugir">
            {!mostrarPagina_inicial? (

                <div className="inicio">
                    <img className="esconder" src={medico} alt="Medico" />

                    <p>
                        Samantha tinha que pensar rápido, sabia que seu sistema não conseguiria congelar os três ao mesmo tempo, então escolheu paralisar Alexander e um dos seus
                        capangas, assim que fez isso pegou sua arma e atirou no capanga que sobrou deixando ele cair sobre a mesa um pouco distante. Correu o mais rápido que pode, 
                        nesse tempo o sistema deles já tinham voltado e começou o tiroteio, a detetive sentiu quando o tiro atingiu seu braço, mas não podia olhar para trás. <br />
                        Saiu do bar, porém Alexander conseguiu acessar seu sistema e desabilitar boa parte de seus recursos, Samantha não pode chamar a policia através do seu 
                        neurochip e tinha que fazer isso manualmente pelo carro. Ela se escondeu atrás de um lixo e acertou um tiro na perna de Alexander, aproveitou o momento e 
                        correu para o carro, pegou suas chaves e quando estava fugindo o delegado atirou em seu olho, na hora parte do seu sistema começou a dar erro, ela não pensou 
                        em parar e começou a correr com o carro. <br />
                        Samantha chamou reforços e foi até o escritório de Fernanda, sua superior, contou o que ocorreu e pediu para chamar a Dra Kim para tentar extrair 
                        informações de seu sistema. A doutora pegou os videos, alguns ficaram fragmentados e não deu para ver muita coisa. <br />
                    </p>

                    <p className="desfecho">
                        Ao final de tudo Alexander estava foragido há 2 anos, ninguém sabia nada do seu paradeiro, conseguiram prender as pessoas envolvidas com a morte de 
                        Enrico Salazar e seus negócios ilegais. 
                        Samantha teve parte do seu sistema danificado que não pode ser restaurado, vivia de 6 em 6 meses no consultório da Dra Kim para fazer correções e 
                        reparos em sua bios.  
                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Jogar novamente</span></button>
                </div>


            ) : (
                <Pagina_inicial/>
            )}
            
        </div>
    )
};