import React, { useState } from "react";
import Pagina_inicial from "../Pagina_inicial";
import lanchonete from "../../assets/Cap5/lanchonete.webp"

export default function Aceitar(){
    const [mostrarPagina_inicial, setMostrarPagina_inicial] = useState(false);
    const proximoCap = () =>{
        setMostrarPagina_inicial(true);
    };

    return (
        
        <div className="container aceitar">
            {!mostrarPagina_inicial? (

                <div className="inicio">
                    <img className="esconder" src={lanchonete} alt="Lanchonete" />

                    <p>
                        Samantha aceitou se encontrar com o desconhecido sob uma condição, que levasse provas para poder incriminar o responsável, poderia ser video, imagem, 
                        documentos, algo que fosse útil e de certeza. Os dois tinham um acordo, agora era só esperar para ir ao encontro marcado. <br />
                        Ao chegar no bar a detetive se sentou na mesa do fundo aguardando a pessoa chegar, se passaram dez minutos e ninguém foi ao seu encontro, ela esperou 
                        mais quinze minutos e nada, então se levantou para ir embora, só tinha duas possibilidades: foi enganada ou a pessoas ficou com medo. Antes de ir embora foi 
                        ao balcão pedir uma água para levar, chegou um menino com um envelope em suas mãos. <br />
                        <span className="d_menino">Menino</span>: Tia um cara lá fora mandou te entregar isso aqui, ele mandou avisar que não pode entregar porque está sendo seguido. <br />
                        <span className="d_samantha">Samantha</span>: Peraí muleque, como ele é? Te ofereceu algo? <br />
                        <span className="d_menino">Menino</span>: Ah tia é um cara velho, tem uma cicatriz perto do olho, veste roupas chiques e me deu dez bytecash. <br />
                        <span className="d_samantha">Samantha</span>: Ele está em frente ao bar? <br />
                        <span className="d_menino">Menino</span>: Não, ele me deu isso naquela lanchonete de esquina do outro lado. <br />
                        A detetive deu mais dez bytecash para o garoto mandando ele ir embora, quando foi abrir o envelope escutou de longe barulho de quatro tiros, de imediato saiu 
                        dor bar e foi saber o que estava acontecendo. O barulho veio da lanchonete que o menino falou, ela correu ate lá viu um cara caído no chão, as caracteristicas 
                        batia com o que foi descrito, o homem era nada mais nada menos que o Dr. Paco, um dos médicos mais renomados que foi banido por diversas denúncias, Samantha 
                        chamou a policia e ficou no local, enquanto isso abriu o envelope, viu um papel e um pendrive. <br />
                        <p className="msg">
                            "Cara detetive, sou o Dr. Paco, nesse pen drive contém tudo o que você precisa para pegar os assasinos de Enrico Salazar, nessa altura do campeonato a proteção 
                            à testemunha não faz mais sentido, desde que te liguei fui sendo perseguido, não podia colocar sua vida em risco. O motivo dessa delação é que estou cansado, 
                            não quero mais fazer parte disso sei de muita coisa, por isso fingi minha morte, mas mesmo assim não adiantou. Um alerta não confie no delegado Alexander, ele 
                            faz parte de tudo isso." 
                        </p>
                        <div className="desfecho">
                            Após ler a carta Samantha acessou os arquivos, tinha fotos, documentos assinados, videos e localizações. Ligou imediatamente para Fernanda, sua superior, pedindo 
                            a prisão do delegado Alexander, pediu para mandar uma equipe para sua casa investigar tudo.
                            O delegado Alexander pegou 7 anos de prisão pelo envolvimento com a facção Aliança Urbana, 8 anos por ser responsável pela morte de Enrico Salazar, totalizando 
                            15 anos de cadeia. A antiga fábrica funcionava como preparação de drogas e tráfico de pessoas, Alexander fez um acordo para reduzirem sua pena se contribuir com 
                            a justiça. 
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