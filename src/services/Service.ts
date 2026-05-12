import axios from "axios";
import type { Dispatch, SetStateAction } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";

const api = axios.create({
        baseURL: 'https://blogpessoal-1ryi.onrender.com'
})

export const cadastrarUsuario = async (url: string, dados: Object) => {
        return await api.post(url, dados)
}

export const login = async (url: string, dados: Object, setUsuario: Dispatch<SetStateAction<UsuarioLogin>>) => {
    const resposta = await api.post(url, dados)
    return resposta.data
}

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
};

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
};

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
};