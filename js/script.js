let zero = 0
const valor = document.querySelector('.valor')
const btns = document.querySelector('.btns')
document.addEventListener('click', (e)=>{
let el = e.target
if(el.classList.contains('diminuir')){
   --zero
   valor.textContent = zero}
if(el.classList.contains('adicionar')){
    ++zero
   valor.textContent = zero}
if(zero > 0){valor.style.color ='green'}
if(zero == 0){valor.style.color ='#000'}
if(zero < 0){valor.style.color ='red'}

if(el.classList.contains('resetar')){
    valor.style.color = '#000'
    clear()
    
}
})

function clear(){
    zero = 0
    valor.textContent = zero
}




