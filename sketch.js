const container=document.querySelector("#container");

for(let i=0;i<20;i++){
    for( let j=0;j<20;j++)
        {
                const div=document.createElement("div");
                div.classList.add("square");
                div.addEventListener("mouseover", function(e){
                   e.target.style.background="red";
                });
                container.appendChild(div);
            
            }
           
            

        }
    
    
