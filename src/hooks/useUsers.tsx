import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes.interface";
import { reqResApi } from "../api/reqResApi";

export const useUsers = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const pagRef = useRef(0)

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: pagRef.current
            }
        });

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            pagRef.current--;
            alert('No hay mas registros');
        }
    }

    const next = () => {
        pagRef.current++;
        cargarUsuarios();
    }

    const prev = () => {
        if (pagRef.current > 1) {
            pagRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        next,
        prev,
    }
}
