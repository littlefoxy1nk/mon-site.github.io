
let dark = false;

function darkMode() {
    let background = document.body;
    let paragraphs = document.querySelectorAll('p');

    if (!dark) {
        background.style.backgroundImage = "url('images/beige.jpeg')";
        paragraphs.forEach(function (p) {
            p.style.color = "#faeee0";
        });
    }
    else {
        background.style.backgroundImage = ""; 
        paragraphs.forEach(function (p) {
            p.style.color = ""; 
        });
    }

    dark = !dark;
}
