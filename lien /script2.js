let dark = false;

function darkMode() {
    let background = document.body;
    let backbox = document.querySelectorAll('.boite');

    if (!dark) {
        background.style.backgroundImage = "url('lien /images/beige.jpeg')";
        backbox.forEach(function(boite) {
            boite.style.backgroundColor = "#545454";
        });
    } else {
        background.style.backgroundColor = ""; 
        backbox.forEach(function(boite) {
            boite.style.backgroundcolor = ""; 
        });
    }

    dark = !dark;
}

