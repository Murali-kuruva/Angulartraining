

//Calculator Service --> business objects
class Calculator{
    constructor(){
        this.numbers=[];
    }

    add(number){
        this.numbers.push(+number);
        //console.log(this.numbers);
    }

    sum(){
        let result=0;
        for(let number of this.numbers){
            result+=number;
        }
       // console.log('sum calculated is ', result);
        return result;
    }

    average(){
        let result=this.sum()/this.numbers.length;
        console.log('average is ',result);
        return result;
    }

    clear(){
        this.numbers=[];
    }
}


//General dom library --> common reusable library
class DomElement{
    constructor(id, wrapperTag='p'){
        this.element=document.getElementById(id);
        //console.log(id, this.element);
        this.wrapperTag=wrapperTag;
        this.start=`<${wrapperTag}>`;
        this.end=`</${wrapperTag}>`;
    }

    add(child){
        this.element.innerHTML+=`${this.start}${child}${this.end}`;
    }

    clear(){
        this.element.innerHTML='';
    }
}


//Application layer to handle the UI

class Application{
    constructor(){
        this.numberTextBox=document.getElementById('number');
        this.numberList=new DomElement('numberList','li');
        this.console=new DomElement('console');
        this.calculator=new Calculator();
    }

    onAddToList(){
        let value=  this.numberTextBox.value;
        let number=+value;
        if(isNaN(number))
            this.console.add(`Invalid input: ${value}`);
        else{
            this.calculator.add(number);
            this.numberList.add(number);
        }
    }

    onClear(){
        this.numberList.clear();
        this.console.clear();

    }

    onSum(){
        let result=this.calculator.sum();
        this.console.add(`sum is ${result}`);
    }
    
    onAverage(){
        let result=this.calculator.average();
        this.console.add(`average is ${result}`);
    }

    onReset(){
        this.onClear();
        this.calculator.clear();
    }
}


let app=new Application();