export const TiposBasicos = () => {

    const nombre:  string | number = 'Jorney'
    const edad = 28;
    const poderes: string[] = [];
    poderes.push('Velocidad', 'Fuerza', 'Inteligencia')

    return (
        <>
            <h3>Tipos Basicos</h3>
            <br />
         
            {nombre} - {edad}
            <br />
            <br />
            {poderes.join(', ').toLocaleLowerCase()}
            <br />
            <br />
            {poderes.find(poder => poder === 'Fuerza')?.length}
            <br />
            <br />
            {poderes.find(poder => poder === 'Fuerza')?.length === 6 && 'Tiene 6 caracters'}
            <br />
            <br />
            {poderes.filter(poder => poder !== 'Fuerza').join(', ').toUpperCase()}
            <br />
            <br />
        </>
    )
}
