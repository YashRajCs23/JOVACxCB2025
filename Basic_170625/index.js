function a()
{
    var s=79
    console.log(s)
    // console.log(y);
    // var y=1000
    
    b()
    function b()
    {
        var y=85
        console.log(y);
        c()  
        function c() 
        {
            var x=58
            console.log(s);
            console.log(y);
            console.log(x);
        }     

    }
    
}
a()
