let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul"); // Changed "ul" to "li"
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        
        let trashIcon = newEle.querySelector("i");
        trashIcon.addEventListener("click", function() {
            removeTask(newEle);
        });
    }
}

function removeTask(taskElement) {
    taskElement.remove();
}
