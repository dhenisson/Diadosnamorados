// JavaScript da contagem
const startDate = new Date("2024-07-10T00:00:00"); // <-- Altere aqui para a data real

function updateTimeTogether() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timeTogether').innerHTML =
    `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos 💞`;
}

setInterval(updateTimeTogether, 1000);
updateTimeTogether();

// Corações flutuantes
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 3) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}

setInterval(createFloatingHeart, 500);

// Abrir telas

function abrirTela(v){
    const tela1 = document.getElementById('tela1');
    const tela2 = document.getElementById('tela2');
    const tela3 = document.getElementById('tela3');

    console.log(tela1);
    console.log(tela2);
    console.log(tela3);

    if(v == 1){
    tela1.style.display = 'flex';
    tela2.style.display = 'none';
    tela3.style.display = 'none';
    }else if(v == 2){
    tela1.style.display = 'none';
    tela2.style.display = 'flex';
    tela3.style.display = 'none';
    }else if(v == 3){
    tela1.style.display = 'none';
    tela2.style.display = 'none';
    tela3.style.display = 'flex';
    tocarMusica();
    }
    
}

// Tocar música automaticamente
function tocarMusica(){
    const musica = document.getElementById('musica');
    musica.play().catch(e => console.log("Erro ao tocar:", e));
}