const Section_experiences = document.querySelector(".section-experiences");
const dynamicStylesExperience = document.getElementById("experience-styles");
const mediaQueryExperience = "@media screen and (max-width:950px) {";

fetch('https://lucasvaugrente.github.io/portfolio/data/experiences.json')
    .then(response => response.json())
    .then(data => {
        for (let index = 0; index < data.experiences.length; index++) {

            let article = document.createElement('article');
            let bloc_content = document.createElement('div');
            let bloc_title = document.createElement('div');

            article.classList.add('experience');
            bloc_content.classList.add('p-content');
            bloc_title.classList.add('title-experience');

            if (index % 2 === 0) {
                article.classList.add('experience_g');
                bloc_content.classList.add('p-content-gauche');
                bloc_title.classList.add('title-experience-gauche');
            } else {
                article.classList.add('experience_d');
                bloc_content.classList.add('p-content-droite');
                bloc_title.classList.add('title-experience-droite');
            }

            let numExperience = index + 1;
            article.classList.add('experience_' + numExperience);

            /* ########################## Date, Type et title experience ########################## */
            let Text_Date = document.createElement('p');
            let Text_title = document.createElement('h2');
            Text_title.classList.add('p-title');

            Text_Date.innerHTML = data.experiences[index].date + " - " + data.experiences[index].experience_type;
            Text_title.innerHTML = data.experiences[index].title;

            bloc_title.appendChild(Text_Date);
            bloc_title.appendChild(Text_title);

            /* ########################## Description experience ########################## */
            let Text_Desc = document.createElement('p');

            Text_Desc.classList.add('p-pitch');

            if (index % 2 === 0) {
                Text_Desc.classList.add('p-pitch-gauche');
            } else {
                Text_Desc.classList.add('p-pitch-droite');
            }

            Text_Desc.innerHTML = data.experiences[index].description;

            /* ########################## Languages Programmation experience ########################## */
            let bloc_lan_git = document.createElement('div');

            bloc_lan_git.classList.add('git-lan');

            if (index % 2 === 0) {
                bloc_lan_git.classList.add('git-lan-g');
            } else {
                bloc_lan_git.classList.add('git-lan-d');
            }

            for (let j = 0; j < data.experiences[index].languages.length; j++) {

                let ahref = document.createElement('a');
                ahref.classList.add("langues-prog");
                ahref.innerHTML = data.experiences[index].languages[j].name;
                ahref.setAttribute("target", "_blank");
                ahref.setAttribute("href", data.experiences[index].languages[j].url);

                bloc_lan_git.appendChild(ahref);
            }

            /* ########################## Image experience ########################## */
            let img = document.createElement("img");
            img.setAttribute("src", data.experiences[index].image);
            img.setAttribute("alt", "Image Experience");

            /* ########################## Background Image Projects Responsive ########################## */
            let cssRules = mediaQueryExperience;
            for (let index = 0; index < data.experiences.length; index++) {
                const numproject = index + 1;
                const backgroundImage = data.experiences[index].image;
    
                cssRules += `
                    .experience_${numproject}:before {
                        background-image: url("${backgroundImage}");
                    }
                `;
            }
            cssRules += '}';
    
            dynamicStylesExperience.innerHTML = cssRules;

            bloc_content.appendChild(bloc_title);
            bloc_content.appendChild(Text_Desc);
            bloc_content.appendChild(bloc_lan_git);

            if (index % 2 === 0) {
                article.appendChild(bloc_content);
                article.appendChild(img);
            } else {
                article.appendChild(img);
                article.appendChild(bloc_content);
            }

            article.classList.add("revealBlock");
            Section_experiences.appendChild(article);

        }

    })
    .catch(error => console.error(error));
