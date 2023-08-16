const box=document.getElementById("box");
const list=document.getElementById("list");
function add()
{
    if(box.value===' ')
    {
        alert("You must write something");
    }
    else
    {
       let li= document.createElement("li");
       li.innerHTML=box.value;
       list.appendChild(li);
       let span=document.createElement("span");
       span.innerHTML="&#x2716;";
       li.appendChild(span);
    }
    box.value=" ";
    savedat();
}
list.addEventListener('click',function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("ch")
    }
    else if(e.target.tagName==="SPAN")
    {
e.target.parentElement.remove();
savedat();
    }
},false);


function savedat()
{
    localStorage.setItem("data",list.innerHTML);
}
function showdata()
{
    list.innerHTML=localStorage.getItem("data");
}
showdata();