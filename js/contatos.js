'use strict'

export async function getContatosPorNome(nome) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getContatos(){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const response = await fetch(url)
    const data = await response.json()
    return data


}

async function postContatos(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch (url,options)
    return response.ok
}

async function putContato(contato, id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function deleteContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    return response.ok
}

const contatoTeste = {
        "nome": "Felipe Santos",
        "celular": "11 9 9999-7777",
        "foto": "../img/felipe.png",
        "email": "senas@gmail.com",
        "endereco": "Av. Jandiro, 444",
        "cidade": "itopovo"
}