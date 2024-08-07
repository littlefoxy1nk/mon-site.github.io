let dark = false;

function darkMode() {
    let background = document.body;
    let backbox = document.querySelectorAll('.boite');

    if (!dark) {
        background.style.backgroundImage = "url('lien /images/beige.jpeg')";
        backbox.forEach(function(backbox) {
            backbox.style.backgroundColor = "#545454";
        });
    } else {
        background.style.backgroundImage = ""; 
        backbox.forEach(function(backbox) {
            backbox.style.backgroundcolor = ""; 
        });
    }

    dark = !dark;
}

