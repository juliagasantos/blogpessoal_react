import axios from "axios";

const api = axios.create({
        baseURL: 'https://blogpessoal-1ryi.onrender.com'
})

export const cadastrarUsuario = async (url: string, dados: Object) => {
        return await api.post(url, dados)
}

export const login = async (url: string, dados: Object) => {
    const resposta = await api.post(url, dados)
    return resposta.data
}