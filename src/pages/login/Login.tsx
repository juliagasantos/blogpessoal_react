import { useState, type ChangeEvent, type FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../services/Service"
import type UsuarioLogin from "../../models/UsuarioLogin"

function Login() {

    const navigate = useNavigate()

    const [dados, setDados] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [loginDados, setLoginDados] = useState({
        usuario: "",
        senha: ""
    })

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setLoginDados({
            ...loginDados,
            [e.target.name]: e.target.value
        })
    }

    async function logar(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            const resposta = await login("/usuarios/logar", loginDados)

            setDados(resposta)

            alert("Login realizado com sucesso!")

            // aqui você pode salvar token se quiser:
            // localStorage.setItem("token", resposta.token)

            navigate("/home")

        } catch (error) {
            alert("Usuário ou senha inválidos!")
            console.log(error)
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">

            <form
                onSubmit={logar}
                className="flex justify-center items-center flex-col w-1/2 gap-4"
            >

                <h2 className="text-slate-900 text-5xl">Entrar</h2>

                <input
                    type="text"
                    name="usuario"
                    placeholder="Usuario"
                    className="border-2 border-slate-700 rounded p-2 w-full"
                    value={loginDados.usuario}
                    onChange={atualizarEstado}
                />

                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    className="border-2 border-slate-700 rounded p-2 w-full"
                    value={loginDados.senha}
                    onChange={atualizarEstado}
                />

                <button
                    type="submit"
                    className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2"
                >
                    Entrar
                </button>

                <hr className="border-slate-800 w-full" />

                <p>
                    Ainda não tem uma conta?{" "}
                    <Link to="/cadastro" className="text-indigo-800 hover:underline">
                        Cadastre-se
                    </Link>
                </p>

            </form>

            <div className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center" />

        </div>
    )
}

export default Login