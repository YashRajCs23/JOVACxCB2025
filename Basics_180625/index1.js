console.log("start to cook maggi");

 function gas(callback){
    console.log("on gas");
    setTimeout(callback,1000);
}

function boil(callback){
    console.log("take boil");
    setTimeout(callback,2000);
}

function water(callback){
    console.log("add water");
    setTimeout(callback,3000);
}

function maggi(callback){
    console.log("Add maggi");
    setTimeout(callback,4000);
}

function masala(callback){
    console.log("Add masala");
    setTimeout(callback,5000);
}

function serve(){
    console.log("serve on plate");
}


gas(()=>{
    boil(()=>{
        water(()=>{
            maggi(()=>{
                masala(()=>{
                    serve();
                })
            })
        })
    })
})

