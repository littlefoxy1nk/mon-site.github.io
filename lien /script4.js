
    let dark = false;

function darkMode() {
    let background = document.body;
    let paragraphs = document.querySelectorAll('p');

    if (!dark) {
        background.style.backgroundColor = "#545454";
        paragraphs.forEach(function(p) {
            p.style.color = "#faeee0";
        });

    } else {
        background.style.backgroundColor = ""; 
        paragraphs.forEach(function(p) {
            p.style.color = ""; 
        });
    }

    dark = !dark;
}
