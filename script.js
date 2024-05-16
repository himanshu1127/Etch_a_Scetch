

let gridContainer=document.querySelector("#container");

function createGrid(size){
   
    gridContainer.innerHTML=null
    
    for(i=1;i<=size;i++){
        const row=document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);

        for(j=1;j<=size;j++){
            const col=document.createElement("div");
            col.addEventListener("mouseover",setColor)
            col.classList.add("col");
            row.appendChild(col);
        }
        
       
        
    }
    
    
   
}
function setColor(element){
  if(!element.target.style.backgroundColor){
    element.target.style.backgroundColor="black";
    element.target.style.opacity=0.1
  }
  else{
    if (parseFloat(element.target.style.opacity) < 1) {
        element.target.style.opacity = (parseFloat(element.target.style.opacity) + 0.1);
    }
  }
}

let updateGridBtn=document.querySelector("#updateGrid");

updateGridBtn.addEventListener("click",()=>{
        
    let gridSize=parseInt(document.querySelector("#gridSize").value) ;
    if(gridSize > 100){
        alert("CHOOSE B/W 1-100")
        PreventDefault()
       
    }
    createGrid(gridSize)
   
})