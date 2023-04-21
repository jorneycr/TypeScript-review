import React from 'react'

export const Funciones = () => {
    const sumar = (a: number, b: number): number => {
        return a + b;
    }

    return (
        <>
            <p>Funciones</p>
            <h4> Ls suma es: {sumar(1, 2)}</h4>
        </>
    )
}
