
    let dark = false;

function darkMode() {
    let background = document.body;
    let paragraphs = document.querySelectorAll('p');
    let tirets = document.querySelectorAll('.interet,.langues');
    console.log(tirets)

    if (!dark) {
        background.style.backgroundColor = "#545454";
        paragraphs.forEach(function(p) {
            p.style.color = "#faeee0";
        });
        tirets.forEach(function(t) {
            t.style.color="#545454"
        })
    } else {
        background.style.backgroundColor = ""; 
        paragraphs.forEach(function(p) {
            p.style.color = ""; 
        });
        tirets.forEach(function(t) {
            t.style.color="#545454"
        })
    }

    dark = !dark;
}
