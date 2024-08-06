function darkmode() {
let background = document.body;
background.style.backgroundColor = "#545454";
let paragraphs = document.querySelectorAll('p');
            paragraphs.forEach(function(p) {
                p.style.color = "#faeee0";
            });
}
