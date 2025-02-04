const buttonFrontEnd = document.querySelector(".button-category-language-front");
const buttonSoftwareDev = document.querySelector(".button-category-language-dev");
const buttonBackEnd = document.querySelector(".button-category-language-back");

const blockFrontEnd = document.querySelector(".front");
const blockSoftwareDev = document.querySelector(".software");
const blockBackEnd = document.querySelector(".back");

link_website = "https://lucasvaugrente.github.io/portfolio/";

fetch(link_website + 'data/skills.json')
    .then(response => response.json())
    .then(data => {
        for (const type in data.skills) {

            for (let index = 0; index < data.skills[type].length; index++) {

                const div = document.createElement('div');
                const div_image = document.createElement('div');
                const link = document.createElement('a');
                const img = document.createElement('img');
                const span = document.createElement('span');

                div.classList.add("zoom");
                div.classList.add("revealSkills");
                div_image.classList.add("image");

                link.setAttribute("target", "_blank");
                link.setAttribute("href", data.skills[type][index].link);

                img.setAttribute("src", link_website + data.skills[type][index].image);
                img.setAttribute("alt", "Logo " + data.skills[type][index].name);
                img.setAttribute("title", data.skills[type][index].name);
                img.setAttribute("width", "75");
                img.setAttribute("height", "75");

                span.innerHTML = data.skills[type][index].name;

                link.appendChild(img);
                div_image.appendChild(link)
                div.appendChild(div_image);
                div.appendChild(span);
                if (type === "software") {
                    blockSoftwareDev.appendChild(div);
                } else if (type === "front") {
                    blockFrontEnd.appendChild(div);
                } else {
                    blockBackEnd.appendChild(div);
                }
            }
        }
    })
    .catch(error => console.error(error));

const languages = document.getElementsByClassName("zoom");

buttonFrontEnd.addEventListener("click", () => {
    if(!buttonFrontEnd.classList.contains("type_selected")) {

        buttonFrontEnd.classList.toggle("type_selected");
        buttonSoftwareDev.classList.remove("type_selected");
        buttonBackEnd.classList.remove("type_selected");
    
        toggleClass(blockBackEnd, 'hide');
        toggleClass(blockSoftwareDev, 'hide');
        toggleClass(blockFrontEnd, 'show');
    
        for (let index = 0; index < languages.length; index++) {
            languages[index].classList.remove("revealSkills-visible");
        }
    }
});


buttonSoftwareDev.addEventListener("click", () => {
    if(!buttonSoftwareDev.classList.contains("type_selected")) {

        buttonSoftwareDev.classList.toggle("type_selected");
        buttonFrontEnd.classList.remove("type_selected");
        buttonBackEnd.classList.remove("type_selected");

        toggleClass(blockBackEnd, 'hide');
        toggleClass(blockSoftwareDev, 'show');
        toggleClass(blockFrontEnd, 'hide');

        for (let index = 0; index < languages.length; index++) {
            languages[index].classList.remove("revealSkills-visible");
        }
    }
});

buttonBackEnd.addEventListener("click", () => {
    if(!buttonBackEnd.classList.contains("type_selected")) {

        buttonBackEnd.classList.toggle("type_selected");
        buttonSoftwareDev.classList.remove("type_selected");
        buttonFrontEnd.classList.remove("type_selected");

        toggleClass(blockBackEnd, 'show');
        toggleClass(blockSoftwareDev, 'hide');
        toggleClass(blockFrontEnd, 'hide');

        for (let index = 0; index < languages.length; index++) {
            languages[index].classList.remove("revealSkills-visible");
        }
    }
});

function toggleClass(element, className) {
    element.classList.add(className);
    element.classList.remove(className === 'show' ? 'hide' : 'show');
}