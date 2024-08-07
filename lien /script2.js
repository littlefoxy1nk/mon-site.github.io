let dark = false;

function darkMode() {
    let background = document.body;
    let backbox = document.querySelectorAll('boite');

    if (!dark) {
        background.style.backgroundImage = url('images/beige.jpeg');
        backbox.forEach(function(boite) {
            boite.style.backgroundColor = "#faeee0";
        });
    } else {
        background.style.backgroundColor = ""; // reset to default
        backbox.forEach(function(boite) {
            boite.style.backgroundcolor = ""; // reset to default
        });
    }

    dark = !dark;
}

