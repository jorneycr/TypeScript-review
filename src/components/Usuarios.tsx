import { useEffect } from "react";
import { reqResApi } from "../api/reqResApi";

export const Usuarios = () => {

    const fetchJSONData = async () => {
        const response = await fetch('https://reqres.in/api/users');
        const jsonData = await response.json();
        console.log(jsonData);
    }

    useEffect(() => {
        reqResApi.get('/users')
            .then(resp => {
                console.log(resp.data.data);                
            })
            .catch(console.log)
    }, [])

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
                </tbody>
            </table>
        </>
    )
}
