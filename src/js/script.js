const lista = document.querySelector('#tasks');
let quantidade = document.querySelector('#quantidade')
let lis = document.querySelectorAll('#tasks > li')
let contador = lis.length
quantidade.innerHTML = contador

let input = document.querySelector('#inputAddTask')
let butaoAddTask = document.querySelector('.add-button')

butaoAddTask.addEventListener('click', (e) =>{
    e.preventDefault()
    const texto = input.value
    addTask(texto)
})

function addTask(texto) {
    tasks.innerHTML += `
    <li>
        <div onclick="excluiLi(this)" class="btn-delete">
            <ion-icon name="trash-outline"></ion-icon>
        </div>
        <div onclick="finalizarTask(this)">${texto}</div>
    </li>
    `
    input.value = ''
    contador++
    quantidade.innerHTML = contador

}

function finalizarTask(elementoFilho){
    let elementoClicado = elementoFilho;
    const elementoPai = elementoClicado.parentNode;
    if (elementoPai.classList[0] == 'finalizado') {
        elementoPai.classList.remove('finalizado');
        contador++
        quantidade.innerHTML = contador

    }else{
        contador--
        quantidade.innerHTML = contador
        elementoPai.classList.add('finalizado');
    }
    console.log(elementoPai.classList)
}

function excluiLi(elementoFilho) {
    let elementoClicado = elementoFilho;
    const elementoPai = elementoClicado.parentNode;
    elementoPai.remove()
    contador--
    quantidade.innerHTML = contador
        
}