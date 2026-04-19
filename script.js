let outerbox=document.getElementById("outerbox");
let innerbox=document.getElementById("innerbox");
let writebox=document.getElementById("writebox");
let counter=document.getElementById("counter");

writebox.addEventListener("input",()=>{
    let count=writebox.value.length;
    if(count==250){
        outerbox.classList.add("text-red");
        innerbox.classList.add("border-red");
        writebox.classList.add("text-red");
    }
    else if(count<250){
        outerbox.classList.remove("text-red");
        innerbox.classList.remove("border-red");
        writebox.classList.remove("text-red");
    }
    counter.textContent=`${count} / 250`;
});