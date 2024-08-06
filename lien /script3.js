function darkmode() {
    let background = document.body;
    let galerie= document.getElementById("galerie");
    background.style.backgroundColor = "#545454";
    galerie.style.backgroundImage = "url('images/fond3.jpeg')";
    let paragraphs = document.querySelectorAll('p');
                paragraphs.forEach(function(p) {
                    p.style.color = "#faeee0";
                });
    }