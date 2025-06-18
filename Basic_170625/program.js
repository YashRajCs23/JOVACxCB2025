// CLOSURES
 function a(){
    var x =7;
    var y =6;
    function b(){
        var y =8;
        console.log(y);
    }
    y =10;
    b();

}
a();