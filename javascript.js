let sent = document.querySelector('button');

let msg = document.queryselector('h1');

sent.addEventListener('click', ()=>{

    sent.innerText = 'Sending...';
    setTimeout(()=>{
        sent.style.display = 'none';
        msg.innerText = 'Sent!';

    },3000)
});