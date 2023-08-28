const buttons = document.createRange().createContextualFragment(`
<button class="module">%</button><button class="clearEntry">CE</button><button class="clear">C</button><button class="delete"><=</button>
<button class="fraction">1/x</button><button class="squared">x2</button><button class="squareRoot">√x"</button><button class="division">%</button>
<button class="number seven">7</button><button class="number eight">8</button><button class="number nine">9</button><button class="multiplacation">x</button>
<button class="number four">4</button><button class="number five">5</button><button class="number six">6</button><button class="less">-</button>
<button class="number one">1</button><button class="number two">2</button><button class="number three">3</button><button class="plus">+</button>
<button class="moreOrLess">+/-</button><button class="number cero">0</button><button class="dot">.</button><button class="equal">=</button>
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
    digits.textContent= ('%')    
})
clearEntry.addEventListener("click", ()=>{
    digits.textContent= ('CE')    
})
clear.addEventListener("click", ()=>{
    digits.textContent= ('0');
    total = [];   
})
Cdelete.addEventListener("click", ()=>{
    digits.textContent= ('<=')    
})


// Action line 2
fraction.addEventListener("click", ()=>{
    digits.textContent= ('1/x')    
})
squared.addEventListener("click", ()=>{
    digits.textContent= ('x2')    
})
squareRoot.addEventListener("click", ()=>{
    digits.textContent= ('√x')    
})
division.addEventListener("click", ()=>{
    digits.textContent= ('/')    
})

// Action line 3
seven.addEventListener("click", ()=>{
    number = 7
    digits.textContent= ('7')
})
eight.addEventListener("click", ()=>{
    digits.textContent= ('8')    
})
nine.addEventListener("click", ()=>{
    digits.textContent= ('9')    
})
multiplacation.addEventListener("click", ()=>{
    digits.textContent= ('x')    
})

// Action line 4
four.addEventListener("click", ()=>{
    digits.textContent= ('4')    
})
five.addEventListener("click", ()=>{
    digits.textContent= ('5')    
})
six.addEventListener("click", ()=>{
    digits.textContent= ('6')    
})
less.addEventListener("click", ()=>{
    digits.textContent= ('-')    
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
    digits.textContent= ('3')    
})
plus.addEventListener("click", ()=>{
    simbol = '+'
    pressKey(simbol); 
})

// Action line 6
moreOrLess.addEventListener("click", ()=>{
    digits.textContent= ('+/-')    
})
cero.addEventListener("click", ()=>{
    digits.textContent= ('0')    
})
dot.addEventListener("click", ()=>{
    digits.textContent= ('.')    
})
equal.addEventListener("click", ()=>{ 
    operations();   
})

 
total = []
function pressKey(simbol){
    total.push(simbol)
    console.log(total)
    
    digits.textContent = total.join('')    
}

function operations(){

    a = total.join('')
    
    for(i of a){
        if(i == '+'){
            console.log('es suma');
            total.split('+')
            console.log(total)
        }
    }
    // if()
    // for
    // if 
    // result =

}


