

function max(a,b){
    if(a>b) return a;
    else return b;
}

let init= localStorage.getItem('txt') || "";

function ini(){
    const main= document.getElementsByClassName("main")[0];
    main.innerHTML += init;
}

ini();

function fere(){
    const textarea = document.getElementById("resizableTextArea");
    let height = textarea.scrollHeight;
    height = max(height,52);
    console.log(height+"px");
    textarea.style.height = height+"px";
}

function jh(){

    const val = document.getElementById("resizableTextArea").value;
    const main= document.getElementsByClassName("main")[0];

    const ti = new Date();
    let result = ti.toString()
    const t= result.slice(0,25);
    
    main.innerHTML += `<div class="added"><span class="time">${t}</span> : ${val}</div>`; 
    document.getElementById("resizableTextArea").value="";
    
    const textarea = document.getElementById("resizableTextArea");
    let height = textarea.scrollHeight;
    height = max(height,52);
    console.log(height+"px");
    textarea.style.height = height+"px";

    localStorage.setItem('txt',main.innerHTML);
}