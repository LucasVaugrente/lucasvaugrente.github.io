const Section_projects = document.querySelector(".section-projects");
const dynamicStylesProject = document.getElementById("project-styles");
const mediaQueryProject = "@media screen and (max-width:950px) {";

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

fetch('https://lucasvaugrente.github.io/portfolio/data/projects.json')
    .then(response => response.json())
    .then(data => {
        for (let index = 0; index < data.projects.length; index++) {

            let article = document.createElement('article');
            let bloc_content = document.createElement('div');
            let bloc_title = document.createElement('div');

            bloc_content.classList.add('p-content');
            bloc_title.classList.add('title-project');

            if (index % 2 === 0) {
                article.classList.add('project_g');
                bloc_content.classList.add('p-content-gauche');
                bloc_title.classList.add('title-project-gauche');
            } else {
                article.classList.add('project_d');
                bloc_content.classList.add('p-content-droite');
                bloc_title.classList.add('title-project-droite');
            }

            article.classList.add('project');
            let numproject = index + 1;
            article.classList.add('project_' + numproject);

            /* ########################## Project date, type and title ########################## */
            let Text_Date = document.createElement('p');
            let Text_title = document.createElement('h2');
            Text_title.classList.add('p-title');

            Text_Date.innerHTML = data.projects[index].date + " - " + data.projects[index].type_project;
            Text_title.innerHTML = data.projects[index].title;

            bloc_title.appendChild(Text_Date);
            bloc_title.appendChild(Text_title);

            /* ########################## Project description ########################## */
            let Text_Desc = document.createElement('p');

            Text_Desc.classList.add('p-pitch');

            if (index % 2 === 0) {
                Text_Desc.classList.add('p-pitch-gauche');
            } else {
                Text_Desc.classList.add('p-pitch-droite');
            }

            Text_Desc.innerHTML = data.projects[index].description;

            /* ########################## Project skills ########################## */
            let bloc_lan_git = document.createElement('div');

            bloc_lan_git.classList.add('git-lan');

            if (index % 2 === 0) {
                bloc_lan_git.classList.add('git-lan-g');
            } else {
                bloc_lan_git.classList.add('git-lan-d');
            }

            for (let j = 0; j < data.projects[index].languages.length; j++) {

                let ahref = document.createElement('a');
                ahref.classList.add("langues-prog");
                ahref.innerHTML = data.projects[index].languages[j].name;
                ahref.setAttribute("target", "_blank");
                ahref.setAttribute("href", data.projects[index].languages[j].url);

                bloc_lan_git.appendChild(ahref);
            }

            /* ########################## Project github ########################## */
            let imgGit = document.createElement("img");
            let agit = document.createElement("a");
            agit.classList.add("lien-github_project");

            imgGit.classList.add("logo-github");
            imgGit.setAttribute("src", "img/icones/logo/GitHub_blanc.png");
            imgGit.setAttribute("alt", "Logo Github");
            imgGit.setAttribute("title", "Lien Github");
            imgGit.setAttribute("width", "30");
            imgGit.setAttribute("height", "30");

            agit.setAttribute("href", data.projects[index].link_git);
            agit.setAttribute("target", "_blank");
            agit.appendChild(imgGit)
            bloc_lan_git.appendChild(agit);

            /* ########################## Background Image Projects Responsive ########################## */
            let cssRules = mediaQueryProject;
            for (let index = 0; index < data.projects.length; index++) {
                const numproject = index + 1;
                const backgroundImage = data.projects[index].image;
    
                cssRules += `
                    .project_${numproject}:before {
                        background-image: url("${backgroundImage}");
                    }
                `;
            }
            cssRules += '}';
    
            dynamicStylesProject.innerHTML = cssRules;

            /* ########################## Video project ########################## */
            let lien_vid = document.createElement("a");
            lien_vid.setAttribute("href", data.projects[index].link_git);
            lien_vid.setAttribute("target", "_blank");

            lien_vid.classList.add(data.projects[index].class);

            let video = document.createElement("video");
            let source = document.createElement("source");
            source.src = data.projects[index].video;
            source.type = "video/mp4"
            video.appendChild(source);

            video.setAttribute("autoplay", "");
            video.setAttribute("loop", "");
            video.volume = 0;

            lien_vid.appendChild(video);

            bloc_content.appendChild(bloc_title);
            bloc_content.appendChild(Text_Desc);
            bloc_content.appendChild(bloc_lan_git);

            if (index % 2 === 0) {
                article.appendChild(bloc_content);
                article.appendChild(lien_vid);
            } else {
                article.appendChild(lien_vid);
                article.appendChild(bloc_content);
            }

            article.classList.add("revealBlock");
            Section_projects.appendChild(article);
        }

    })
    .catch(error => console.error(error));