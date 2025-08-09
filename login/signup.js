let getstarted = document.querySelector('#getstarted');
let commit = document.querySelector('#commit');
let payment = document.querySelector('#payment');
let success = document.querySelector('#success');
let start = document.querySelector('#start');
let pay = document.querySelector('#pay');
let rule = document.querySelector('#rule');
let ruleback = document.querySelector('#ruleback');
let payback = document.querySelector('#payback');

start.classList.remove('hidden');
pay.classList.add('hidden');
rule.classList.add('hidden');
success.classList.add('hidden')


getstarted.addEventListener('click', ()=>{
    start.classList.add('hidden');
    rule.classList.remove('hidden');
})
commit.addEventListener('click', ()=>{
    rule.classList.add('hidden');
    pay.classList.remove('hidden');
})
pay.addEventListener('click', ()=>{
    pay.classList.add('hidden');
    success.classList.remove('hidden');
    setTimeout(()=>{
        start.classList.remove('hidden');    
        success.classList.add('hidden')
    }, 3000)
})

ruleback.addEventListener('click', ()=>{
    start.classList.remove('hidden');
    rule.classList.add('hidden');
})
payback.addEventListener('click', ()=>{
    pay.classList.add('hidden');
    rule.classList.remove('hidden');
})