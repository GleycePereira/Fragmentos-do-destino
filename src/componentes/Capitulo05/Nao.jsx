import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";


export default function Nao(){
    const [mostrarPagina_inicial, setMostrarPagina_inicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPagina_inicial(true);
    };

    return (
        
        <div className="container nao">
            {!mostrarPagina_inicial? (

                <div className="inicio">

                    <p>
                        Samantha agradece e recusa a proposta de Luna para tirarem férias, precisa mais do que nunca focar nas futuras novas 
                        investigações surgindo depois da conclusão da morte de Enrico. Seu trabalho não está nem perto do fim, revelações importantes
                        podem surgim a qualquer momento e ela precisa ficar antenada. <br />
                        <span className="d_samantha">Samantha</span>: Você que sempre pode contar comigo, ok? <br />
                        <span className="d_luna">Luna</span>: Sei sim, agradeço por tudo que fez por mim até aqui. <br />
                        <span className="d_samantha">Samantha</span>: Nunca me perdoaria se algo tivesse acontecido com você. <br />
                        <span className="d_luna">Luna</span>: Você foi uma ótima detetive, mas me deve um jantar por me colocar em perigo. <br />
                        Elas começam a rir, a detetive promete leva-lá assim que tiver alta, Luna acena com a cabeça e se despede com um beijo em sua 
                        cabeça. <br />
                        <div className="outra">
                            Depois de dois anos do ocorrido Samantha está em uma sala cheia de jornalistas e policias, Fernanda havia acabado de anunciar sua 
                            promoção e todos estavam ansiosos para ouvir o que ela tinha a dizer. Luna sentada na primeira fila, olhava com orgulho. <br />
                            <span className="d_samantha">Samantha</span>: Obrigada a todos pelo apoio, ser promovida a delegada é uma honra que jamais imaginei alcançar tão rapidamente. 
                            Sei que muitos de vocês esperavam que eu tirasse umas férias após tudo que aconteceu, e agradeço a preocupação, mas a verdade 
                            é que este é o meu lugar. A cidade precisa de nós, e eu sinto que meu trabalho ainda não está terminado. <br />
                            Os aplausos encheram a sala, ela olhou para Luna, que sorriu em resposta. <br />
                            <span className="d_samantha">Samantha</span>: "Como delegada, prometo continuar lutando pela justiça e pela segurança de todos. Temos muito trabalho 
                            pela frente, mas sei que, juntos, podemos fazer a diferença. <br />
                            Após o discurso Luna se aproximou, os olhos brilhando com uma mistura de orgulho e leve desapontamento. <br />
                            <span className="d_luna">Luna</span>: Eu entendo sua decisão e estou aqui para apoiar você. <br />
                            <span className="d_samantha">Samantha</span>: Eu sei, obrigada por estar ao meu lado. Esta cidade precisa de nós, mas do que nunca. <br />
                            <span className="d_luna">Luna</span>: Essa foi uma ótima suspresa, mas lembra você me deve um jantar da aposta que perdeu? <br />
                            As duas começam a rir e a detetive segue em direção ao seu carro para levar Luna para jantar, conforme 
                            havia prometido.
                        </div>

                    </p>

                    <button className="btn" onClick={proximoCap}> <span>Jogar novamente</span> </button>
                </div>


            ) : (
                <Pagina_inicial/>
            )}
            
        </div>
    )
};