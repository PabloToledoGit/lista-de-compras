listaDeItens = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')
const ulItens = document.getElementById('lista-de-itens')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    salvarItens()
    mostrarItem()

})


function salvarItens() {

    const comprasItens = itensInput.value
    const checarDuplicidade = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItens.toUpperCase() )

    if(checarDuplicidade){
        alert('item ja existe')

    }else{
    listaDeItens.push({

        valor: comprasItens,
    })
}

}

function mostrarItem() {
    ulItens.innerHTML = ''
    listaDeItens.forEach((elemento, index) => {
        ulItens.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${elemento.valor}" />
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
        `;
    });


    const inputsCheck = document.querySelectorAll
    
}
