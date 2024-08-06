    let dark = false;

function darkMode() {
    let background = document.body;
    let galerie = document.getElementById("galerie");
    let paragraphs = document.querySelectorAll('p');

    if (!darkMode) {
        background.style.backgroundColor = "#545454";
        galerie.style.backgroundImage = "url('images/fond3.jpeg')";
        paragraphs.forEach(function(p) {
            p.style.color = "#faeee0";
        });
    } else {
        background.style.backgroundColor = ""; // reset to default
        galerie.style.backgroundImage = "";
        paragraphs.forEach(function(p) {
            p.style.color = ""; // reset to default
        });
    }

    darkMode = !darkMode;
}
