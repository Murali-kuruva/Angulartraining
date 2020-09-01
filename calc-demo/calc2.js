
//Required HTML Elements
let numberTextBox=document.getElementById('number');
let numberList=document.getElementById('numberList');


//Solution: Avoid name conflict
//not easy to know conflicts
let displayConsole=document.getElementById('console');

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
    displayConsole.innerHTML+=`<p>sum is ${result}</p>`;
}

function average(){
    let result=sum()/numbers.length;
    displayConsole.innerHTML+=`<p>average is ${result}</p>`;
}

function reset(){
    console.log('resetting calculator');
    numbers=[] ; //now old numbers are gone
    clearDisplay();
}

function clearDisplay(){
    numberList.innerHTML='';
    displayConsole.innerHTML='';
}