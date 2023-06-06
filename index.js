let addInput=document.getElementById("inp");
let Listbox=document.getElementById("list-itm");

function clicked()
{
    if(addInput.value == "")
    {
        alert("please first add some task");
    }
    else{
         let li=document.createElement("li");
         li.innerHTML=inp.value;
         Listbox.appendChild(li);
         let cross=document.createElement("cross");
         cross.innerHTML="\u00d7"
         li.appendChild(cross);
    }
    addInput.value="";
}

Listbox.addEventListener("click",function(e){
    if(e.target.tagName== "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=="CROSS")
    {
        e.target.parentElement.remove();
    }
},false);
