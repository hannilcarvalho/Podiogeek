let btn = document.querySelector('.fa-eye-slash');

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else inputSenha.setAttribute('type', 'password')
})
//Função para o "mostrar senha".