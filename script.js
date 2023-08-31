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
    valueB = [0];
    
    digits.textContent= valueS.join('');
})
clear.addEventListener("click", ()=>{
    valueS = [];
    valueA = [];
    valueB = [];
    allSim = [];
    contSim = 0;
    posiSym = [];
    withEqual = 0;
    withSimbol = 0;
    
    digits.textContent= ('0');
})
Cdelete.addEventListener("click", ()=>{
    valueS.pop()
    if(valueS == 0){
        valueS = [0]
    }
    console.log(valueS)
    digits.textContent= valueS.join('')
})


// Action line 2
fraction.addEventListener("click", ()=>{
    x = valueS.join('')
    result = 1 / x
    digits.textContent = result;
})
squared.addEventListener("click", ()=>{
    x = valueS.join('');
    result = x * x;
    digits.textContent = result;
})
squareRoot.addEventListener("click", ()=>{
    x = valueS.join('');
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
    
    if(valueS[0] == '-'){
        valueS.shift();
    }else{
        valueS.unshift('-')
    }
    digits.textContent= valueS.join('')
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
    withEqual = 1;
    valueB.push(valueS.slice(posiSym[0]).join(''));
    posiSym = [];
    operations();
})

// valueScreen
valueS = [];
valueA = [];
valueB = [];
allSim = [];
contSim = 0;

// positionSimbols
posiSym = [];
withEqual = 0;
withSimbol = 0;
isPossible = 0;

function pressKey(simbol){

    valueS.push(simbol);
    
    console.log('PSG: ', posiSym);
    simbols = ['%', 'x2', '√x','x','/','-','+'];
    simbols.forEach( x => {
        if(simbol == x){
            contSim ++;
            posiSym.push(valueS.length);
            
            console.log('PK valueS: ',valueS)
            // Change symbol
            console.log('PS0: ', posiSym);
            console.log('PS0: ', posiSym[0]);
            console.log('PS1: ', posiSym[1]);
            if(parseInt(posiSym[0]) + 1 == parseInt(posiSym[1])){
                console.log('entro WTF');
                if(valueS[valueS.length - 2] != valueS.slice(-1)){
                    valueS = valueS.slice(0, -2).concat(valueS.slice(-1));
                    posiSym.pop();
                    allSim.shift();
                }else{
                    valueS.pop();
                    allSim.pop();
                    posiSym.pop();
                }
                contSim = 1;
            }
            
            // Operation with other simbol
            if(contSim == 2){
                console.log('yendo a operaciones');
                withSimbol = 1;
                console.log('posiSym[0]: ',posiSym[0]);
                valueB.push(valueS.slice(posiSym[0]).slice(0, -1).join(''));
                console.log('PK valueB: ',valueB);
                operations();                
            }
            
            valueA.push(valueS.join('').slice(0, -1));
            allSim.push(simbol);
        }
    })

    
    console.log('PK valueS: ',valueS)
    digits.textContent = valueS.join('');


    console.log('--- terminooooo ---');
}
    

function operations(){

    a = valueS.join('')

    console.log('allSimG: ', allSim)
    console.log('allSim[0]: ', allSim[0])
    const symbolToOperation = {
        '+' : (a,b) => a + b,
        '-' : (a,b) => a - b,
        '/' : (a,b) => a / b,
        'x' : (a,b) => a * b,
    };
    
    const operation = symbolToOperation[allSim[0]]
    if(operation){
        console.log('operation: ',operation)
        console.log('lo encontro');
        console.log('VS: ',valueS);
        console.log('VA: ',valueA);
        console.log('VA0: ',valueA[0]);
        console.log('VB: ',valueB);
        result = operation(parseFloat(valueA[0]), parseFloat(valueB));
        digits.textContent = result
    }

    if(withEqual == 1){
        valueS = [result];
        withEqual = 0;
        contSim = 0;
    }

    if(withSimbol == 1){
        valueS = [result, valueS.slice(-1).join('')];
        withSimbol = 0;
        contSim = 1;
        posiSym = [2];
    }

    allSim.shift();

    valueA = [result];
    valueB = [];
}


