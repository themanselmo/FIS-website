function btnEventListener(){
    const btn = document.getElementById("project-button");
    const projectList = document.getElementById("project-cont");
    let projectCounter = 4;
    
    
    

    function addProject(){
        const p = document.createElement("p");
        p.textContent = `Project ${projectCounter}`;
        projectList.appendChild(p);
        projectCounter++;
        console.log(`I was pressed ${projectCounter} time(s)`);
    }

    btn.addEventListener("click", addProject);
}

btnEventListener();