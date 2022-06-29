//showing setting menu
var settings = document.querySelector('.setting-menu');

function showSttingsMenu() {
    settings.classList.toggle('setting-menu-height');
}


//activate dark mode
var darkMode = document.getElementById("dark-mode");
darkMode.onclick = function() {
    darkMode.classList.toggle('dark-btn-on');
    document.body.classList.toggle('drak-theme');

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");

    }
}


if (localStorage.getItem("theme") == "light") {
    darkMode.classList.remove("dark-btn-on")
    document.body.classList.remove('drak-theme');

} else if (localStorage.getItem("theme") == "dark") {
    darkMode.classList.add('dark-btn-on');
    document.body.classList.add('drak-theme');
} else {
    localStorage.setItem("theme", "light");
}