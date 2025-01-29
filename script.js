// let btn_add = document.querySelector("#btn_add");
// let btn_remove = document.querySelector("#btn_remove");
// let btn_completed = document.querySelector("#btn_completed");
let input_value = document.querySelector("#main-input");
let tasks = document.querySelector(".tasks")
let task = document.querySelector(".task")

btn_add.addEventListener("click",()=>{
    let add_value = input_value.value;
    let value = `
    <div class="task row ">
        <p>${add_value}</p>
        <div class="btn">
        <button class="btn btn-warning btn-sm btn_remove">REMOVE</button>
        <button class="btn btn-success btn-sm btn_completed">COMPLETED</button>
    </div>
    `
    if(add_value){
    tasks.innerHTML += value
    input_value.value = ""
    }
})

tasks.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn_remove")){
        e.target.parentElement.parentElement.remove()
    }
    if(e.target.classList.contains("btn_completed")){
        e.target.parentElement.parentElement.querySelector("p").style.textDecoration = "line-through";
        e.target.parentElement.parentElement.querySelector("p").style.backgroundColor = "#28a745";
        e.target.parentElement.parentElement.querySelector("p").style.borderRadius = "5px";
    }

})
