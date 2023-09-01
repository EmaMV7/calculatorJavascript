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

clearEntry.addEventListener("click", ()=>{
    if(valueS == []){
        valueS = [];
    }else{
        if(block == 0){
            valueA = ['0']
            valueS = valueA
        }else{
            valueB = ['0'];
            valueS = [valueA.join('') + allSym[0] + valueB] 
        }
    }
    digits.textContent= valueS.join('');
})
clear.addEventListener("click", ()=>{
    valueS = [];
    valueA = [];
    valueB = [];
    allSym = [];
    contSym = 0;
    posiSym = [];
    withEqual = 0;
    withSymbol = 0;
    
    digits.textContent= ('0');
})
Cdelete.addEventListener("click", ()=>{    
    symbols.forEach(symbol => {
        if(symbol == valueS.slice(-1)){
            allSym = [];
            posiSym = [];
            contSym = 0;
            block = 0;
        }
    })

    if(contSym == 1){valueB.pop();
    }else{valueA.pop();}

    valueS.pop();

    if(valueS == 0){valueS = [0];}
    digits.textContent= valueS.join('');
})


// Action line 2
fraction.addEventListener("click", ()=>{

    if(block == 0){
        x = parseFloat(valueS.join(''));
        valueA = [1 / x];
        valueS = valueA.toString().split('');
        
        if(contSym == 1){
            valueS = valueS.concat(allSym[0]);
            posiSym[0] = valueS.length + 1;
        }
        digits.textContent = valueS.join('');
    }else{
        x = parseFloat(valueB.join(''));
        valueB = [1 / x];
        valueS = [valueA.join('') + allSym[0] + valueB];
        digits.textContent = valueS.join('');
    }
})
squared.addEventListener("click", ()=>{

    if(block == 0){
        x = parseFloat(valueS.join(''));
        valueA = [x * x];
        valueS = valueA.toString().split('');
        
        if(contSym == 1){
            valueS = valueS.concat(allSym[0]);
            posiSym[0] = valueS.length + 1;
        }
        digits.textContent = valueS.join('');
    }else{
        posiSym[0] = valueA.toString().length + 1;
        x = parseFloat(valueB.join(''));
        valueB = [x * x];
        valueS = [valueA.join('') + allSym[0] + valueB];
        digits.textContent = valueS.join('');
    }
})
squareRoot.addEventListener("click", ()=>{
    if(block == 0){
        x = parseFloat(valueS.join(''));
        valueA = [Math.sqrt(x)];
        valueS = valueA.toString().split('');
        
        if(contSym == 1){
            valueS = valueS.concat(allSym[0]);
            posiSym[0] = valueS.length + 1;
        }
        digits.textContent = valueS.join('');
    }else{
        x = parseFloat(valueB.join(''));
        valueB = [Math.sqrt(x)];
        valueS = [valueA.join('') + allSym[0] + valueB];
        digits.textContent = valueS.join('');
    }
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

cero.addEventListener("click", ()=>{
    number = 0
    pressKey(number); 
})
dot.addEventListener("click", ()=>{
    simbol = '.'
    pressKey(simbol); 
})
equal.addEventListener("click", ()=>{
    if(valueB.length != 0){
        withEqual = 1;
        operations();
    }
})

// valueScreen
block = 0;
valueS = [];
valueA = [];
valueB = [];
allSym = [];
contSym = 0;

// positionSymbols
posiSym = [];
withEqual = 0;
withSymbol = 0;
isPossible = 0;

// allSyms
symbols = ['+','-','x','/'];


function pressKey(key){
    
    // if S start at 0
    if(valueS[0] == 0){
        if(!valueS[0] == 0 && !valueS[1] == '.'){
            valueS.shift();
        }
    }
    
    // if B start at 0
    if(valueB[0] == '0'){
        if(!valueB[0] == 0 && !valueB[1] == '.'){
            valueB.shift();
            valueS = valueS.join('').split('');
            valueS.pop();
        }
    }

    valueS.push(key);

    valueS = valueS.join('').split('');

    // add value to A
    if(contSym == 0){
        valueA = valueS.join('');
    }

    // if a symbol is added
    symbols.forEach(symbol => {
        if(symbol == key){
            contSym ++;
            posiSym.push(valueS.length);
            allSym.push(key);

            valueA = valueS.slice(0, posiSym[0] - 1);

            // if there are 2 symbols the same or different
            if(contSym == 2 && valueS.length == posiSym[0] + 1){
                if(valueS[valueS.length - 2] != valueS.slice(-1)){
                    valueS = valueS.slice(0, -2).concat(valueS.slice(-1));
                    posiSym.pop();
                    allSym.shift();
                }else{
                    valueS.pop();
                    allSym.pop();
                    posiSym.pop();
                }
                contSym = 1;
            }

            // if there are 2 symbols
            if(contSym == 2){
                withSymbol = 1;
                operations();
            }
        }
    }) 
    
    // add value to B
    if(contSym == 1 && valueS.length >= posiSym[0] + 1){
        block = 1;
        valueB = valueS.slice(posiSym[0]);
    }

    // displays on screen
    digits.textContent = valueS.join('');
}

function operations(){

    symbolToOperation = {
        '+' : (a,b) => a + b,
        '-' : (a,b) => a - b,
        'x' : (a,b) => a * b,
        '/' : (a,b) => a / b,
    }

    operation = symbolToOperation[allSym[0]]

    if(operation){
        result = operation(parseFloat(valueA.join('')), parseFloat(valueB.join('')))
        valueS = result;   
    }

    valueS = valueS.toString().split('');
    valueA = valueS;
    valueB = [];
    
    // if the calculation was done by pressing equal
    if(withEqual == 1){        
        posiSym = [];
        allSym = [];
        contSym = 0;
        withEqual = 0;
        block = 0;
    }
    
    // if the calculation was made with 2 symbols
    if(withSymbol == 1){
        valueS = valueS.concat(allSym[allSym.length - 1])        
        posiSym = [valueA.length + 1]  
        allSym.shift();        
        contSym = 1;
        withSymbol = 1;
    }
    
    // displays on screen
    digits.textContent = valueS.join('');
}


/*
    Terminar de comentarlo:

    arreglar el tema de los puntos infinitos.

*/