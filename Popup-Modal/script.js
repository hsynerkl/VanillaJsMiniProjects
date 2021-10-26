const closebtn = document.getElementById('close');
const popup = document.getElementById('container')
const openBtn =document.getElementById('open')

openBtn.addEventListener('click',()=>{
    popup.classList.add('active')
})

closebtn.addEventListener('click',()=>{
    popup.classList.remove('active')
})


