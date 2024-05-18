import React, {useState} from 'react';
import Capitulo02 from './Capitulo02';
import CApitulo02 from './Capitulo02/CApitulo02';
import quarto from"../assets/quarto.png"

export default function Pertences(){
    const [mostrarCap2, setMostrarCap2] = useState(false);
    const proximoCap = () =>{
        setMostrarCap2(true);
    };

    return (
        
        <div className='container pertences'>
            {!mostrarCap2? (

                <div className="inicio">
                    <img className='esconder' src={quarto} alt="Quarto" />
                    <p>
                        A vítima levava consigo apenas cartão de crédito, chaves do carro, cantil e um bilhete que estava escrito a seguinte informação: <br />
                        <span className='msg'>Oi Enrico lembrando que seu problema foi resolvido e agora aguardo a segunda parte do pagamento.</span>
                    </p>

                    <div>
                        <button className='btn' onClick={proximoCap}> <span>Capítulo II</span></button>
                    </div>
                </div>

            ) : (
                <CApitulo02/>
            )}
            
        </div>
    )
};