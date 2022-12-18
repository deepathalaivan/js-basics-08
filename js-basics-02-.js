//function is a block of code, that does someting and return output
//function functionName(){
    //some logic
    //}
    //console.log(functionName())


    for (var i=0;i<10;i++){
        if(i==3)break;
        console.log('Equals :'+i)
    }

    let aa=1
    while (aa<10){
        console.log('In while:'+aa)
        aa++
    }

let x=10+3

function addNumbers(a,b){
    return a+b
}
console.log(addNumbers(10,20))

function multipleNumbers(x,y){
    return x*y
}
console.log(multipleNumbers(20,30))

function findBiggest(a,b){
    if(a>b) return a
    else return b
}
console.log(findBiggest(100,200))

function areaOfTriangle(b,h){
    return 1/2*b*h
}
console.log(areaOfTriangle(10,20))

function isOdd(a){
    console.log('Is Odd' +a%2==1)

}
console.log

//Pushing in array
const countries =['Inida','uk','usa']
console.log(countries)
countries.push('aaa')
console.log(countries)
countries.unshift('canada')
console.log(countries)

//length of array

function findLenthOfArray(aaa){
    return aaa.length

}
const aaa=['fsgfsf','dffdf']
console.log(findLengthOfArray(aaa))
