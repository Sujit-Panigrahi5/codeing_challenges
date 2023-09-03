
const itemlist=document.getElementById("itemlist")
const book=document.getElementById("list")
const author=document.getElementById("author")
const year=document.getElementById("year")
const below2010=document.getElementById("below2010")
const above2010=document.getElementById("above2010")
const allelements=document.getElementById("allelements")

let booklist=[
    
]
let index=0;

function addbook(){
    console.log(book.value)
    console.log(author.value)
    console.log(year.value)

    booklist[index]={
       name:book.value,
       author:author.value,
       year:year.value,
    }
    index++;
    addlistitem(booklist)
}


function addlistitem(booklist){
    itemlist.innerHTML=""
    booklist.forEach((item,index)=>{
        let div=document.createElement("div")
        div.className="addlistitem"
        let span1=document.createElement("span")
        span1.textContent=`Book Name : ${item.name}`;
        let span2=document.createElement("span")
        span2.textContent=`Author Name : ${item.author} `
        let span3=document.createElement("span")
        span3.textContent=`year Name : ${item.year} `
        let span4=document.createElement("span")
        span4.textContent=`book ${index+1} information:`
        div.append(span4)
        div.append(span1)
        div.append(span2)
        div.append(span3)
        itemlist.append(div)
    })
    below2010.style.display="block"
    above2010.style.display="block"
    allelements.style.display="block"
    
}
// let above=[]
// let below =booklist.filter((item)=>{
//     if(item.year < 2010){
//         console.log(item.year);
//         return item;
//     } else{
//         above.push(item)
//     }
// })

function below(){
    let below10=booklist.filter((item)=>{
        if(item.year<2010){
            
            return item.year;
        }
    })
    addlistitem(below10)
}
function above(){
    let above10=booklist.filter((item)=>{
        if(item.year>=2010){
            return item.year;
        }
    })
    addlistitem(above10)
}
function allelement(){
    addlistitem(booklist)
}
// console.log(below())
// console.log(above)
// below2010.addEventListener("click",addlistitem(below))
// above2010.addEventListener("click",addlistitem(above))