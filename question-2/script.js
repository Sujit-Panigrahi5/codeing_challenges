

const input=document.getElementById("input")
const second=document.getElementById("second")
const randomnumbe=document.getElementById("randomnumber")
//input

// let delysecond=3000;
// function delay(){
//     delysecond=input.value*1000;
//     console.log(delysecond);
//     console.log("sujt")
   
// }

delysecond=prompt("enter delysecond",3000)
let count=0;
 function seocntcount(){
    if(count*1000==delysecond){
        count=0;
    }
    count+=1;
    second.textContent=count
 }
 setInterval(seocntcount,1000)

 let randomnu=[0,1,2,3,4,5,6,7,8,9]


 function random(){
    let num="";
    for(let i=0;i<delysecond/1000;i++){
        let nu=createnu();
        num+=nu;
    }
    randomnumbe.textContent=num;
 }

 function createnu(){
    return Math.floor(Math.random()*randomnu.length);
 }
 
 
 setInterval(random,delysecond)
 