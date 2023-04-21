interface Persona {
    nombreCompleto: String;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    casaNo: number
}

export const ObjectosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Jorney',
        edad: 28,
        direccion: {
            pais: 'Costa Rica',
            casaNo: 121
        }
    }
    return (
        <>
            <h3>Objectos Literales</h3>
            <br />
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
