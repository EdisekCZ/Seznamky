const socket = io();
const login = document.getElementById('login');
const send = document.getElementById('send');
const jmeno = document.getElementById('jmeno');
const mess = document.getElementById('mess');
const chat = document.getElementById('chat');
const logout = document.getElementById('logout') 
const chattovani = document.getElementById('chattovani');

const prihlasit = document.getElementById('prihlasit');
let user;

chattovani.style.display = 'none';

login.addEventListener('click', function(){
    if(jmeno.value){
        chattovani.style.display = 'block';
        prihlasit.style.display = 'none';
        console.log(jmeno.value);
        user = jmeno.value;
        socket.emit('login', jmeno.value)
    }
});

send.addEventListener('click', function(){
    if(mess.value){
        console.log(user);
        socket.emit('send', mess.value, user)
    }
});

logout.addEventListener('click', function(){
    chattovani.style.display = 'none';
    prihlasit.style.display = 'block';
    socket.emit('logout', user);
});

socket.on('message', (msg, name) =>{
    if(chattovani.style.display == 'block') {
        console.log(msg);
        chat.innerHTML += `<p>${name}: ${msg}</p>`;
    }
});

/*
chatForm.addEventListener('submit', e => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    socket.emit('chatMessage',msg);
});
*/