import { useUsers } from "../hooks/useUsers";
import { Usuario } from "../interfaces/reqRes.interface";

export const Usuarios = () => {

    const { usuarios, cargarUsuarios } = useUsers();

    return (
        <>
            <h3>Usuarios:</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(({ avatar, email, first_name, id, last_name }: Usuario) => {
                            return (
                                <tr key={id}>
                                    <td><img style={{ width: 35, borderRadius: 100 }} src={avatar} /></td>
                                    <td>{first_name} {last_name}</td>
                                    <td>{email}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <hr />
            <button className='btn btn-primary' onClick={cargarUsuarios}>Anterior</button>
            &nbsp;
            <button className='btn btn-primary' onClick={cargarUsuarios}>Siguiente</button>
        </>
    )
}
