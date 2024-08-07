let dark = false;

function darkMode() {
    let background = document.body;

    if (!dark) {
        background.style.backgroundImage = "url('https://littlefoxy1nk.github.io/mon-site.github.io/lien%20/images/beige.jpeg')";
    
    } else {
        background.style.backgroundImage = ""; 
    }

    dark = !dark;
}

