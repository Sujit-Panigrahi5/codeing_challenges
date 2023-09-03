// const inputstring= document.getElementById("text")
// const reverse=document.getElementById("reverse")

// // let reversestring =()=>{
// //     let string= inputstring.value;
// //     let arr=string.split('')
// //     let reversestring=arr.reverse().join("");
    
// //     console.log(reversestring)
// //     console.log(arr);
// //     reverse.textContent=reversestring;
// // }
// // setTimeout(reversestring(),2000)

//  setTimeout(()=>{
//     let string= inputstring.value;
//     let arr=string.split('')
//     // let reversestring=arr.reverse().join("");
    
//     // console.log(reversestring)
//     // console.log(arr);
//     reverse.textContent=arr.reverse().join("");
// },2000)

// let s=()=>{
//     console.log("sujit");

// }
// setTimeout(s,5000)

let vari=prompt("enter any value ")
function s(vari){
    
    let arr=vari.split('')
    // let h=document.createElement("h1")
    // h.textContent=arr.reverse().join("");
    document.querySelector("h1").textContent=arr.reverse().join("");                                                                                                                                                                                     
}


setTimeout(s,2000,vari)