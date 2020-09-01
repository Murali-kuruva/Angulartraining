
//Required HTML Elements
let numberTextBox=document.getElementById('number');
let numberList=document.getElementById('numberList');

//same as window.console=....
//we are replacing the builtin console with
//our HTML element. The new console has no log method
//and the new console doesn't refer console
//This is the problem of global variables in javascript
//a new variable can overwrite the old one.
//Solution: Avoid global elements
let console=document.getElementById('console');

//Required internal memory elements
let numbers=[];

//Event Handler
let addToList=function(){
    // + before a value converts it to number
    let number= +numberTextBox.value;

    numbers.push(number);
    addToDisplayList(number);
}


let addToDisplayList=(number)=>{
    
    numberList.innerHTML+=`<li>${number}</li>`;
}

function sum(){
    let result=0;
    for (let number of numbers){
        result+=number;
    }

    console.innerHTML+=`<p>sum is ${result}</p>`;

}

function reset(){
    console.log('resetting calculator');
    numbers=[] ; //now old numbers are gone
    clear();
}

function clear(){
    numberList.innerHTML='';
    console.innerHTML='';
}