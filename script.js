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
        background.style.backgroundColor = ""; // reset to default
        paragraphs.forEach(function(p) {
            p.style.color = ""; // reset to default
        });
    }

    dark = !dark;
}

let name = prompt("bonjour et bienvenu! avant que vous enn sachiez plus sur moi, dites moi au moins votre nom");
alert("bienvenu " + name + ", j espère que vous apprécierez la visite !");