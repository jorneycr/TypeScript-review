import { useState } from "react";

export const useCounter = (ini: number = 10) => {

    const [valor, setValor] = useState<number>(ini);

    const operator = (num: number, op: string) => {
        if (op === 'S') setValor(valor + num);
        if (op === 'M') setValor(valor - num);
    }

    return {
        valor,
        operator
    }
}
