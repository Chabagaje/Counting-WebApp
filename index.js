const increase = document.getElementById('para1');
let count = 0


function clicks(){
   
    count = count + 1;
    increase.innerText = count;
    
    
}



function save(){
    const saveEl = document.getElementById("save")
    let newCount = " " + count + " - "
    saveEl.textContent += newCount ;
    increase.innerText = 0;
    count = 0; 

}




