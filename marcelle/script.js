const buttonNo = document.querySelector('#answer-no');
const perguntaContainer = document.querySelector('#pergunta-container');
const buttonYes = document.querySelector('#answer-yes');

buttonNo.addEventListener('mouseover', () => {
    buttonNo.style.marginTop = Math.floor(Math.random() * 200) + 'px';
    buttonNo.style.marginLeft = Math.floor(Math.random() * 200) + 'px';
    buttonNo.style.marginRight = Math.floor(Math.random() * 200) + 'px';
    buttonNo.style.marginBottom = Math.floor(Math.random() * 200) + 'px';
})

buttonNo.addEventListener('mouseup  ', () => {
    buttonNo.style.marginTop = Math.floor(Math.random() * 200) + 'px';
    buttonNo.style.marginLeft = Math.floor(Math.random() * 200) + 'px';
    buttonNo.style.marginRight = Math.floor(Math.random() * 200) + 'px';
    buttonNo.style.marginBottom = Math.floor(Math.random() * 200) + 'px';
})

buttonNo.addEventListener('click', () => {
    buttonNo.style.marginTop = Math.floor(Math.random() * 200) + 'px';
    buttonNo.style.marginLeft = Math.floor(Math.random() * 200) + 'px';
    buttonNo.style.marginRight = Math.floor(Math.random() * 200) + 'px';
    buttonNo.style.marginBottom = Math.floor(Math.random() * 200) + 'px';
})

buttonYes.addEventListener('click', () => {
    alert('Parabéns, darei o meu máximo para te fazer a mulher mais feliz nesse mundo!')
})