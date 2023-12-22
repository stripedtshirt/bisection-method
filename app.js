//Iterations 2.0: Optimized variable function and number of iterations

let button = document.getElementById("button")
let equation = document.getElementById("equation")
let guess1 = document.getElementById("guess1")
let guess2 = document.getElementById("guess2")
let errorv = document.getElementById("error")
let table = document.getElementById("table")
let container = document.getElementById("container")
let form = document.getElementById("form")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let end = document.querySelector(".end_credit")

function solve(){
    let x = parseInt(guess1.value)
    let y = parseInt(guess2.value)
    let i = 0
    let error = parseInt(errorv.value)
    function trial(j){
        return(j**3)-j-1
    }
    
    while(i < 500){
        i++
        let m = (x + y)/2
        let fm = trial(m)
        console.log(m)
        console.log(fm)
        if(fm < 0){
                x = m
        }else{ y = m}
        table.innerHTML += `
        <tr>
        <td>${i}</td>
        <td>${m}</td>
        <td>${fm}</td>
        </tr>`
        if(fm.toFixed(error) == 0){
            container.style.display = "flex"
    end.style.display = "flex"
    form.style.display = "none"
    p1.innerText = `There were ${i} iterations!`
    p2.innerText = `The root is ${m} or ~ ${m.toFixed(5)}`
            break
        }
    }
    // container.style.display = "flex"
    // end.style.display = "flex"
    // form.style.display = "none"
    // p1.innerText = `There were ${i} iterations!`
    // p2.innerText = `The root is ${m} or ~ ${m.toFixed(5)}`
}

button.addEventListener("click", solve)