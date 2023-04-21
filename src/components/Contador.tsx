import { useState } from 'react';

export const Contador = () => {

    const [valor, setValor] = useState<number>(0);

    const operator = (num: number, op: string) => {
        if(op === 'S') setValor(valor + num);
        if(op === 'M') setValor(valor - num);
    }

    return (
        <>
            <h3>Contador <small>{valor}</small></h3>

            <button
                className='btn btn-primary'
                onClick={() => operator(1, 'S')}
            >
                +1
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={() => operator(1, 'M')}
            >
                -1
            </button>
        </>
    )
}
