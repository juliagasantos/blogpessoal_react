import { useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import type Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/Service"
import { ClipLoader } from "react-spinners"

function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [confirmarSenha, setConfirmarSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  })

  function retornar() {
    navigate("/login")
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha !== usuario.senha || usuario.senha.length < 8) {
      alert("Dados inválidos! Verifique a senha.")
      setUsuario({ ...usuario, senha: "" })
      setConfirmarSenha("")
      return
    }

    const dados = {
      nome: usuario.nome,
      usuario: usuario.usuario,
      senha: usuario.senha,
      foto: usuario.foto
    }

    setIsLoading(true)

    try {
      await cadastrarUsuario("/usuarios/cadastrar", dados)
      alert("Usuário cadastrado com sucesso!")
      navigate("/login")
    } catch (error) {
      alert("Erro ao cadastrar o usuário!")
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">

      <div className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"></div>

      <form
        className="flex justify-center items-center flex-col w-2/3 gap-3"
        onSubmit={cadastrarNovoUsuario}
      >

        <h2 className="text-slate-900 text-5xl">Cadastrar</h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="border-2 border-slate-700 rounded p-2 w-full"
          value={usuario.nome}
          onChange={atualizarEstado}
        />

        <input
          type="text"
          name="usuario"
          placeholder="Usuario"
          className="border-2 border-slate-700 rounded p-2 w-full"
          value={usuario.usuario}
          onChange={atualizarEstado}
        />

        <input
          type="text"
          name="foto"
          placeholder="Foto"
          className="border-2 border-slate-700 rounded p-2 w-full"
          value={usuario.foto}
          onChange={atualizarEstado}
        />

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          className="border-2 border-slate-700 rounded p-2 w-full"
          value={usuario.senha}
          onChange={atualizarEstado}
        />

        <input
          type="password"
          placeholder="Confirmar Senha"
          className="border-2 border-slate-700 rounded p-2 w-full"
          value={confirmarSenha}
          onChange={handleConfirmarSenha}
        />

        <div className="flex justify-around w-full gap-8">

          <button
            type="button"
            onClick={retornar}
            className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2 flex justify-center"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Cadastrar</span>
            )}
          </button>

        </div>
      </form>
    </div>
  )
}

export default Cadastro