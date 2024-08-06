function darkmode() {
    let background = document.body;
    background.style.backgroundImage= "url('/images/beige.jpeg')";
    let paragraphs = document.querySelectorAll('p');
                paragraphs.forEach(function(p) {
                    p.style.color = "#faeee0";
                });
    }