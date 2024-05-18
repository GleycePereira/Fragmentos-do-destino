import React, { useState } from "react";
import Capitulo01 from "./Capitulo01";

export default function Pagina_inicial() {
    const [botaoClicado, setBotaoClicado] = useState(false);

    const handleClick = () => {
        // Define o estado para indicar que o botão foi clicado
        setBotaoClicado(true);
    };

    return (
        <div className="container inicial">
            {/* Renderiza o conteúdo da página inicial somente se o botão ainda não foi clicado */}
            {!botaoClicado && (
                <div>
                    <h1>Fragmentos do Destino</h1>
                    <h3>Uma história de mistério, qualquer escolha errada pode ser o fim.</h3>

                    <button className="btn" onClick={handleClick}> <span>Começar</span> </button>
                </div>
            )}

            {/* Renderiza o componente Capitulo01 se o botão foi clicado */}
            {botaoClicado && <Capitulo01 />}
        </div>
    );
}
