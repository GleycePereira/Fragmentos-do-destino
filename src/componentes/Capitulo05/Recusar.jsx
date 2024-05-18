import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import eletronico from "../../assets/Cap5/email.png"

export default function Recusar(){
    const [mostrarPagina_inicial, setMostrarPagina_inicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPagina_inicial(true);
    };

    return (
        
        <div className="container recusar">
            {!mostrarPagina_inicial? (

                <div className="inicio">
                    <img className="esconder" src={eletronico} alt="Email" />

                    <p>
                        Samantha não acreditou muito no desconhecido que estava na ligação, então não aceitou o convite a pessoa na ligação tentou mudar sua opinião, porém não teve 
                        sucesso. A detetive passou mais algumas horas tentando desver o mistério da morte de Enrico Salazar, a única pista que achou foi a antiga fábrica no Neblon, 
                        uma equipe já investigou o local, não tinha nada demais além de alguns viciados e uns traficantes que correram quando a policia chegou, a outra pista era um 
                        tal de Dr. Paco, porém ele estava desaparecido por um tempo já e alguns suspeitam que está morto nessa altura. <br />
                        Parece que as evidências não levava a nada concreto, há umas semanas atrás ela recebeu uma ligação sobre um novo caso para investigar, esse caso estava mais 
                        fresco e tinha testemunhas que ajudavam muito o caso. Samantha decidiu mandar um email para Fernanda, sua superior, dizendo o seguinte: <br />
                        <div className="email">
                            "Assunto: Retirada do Caso - Necessidade de Reavaliação <br />
                            Prezada Fernanda Cardoso, <br />
                            Espero que esta mensagem encontre você bem. Escrevo-lhe para comunicar minha decisão de retirar-me do caso em questão. <br />
                            Após uma análise minuciosa das evidências disponíveis e das diligências realizadas até o momento, concluí que as provas reunidas não são suficientemente 
                            concretas para sustentar uma conclusão definitiva da investigação. Como detetive responsável, sinto que é minha responsabilidade garantir que qualquer ação 
                            tomada seja baseada em fundamentos sólidos e evidências robustas. <br />
                            Apesar de me empenhar ao máximo na coleta de informações e na análise dos fatos, cheguei à conclusão de que não estamos em posição de avançar com segurança neste 
                            caso. Entendo plenamente a importância de se alcançar a verdade e de garantir que a justiça seja feita, mas também reconheço a necessidade de proceder com cautela 
                            quando as evidências disponíveis são insuficientes para sustentar uma acusação ou uma conclusão definitiva. <br />
                            Estou à disposição para discutir minha decisão pessoalmente, se necessário, e permaneço comprometida em colaborar com o delegado e com a equipe para garantir que 
                            todos os esforços possíveis sejam feitos para resolver este caso de forma adequada. <br />
                            Agradeço sua compreensão e apoio contínuo. <br />
                            Atenciosamente, <br />
                            Samantha Portes <br />
                            Detetive"
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