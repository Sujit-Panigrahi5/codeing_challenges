
const url=document.getElementById("url")

let parrten=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi

function match(){
    let string=url.value
    let value=parrten.test(string)
    if(value){
        alert("its match")
    } else{
            
        alert("its not match")
        
    }
}