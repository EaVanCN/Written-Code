function aa () {
    return new Promise(function(resolve,reject){
        setTimeout(  function(){ 
           resolve("wwwwwwww");
        }  ,1000);
    })
 }
 
aa().then(function(a){
    console.log(a);
});