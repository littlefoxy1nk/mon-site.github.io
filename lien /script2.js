let dark = false;

function darkMode() {
    let background = document.body;
    let backbox = document.querySelectorAll('expl');

    if (!dark) {
        background.style.backgroundImage = url('images/beige.jpeg');
        backbox.forEach(function(expl) {
            p.style.color = "#faeee0";
        });
    } else {
        background.style.backgroundColor = ""; // reset to default
        backbox.forEach(function(expl) {
            p.style.color = ""; // reset to default
        });
    }

    dark = !dark;
}

