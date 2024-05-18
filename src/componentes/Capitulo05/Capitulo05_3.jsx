import React, { useState } from "react";
import Fernanda from "./Fernanda";
import Prender from "./Prender";
import apart from "../../assets/Cap5/apart.png"

export default function Capitulo05_3(){
    const [verFernanda, setVerFernanda] = useState(false);
    const [verPrender, setVerPrender] = useState(false);

    const FernandaClick = () => {
        setVerFernanda(true);
        setVerPrender(false);
    };

    const PrenderClick = () => {
        setVerPrender(true);
        setVerFernanda(false);
    };

    return (
        <div className="container cap5_3" >
            {verFernanda ? (
                <Fernanda />
            ) : verPrender ? (
                <Prender />
            ) : (
                <div className="inicio">
                    <h1>V</h1>
                    <h2>"A verdade, para os fracos, é uma flecha na carne." - Paulo Coelho</h2>
                    <img className="esconder" src={apart} alt="Apartamento" />
                    
                    <p>
                        Depois de investigar a noite toda a relação entre Antônio Relva e Alexander, a detetive descobriu que o delegado faz parte da facção Aliança Urbana, que 
                        está na cidade faz um pouco mais de oito anos, o contato entre eles vem a partir de serviços de execução e apagamento de arquivo pelo mercenário, ao que tudo 
                        indica essa ligação vem ocorrendo bastante tempo. Samantha passou horas juntando as provas para sua acusação, não queria que nada pasasse batido, conseguiram 
                        prender o mercenário, ele disse o que sabia com o acordo de reduzir sua pena, Alexander faz parte dos altos membros da facção, foi o mandante pela morte de 
                        Enrico Salazar, não queria que ele fosse embora da cidade sabendo tanto sobre os membros, entre outras coisas também é responsável pelo tráfico de pessoas e 
                        implementar chips adulterados nessas pessoas. <br />
                        Samantha está na dúvida de aparecer na delegacia, sabe que poder correr o risco de ir até lá, o delegado já pode estar sabendo que prenderam Antônio, talvez 
                        prefira ligar para Fernanda, sua superior, deixar ela prender com sua equipe, além do mais precisa ver como está o estado de saúde de Luna.
                    </p>
                    <button className="btn" onClick={FernandaClick}> <span>Ligar para Fernanda</span> </button>
                    <button className="btn" onClick={PrenderClick}> <span>Prender pessoalmente</span> </button>
                </div>
            )}
        </div>
    );
}