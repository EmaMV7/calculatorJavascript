const buttons = document.createRange().createContextualFragment(`
<button class="module">%</button>  <button class="clearEntry">CE</button>  <button class="clear">C</button>  <button class="delete"><=</button>

<button class="fraction">1/x</button>  <button class="squared">x2</button>  <button class="squareRoot">√x</button>  <button class="division">/</button>

<button class="number seven">7</button>  <button class="number eight">8</button>  <button class="number nine">9</button>  <button class="multiplacation">x</button>

<button class="number four">4</button>  <button class="number five">5</button>  <button class="number six">6</button>  <button class="less">-</button>

<button class="number one">1</button>  <button class="number two">2</button>  <button class="number three">3</button>  <button class="plus">+</button>

<button class="moreOrLess">+/-</button>  <button class="number cero">0</button>  <button class="dot">.</button>  <button class="equal">=</button>
`);

const bodyC = document.querySelector(".buttons");

bodyC.append(buttons);


const digits = document.querySelector(".digits");

// line 1
const module = document.querySelector(".module");
const clearEntry = document.querySelector(".clearEntry");
const clear = document.querySelector(".clear");
const Cdelete = document.querySelector(".delete");

// line 2
const fraction = document.querySelector(".fraction");
const squared = document.querySelector(".squared");
const squareRoot = document.querySelector(".squareRoot");
const division = document.querySelector(".division");

// line 3
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multiplacation = document.querySelector(".multiplacation");

// line 4
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const less = document.querySelector(".less");

// line 5
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const plus = document.querySelector(".plus");

// line 6
const moreOrLess = document.querySelector(".moreOrLess");
const cero = document.querySelector(".cero");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");


// Action line 1
module.addEventListener("click", ()=>{ 
    simbol = '%';
    pressKey(simbol);
})
clearEntry.addEventListener("click", ()=>{
    digits.textContent= ('0');
    totalA = [];
})
clear.addEventListener("click", ()=>{
    digits.textContent= ('0');
    totalA = [];
})
Cdelete.addEventListener("click", ()=>{
    totalA.pop()
    if(totalA == 0){
        totalA = [0]
    }
    digits.textContent= totalA.join('')
})


// Action line 2
fraction.addEventListener("click", ()=>{
    x = totalA.join('')
    result = 1 / x
    digits.textContent = result;
})
squared.addEventListener("click", ()=>{
    x = totalA.join('');
    result = x * x;
    digits.textContent = result;
})
squareRoot.addEventListener("click", ()=>{
    x = totalA.join('');
    result = Math.sqrt(parseFloat(x));
    digits.textContent = result;
})
division.addEventListener("click", ()=>{
    simbol = '/';
    pressKey(simbol);
})

// Action line 3
seven.addEventListener("click", ()=>{
    number = 7;
    pressKey(number);
})
eight.addEventListener("click", ()=>{
    number = 8;
    pressKey(number);
})
nine.addEventListener("click", ()=>{
    number = 9;
    pressKey(number);
})
multiplacation.addEventListener("click", ()=>{
    simbol = 'x';
    pressKey(simbol);  
})

// Action line 4
four.addEventListener("click", ()=>{
    number = 4
    pressKey(number); 
})
five.addEventListener("click", ()=>{
    number = 5
    pressKey(number); 
})
six.addEventListener("click", ()=>{
    number = 6
    pressKey(number); 
})
less.addEventListener("click", ()=>{
    simbol = '-';
    pressKey(simbol);  
})

// Action line 5
one.addEventListener("click", ()=>{
    number = 1;
    pressKey(number);
})
two.addEventListener("click", ()=>{
    number = 2;
    pressKey(number);
})
three.addEventListener("click", ()=>{
    number = 3;
    pressKey(number);  
})
plus.addEventListener("click", ()=>{
    simbol = '+'
    pressKey(simbol); 
})

// Action line 6
moreOrLess.addEventListener("click", ()=>{
    
    if(totalA[0] == '-'){
        totalA.shift();
    }else{
        totalA.unshift('-')
    }
    digits.textContent= totalA.join('')
})
cero.addEventListener("click", ()=>{
    number = 0
    pressKey(number); 
})
dot.addEventListener("click", ()=>{
    simbol = '.'
    pressKey(simbol); 
})
equal.addEventListener("click", ()=>{ 
    operations();   
})

 
totalA = []

// next step - i need to separate in diferents variables (numberB, simbol, numberB)
// totalB = []
// s = ''
function pressKey(simbol){

    totalA.push(simbol)
    digits.textContent = totalA.join('')
}
    

function operations(){

    a = totalA.join('')
    console.log(a)
    
    for(i of a){
        // Sum
        if(i == '+'){
            z = a.split('+');
            
            numberA = parseFloat(z[0])
            numberB = parseFloat(z[1])
            
            result = numberA + numberB

            digits.textContent = result
            totalA = []
            totalA.push(result)
            break;
        }

        // Subtraction
        if(i == '-'){
            z = a.split('-');
            
            numberA = parseFloat(z[0])
            numberB = parseFloat(z[1])
            
            result = numberA - numberB

            digits.textContent = result
            totalA = []
            totalA.push(result)
            break;
        }

        // Multiplication
        if(i == 'x'){
            z = a.split('x');
            
            numberA = parseFloat(z[0])
            numberB = parseFloat(z[1])
            
            result = numberA * numberB

            digits.textContent = result
            totalA = []
            totalA.push(result)
            break;
        }

        // Division
        if(i == '/'){
            z = a.split('/');
            
            numberA = parseFloat(z[0])
            numberB = parseFloat(z[1])
            
            result = numberA / numberB

            digits.textContent = result
            totalA = []
            totalA.push(result)
            break;
        }

    }
}


