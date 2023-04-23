import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    const { formulario, onChange } = useForm({
        email: 'test@tes.com',
        password: '123456'
    });

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={formulario.email}
                onChange={({ target }) => onChange(target.value, 'email')}
            />

            <input
                type="password"
                className="form-control mt-2 mb-2"
                placeholder="password"
                value={formulario.password}
                onChange={({ target }) => onChange(target.value, 'password')}
            />

            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>
        </>
    )
}
