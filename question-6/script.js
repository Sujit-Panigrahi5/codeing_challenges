



let regex1=/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm
let st="https://www.linkedin.com/in/sujit-panigrahi-/"
let bol=regex1.test(st)
if(bol){
    console.log("it is a valid linkedin profile url")
} else{
    console.log("it is not a valid linkedin profile url")
}
