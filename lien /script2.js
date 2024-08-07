let dark = false;

function darkMode() {
    let background = document.body;

    if (!dark) {
        background.style.backgroundImage = "url('/images/beige.jpeg')";
    
    } else {
        background.style.backgroundImage = ""; 
    }

    dark = !dark;
}

