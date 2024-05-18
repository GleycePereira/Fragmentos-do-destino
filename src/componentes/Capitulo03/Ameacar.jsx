import React, { useState } from "react";
import Capitulo04 from "../Capitulo04/Capitulo04";
import valdo from "../../assets/Cap3/valdo.jpg"

export default function Ameacar(){
    const [mostrarCap4, setMostrarCap4] = useState(false);
    const proximoCap = () =>{
        setMostrarCap4(true);
    };

    return (
        
        <div className="container ameacar">
            {!mostrarCap4? (

                <div className="inicio">
                    <img className="esconder" src={valdo} alt="Valdo" />
                    <p>
                    <span className="d_samantha">Samantha</span>: Vamos Valdo, você está escondendo alguma coisa? <br />
                    <span className="d_valdo">Valdo</span>: Não estou detetive, já falei tudo que tinha pra falar. <br />
                    <span className="d_samantha">Samantha</span>: Não brinque Valdo, você pode ser indiciado por ser uma das poucas pessoas a ter contato com ele e não querer dizer nada. <br />
                    <span className="d_valdo">Valdo</span>: O que você quer que eu faça? Enrico era um cara muito fechado. <br />
                    <span className="d_samantha">Samantha</span>: Deve ter algo para se lembrar? Acredito que não quer passar no minímo dois anos na cadeia por omissão de provas? <br />
                    <span className="d_valdo">Valdo</span>: Lembro só uma vez que Enrico com Hugo e Elena foram para um apartamento em Rizzo. <br />
                    <span className="d_samantha">Samantha</span>: E para que necessariamente eles foram tão longe assim? <br />
                    <span className="d_valdo">Valdo</span>: A única coisa que escutei foi que precisavam assinar uns papéis, pois as mercadorias ilegais estavam sendo vigiadas e precisavam esconder 
                    os documentos em outro lugar. <br />
                    <span className="d_samantha">Samantha</span>: Ta vendo Valdo como foi fácil, me passa o endereço que te deixo em paz. <br />
                    Samantha anotou o endereço no papel e foi para o carro, Luna entrou logo em seguida. <br />
                    <span className="d_luna">Luna</span>: Vou junto com você, esse lugar é muito perigoso. <br />
                    <span className="d_samantha">Samantha</span>: Não precisa de ninguém para me defender. <br />
                    <span className="d_luna">Luna</span>: Eu ficaria mal se algo acontecesse com esse rostinho lindo e outra que conheço o local, é melhor você esconder esse distintivo. <br />
                    A detetive sabia que seria perca de tempo ficar discutindo nesse momento. <br />
                    <span className="d_samantha">Samantha</span>: Vamos logo, mas você fica atrás de mim sem fazer besteira. <br />
                    </p>
                    <button className="btn" onClick={proximoCap}> <span>Capítulo IV</span> </button>
                </div>


            ) : (
                <Capitulo04/>
            )}
            
        </div>
    )
};