
    let dark = false;

function darkMode() {
    let background = document.body;
    let paragraphs = document.querySelectorAll('p');
    let tirets = document.getElementById ('.interet');

    if (!dark) {
        background.style.backgroundColor = "#545454";
        paragraphs.forEach(function(p) {
            p.style.color = "#faeee0";
        });
        tirets.style.color='#faeee0';
    } else {
        background.style.backgroundColor = ""; 
        paragraphs.forEach(function(p) {
            p.style.color = ""; 
        });
        tirets.style.color="";
    }

    dark = !dark;
}
