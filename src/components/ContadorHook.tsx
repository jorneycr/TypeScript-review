import { useCounter } from "../hooks/useCounter"

export const ContadorHook = () => {

    const { valor, operator } = useCounter(0);

    return (
        <>
            <h3>ContadorHook <small>{valor}</small></h3>

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
