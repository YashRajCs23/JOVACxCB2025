//  hof with three function 
//  squredata
// pluse 1
// doubleData

 const squredata = function (data){
    return data*data;
}
const pluse = function (data) {
    return data=data+1;
    
}
const doubleData = function (data) {
    return data=data*2;
    
}


const calculate = function (data, logic){
    let output = [];
    for (let i =0;i<data.length;i++){
        output.push(logic(data[i]));
    }
    return output;

}


const data1 = [8,4,2,6,1]

console.log(calculate(data1,squredata));
console.log(calculate(data1,pluse));
console.log(calculate(data1,doubleData));
