var buttons = document.getElementById("1");
buttons.addEventListener("click", getId); 

var numbers = [];
var numbers1 = [];

    function stop() {
        console.log("Nel");
    }

    function getId() {
    var id = this.id;
    if (numbers1[numbers1.length - 1] !== "-" && numbers1[numbers1.length - 1] !== "+" && numbers1[numbers1.length - 1] !== "/" && numbers1[numbers1.length - 1] !== "*" || id === "1" || id === "2" || id === "3" || id === "4" || id === "5" || id === "6" || id === "7" || id === "8" || id === "9" || id === "0") {
      numbers.push(id);
      numbers1 = numbers.slice(0, numbers.length);
       for (var i = 0; i <= numbers1.length - 1; i++) {
      console.log(numbers1[i]);
      var result = document.getElementById("in");
      result.value = numbers1.join("");
       }
     } else {
         stop();
     }
    }
     
        
    function eraseF() {
        numbers.splice(numbers.length - 1);
        for (var i = 0; i <= numbers.length ; i++) {
        document.getElementById("in").value = numbers.join("");
        }
    }

    function equalF(err) {
            for (var i = 0; i <= numbers.length; i++) {
                switch(numbers[i]) {
                    case "0" :
                      numbers[i] = Number(numbers[i]);
                        console.log(typeof numbers[i]);
                    break;
                    case "1" :
                        numbers[i] = Number(numbers[i]);
                        console.log(typeof numbers[i]);
                    break;
                    case "2" :
                        numbers[i] = Number(numbers[i]);
                        console.log(typeof numbers[i]);
                    break;
                    case "3" :
                        numbers[i] = Number(numbers[i]);
                        console.log(typeof numbers[i]);
                    break;
                    case "4" :
                        numbers[i] = Number(numbers[i]);
                        console.log(typeof numbers[i]);
                    break;
                     case "5" :
                        numbers[i] = Number(numbers[i]);
                        console.log(typeof numbers[i]);
                    break;
                    case "6" :
                        numbers[i] = Number(numbers[i]);
                        console.log(typeof numbers[i]);
                    break;
                    case "7" :
                        numbers[i] = Number(numbers[i]);
                        console.log(typeof numbers[i]);
                    break;
                    case "8" :
                        numbers[i] = Number(numbers[i]);
                        console.log(typeof numbers[i]);
                    break;
                    case "9" :
                        numbers[i] = Number(numbers[i]);
                        console.log(typeof numbers[i]);
                    break;
                    default :
                        console.log("Nothing happended");
                    break;
                } 
            }
                 try {
               eval(numbers.join("")); 
             } catch (e) {
                if (e instanceof SyntaxError) {
                   document.getElementById("in").value = "Error";
                numbers1 = [];
                numbers = [];
            }
             } 
             if (eval(numbers.join("")) === undefined) {
                 console.log("Error");
             } else {
                   document.getElementById("in").value = eval(numbers.join("")); 
                    numbers1 = [];
                   numbers = [];
             }
    }

     function equalZ() {
          numbers1 = [];
          numbers = [];
         document.getElementById("in").value = " "; 
     }

var buttons2 = document.getElementById("2");
buttons2.addEventListener("click", getId);

var buttons3 = document.getElementById("3");
buttons3.addEventListener("click", getId);

var buttons4 = document.getElementById("4");
buttons4.addEventListener("click", getId);

var buttons5 = document.getElementById("5");
buttons5.addEventListener("click", getId);

var buttons6 = document.getElementById("6");
buttons6.addEventListener("click", getId);

var buttons7 = document.getElementById("7");
buttons7.addEventListener("click", getId);

var buttons8 = document.getElementById("8");
buttons8.addEventListener("click", getId);

var buttons9 = document.getElementById("9");
buttons9.addEventListener("click", getId);

var buttons0 = document.getElementById("0");
buttons0.addEventListener("click", getId);

var buttonMas = document.getElementById("+");
buttonMas.addEventListener("click", getId);

var buttonMas = document.getElementById("*");
buttonMas.addEventListener("click", getId);

var buttonMas = document.getElementById("-");
buttonMas.addEventListener("click", getId);

var buttonMas = document.getElementById("/");
buttonMas.addEventListener("click", getId);

var punto = document.getElementById(".");
punto.addEventListener("click", getId);


var buttonBack = document.getElementById("back");
buttonBack.addEventListener("click", eraseF);

var buttonEqual =  document.getElementById("submit");
buttonEqual.addEventListener("click", equalF);

var buttonZero =  document.getElementById("zero");
buttonZero.addEventListener("click", equalZ);
