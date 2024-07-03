var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menu');
var overlay = document.getElementById('overlay');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('open');
    overlay.style.display = menu.classList.contains('open') ? 'block' : 'none';
});

overlay.addEventListener('click', function() {
    menu.classList.remove('open');
    overlay.style.display = 'none';
});

document.getElementById('homeButton').onclick = function() {
    window.location.href = 'Profil.html'; // Ganti 'Profil.html' dengan URL halaman tujuan Anda
};
