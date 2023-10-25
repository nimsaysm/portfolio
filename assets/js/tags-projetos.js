const tagBtns = document.querySelectorAll('.tag');
const projects = document.querySelectorAll('.project');

tagBtns.forEach((button) => 
    button.addEventListener('click', function(e) {
        const selectedTecnology = e.target.textContent;

        tagBtns.forEach((btn) => {
            btn.classList.remove("tag-selected");
        });

        button.classList.add("tag-selected");

        if (selectedTecnology === "All") {
            projects.forEach((project) => {
                project.style.display = "flex";
            })
        } else {
            projects.forEach((project) => {
                const technologyProject = project.querySelectorAll('.project-technology');
                let projectHasThisTecnology = false;

                technologyProject.forEach((technology) => {
                    if (technology.textContent === selectedTecnology) {
                        projectHasThisTecnology = true;
                    }
                })
            if (projectHasThisTecnology == true) {
                project.style.display = "grid";
            } else {
                project.style.display = "none";
            }
            })
        }
    })
)