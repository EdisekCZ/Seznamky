const socket = io();
const login = document.getElementById('login');
const jmeno = document.getElementById('jmeno');

login.addEventListener('click', function(jmeno){
    if(login.value){
        socket.emit('login', {jmeno: jmeno.value})
    }
});