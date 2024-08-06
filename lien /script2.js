
let dark = false;

function darkMode() {
    let background = document.body;
    let cases = document.getElementsByClassName('explications')

    if (!dark) {
        background.style.backgroundImage = "url('images/beige.jpeg')";
        explications.forEach(function (explications) {
        explications.style.color = "#545454";
        });
    }
    else {
        background.style.backgroundImage = ""; 
        cases.forEach(function (explications) {
            explications.style.background= ""; 
        });
    }

    dark = !dark;
}
