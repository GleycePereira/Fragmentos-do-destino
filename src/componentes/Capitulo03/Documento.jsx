import React, { useState } from "react";
import Capitulo04_2 from '../Capitulo04/Capitulo04_2';
import documento from "../../assets/Cap3/documento.png"

export default function Documento(){
    const [mostrarCap4, setMostrarCap4] = useState(false);
    const proximoCap = () =>{
        setMostrarCap4(true);
    };

    return (
        
        <div className="container documento">
            {!mostrarCap4? (

                <div className="inicio">
                    <img className="esconder" src={documento} alt="Documento" />
                    <p>
                        <span className="d_alexander">Alexander</span>: A testemunha disse que durante o tempo que estava na boate ele fez duas ligações: uma para Hugo e outra para Elena. Sócios de Enrico, 
                        puxei a ficha de Hugo Dias e Elena Belmonte e nenhum deles possui nada pendente com a justiça.<br />
                        <span className="d_samantha">Samantha</span>: Ele conseguiu ouvir a conversa entre essas duas pessoas? <br />
                        <span className="d_alexander">Alexander</span>: Segundo a fonte eles falavam sobre algum perigo que podia estar acontecendo, na antiga fábrica no Neblon. Parece que tem algumas
                        papeladas sobre o comércio ilegal de vendas de drogas e uma possível locação para cozinhar, que suspeitamos que seja nessa fábrica. <br />
                        <span className="d_samantha">Samantha</span>: Encontrou alguma papelada que possa incriminar um deles? Alguma prova concreta? <br />
                        <span className="d_alexander">Alexander</span>: Sim encontramos alguns documentos, só não sabemos quem dos dois está envolvido. De uma olhada aqui, pegue o mandato e interrogue eles lá mesmo
                        quero saber o quanto antes qual dos dois estava com Enrico. <br />
                    </p>
                    <button className="btn" onClick={proximoCap}> <span>Capítulo IV</span> </button>
                </div>


            ) : (
                <Capitulo04_2/>
            )}
            
        </div>
    )
};