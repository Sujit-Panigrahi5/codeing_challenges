



let storeitem=[
    {
        name:"iphone14",
        usd:10000,
        INR:0
        
    },
    {
        name:"sumsungs23ultra",
        usd:1199,
        INR:0,
    }
]

let map1=storeitem.map((item,index)=>{
    
    item.INR=item.usd*80;
})
storeitem.forEach((item)=>{
    console.log( "name of item : "+item.name);
    console.log("price in USD : "+item.usd,"USD");
    console.log("price in INR : "+item.INR,"INR")
})


