const container=document.querySelector("#container");
const userclick=document.querySelector("#user");


userclick.addEventListener("click",function(e){
    let choice=prompt("please enter a number between 1 and 100 to create a grid");

    if(choice >=1 && choice<=100)
        {

            for(let i=0;i<choice;i++){
                for( let j=0;j<choice;j++)
                    {
                        console.log(container);
                            const div=document.createElement("div");
                            div.classList.add("square");
                            div.addEventListener("mouseover", function(e){
                               e.target.style.background="red";
                            });
                            
                            div.style.width=`${804/choice}px`;
                            div.style.height=`${804/choice}px`;
                            
                            container.appendChild(div);
                        
                        }
                       
                        
            
                    }


        }
});


    
    
