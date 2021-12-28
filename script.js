const valueA = document.querySelector(".valueA");
const valueB = document.querySelector(".valueB");
const valueC = document.querySelector(".valueC");
const reset = document.querySelector(".reset");
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".value");
// const formGroup = document.querySelector(".form-group");

if(valueA.value === "" || valueB.value === "" || valueC.value === ""){
    valueA.value = 0;
    valueB.value = 0;
    valueC.value = 0;
}

calculate.addEventListener("click",
    function (){
    const a = parseInt(valueA.value);
    const b = parseInt(valueB.value);
    const c = parseInt(valueC.value);

    if (a === 0 || b === 0 || c === 0) {
        alert("Please fill all the fields");
    }
    else {
        const delta = b * b - 4 * a * c;
        if (delta < 0) {
            result.innerHTML = "No solution";
        } else if (delta === 0) {
            b = -b / (2 * a);
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            result.innerHTML = `x1 = ${x1} and x2 = ${x2}`;

        }
    }

 
})



// calculate.addEventListener(submit, () => {


//  
//   }
// });
