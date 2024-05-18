import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import restaurante from "../../assets/Cap5/restaurante.jpg"

export default function Prender(){
    const [mostrarPagina_inicial, setMostrarPagina_inicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPagina_inicial(true);
    };

    return (
        
        <div className="container prender">
            {!mostrarPagina_inicial? (

                <div className="inicio">
                    <img className="esconder" src={restaurante} alt="Restaurante" />

                    <p>
                        Samantha enviou todas as suas provas para Fernanda, estava indo para a delegacia prender Alexander, ela suspeitava que ele já possa ter em mãos o depoimento 
                        de Antônio e por isso não podia perder tempo. Antes de ir a delegacia pediu a sua superior para colocar equipes para ficar de olho nos aeroportos, rodoviárias, 
                        qualquer meio de transporte que ele pudesse fugir. <br />
                        Chegando na delegacia a detetive tratou logo de ir na sala do delegado, porém ele não estava lá, um policial disse que foi almoçar com a superindente da 
                        polícia, suspeitando estar fazendo algum tipo de acordo, não sabia ao certo, tinha que correr para o restaurante, pediu o endereço e foi correndo. O local 
                        estava um pouco cheio, informou ao garçom que estava a procura do delegado e ele apontou onde estava sentado, Samantha pediu licença e se sentou na mesa. <br />

                        <span className="d_alexander">Alexander</span>: Hora que suspresa detetive, ao que devo a honra? Estou conversando com a superindente, Yara Couto, sobre as melhorias que podemos implantar nas 
                        delegacias e departamentos. <br />
                        <span className="d_samantha">Samantha</span>: Hora vim contar sobre a notícia, não ficou sabendo? Prenderam um cara suspeito sobre a morte de Enico Salazar <br />
                        <span className="d_yara">Yara</span>: Bom pelo menos uma notícia boa, esse caso está dando muita dor de cabeça, a imprensa fica em cima querendo saber de atualizações a todo momento. <br />
                        <span className="d_samantha">Samantha</span>: O nome do sujeito é Antônio Relva, um mercenário aposentado, vem fazendo serviços ilícitos para pessoas importantes. <br />
                        <span className="d_alexander">Alexander</span>: Sobre o que esse Antônio falou? Já sabe se ele está envolvido mesmo com a morte? <br />
                        <span className="d_samantha">Samantha</span>: Aí que vem o engraçado, eu encontrei informações sobre ele no banco de dados, coisa que não foi fácil de acessar, coincidentemente ele vem há anos se 
                        safando de prisões com ajuda sua delegado. <br />
                        <span className="d_alexander">Alexander</span>: Co-como assim? Deve ser algum erro, não conheço o sujeito. <br />
                        
                        <div className="desfecho">
                            Nesse momento Samantha enviou todos os arquivos para Yara e prendeu Alexander ali mesmo, ele tentou contestar dizendo que era uma farsa, mas não obteve 
                            sucesso em tentar enganar as duas. Delegado Alexander foi condenado a 7 anos pelo envolvimento com a facção Aliança Urbana e 8 anos pela morte de Enrico 
                            Salazar, totalizando 15 anos de prisão, Samantha estava no tribunal e ouviu tudo que a juiza decretou, não se sabe ao certo o que mais ele possa estar 
                            envolvido, mas pelo menos foi condenado pelos crimes descobertos.
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