function btnEventListener(){
    const btn = document.getElementById("project-button");
    
    let projectCounter = 4;
    const p = document.createElement("p");
    p.textContent = `Project ${projectCounter}`;
    
    const projectList = document.getElementById("project-cont");
    
    function addProject(){
        projectList.append(p);
        projectCounter++;
    }

    btn.addEventListener('click', addProject);
}

btnEventListener();