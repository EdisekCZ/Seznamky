const socket = io();
const login = document.getElementById('login');
const send = document.getElementById('send');
const jmeno = document.getElementById('jmeno');
const mess = document.getElementById('mess');
const chat = document.getElementById('chat'); 

const prihlasit = document.getElementById('prihlasit');
let user;

login.addEventListener('click', function(){
    if(jmeno.value){
        console.log(jmeno.value);
        user = jmeno.value;
        socket.emit('login', {jmeno: jmeno.value})
    }
});
/*
send.addEventListener('click', function(){
    if(mess.value){
        console.log(mess.value);
        user = mess.value;
        socket.emit('send', {mess: mess.value})
    }
});
*/
socket.on('message',msg =>{
    console.log(msg);
    prihlasit.style.display = 'none';
    chat.innerHTML += `<p>${msg.jmeno} ${msg.zprava}</p>`;
});

/*
chatForm.addEventListener('submit', e => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    socket.emit('chatMessage',msg);
});
*/