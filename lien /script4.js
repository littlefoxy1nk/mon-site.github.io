
    let dark = false;

function darkMode() {
    let background = document.body;
    let paragraphs = document.querySelectorAll('p');
    let tirets = document.qweryselector('.interet');

    if (!dark) {
        background.style.backgroundColor = "#545454";
        paragraphs.forEach(function(p) {
            p.style.color = "#faeee0";
        });
        tirets.forEach(function(tirets) {
            tirets.style.color="#545454"
        })
    } else {
        background.style.backgroundColor = ""; 
        paragraphs.forEach(function(p) {
            p.style.color = ""; 
        });
        tirets.forEach(function(tirets) {
            tirets.style.color="#545454"
        })
    }

    dark = !dark;
}
