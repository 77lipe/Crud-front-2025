'use strict'

import {getContatos} from "./contatos.js"
import { getContatosPorNome } from "./contatos.js"

function criarCard(contato){
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('cardContato')
    console.log(contato)
    card.innerHTML = `
                <img src="${contato.foto}" alt="">
                <h2>${contato.nome}</h2>
                <p> ${contato.celular}</p>
    `
    container.appendChild(card)

}

async function carregarCards() {
    const contatos = await getContatos()

    contatos.forEach (criarCard)
}

async function carregarPesquisa(evento) {
    const container = document.getElementById('container')
    if(evento.key == 'Enter'){
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach(criarCard)
    }
}
carregarCards()

document.getElementById('nomeContato')
        .addEventListener('keydown', carregarPesquisa)