let navbar = document.getElementById('topNav');


window.addEventListener('scroll', () => {
    if (document.body.scrollTop >= 100||document.documentElement.scrollTop>=100) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled')
    }
})



let outputPara = document.getElementById('output');
let judgement = document.getElementById('judgement');
let btn = document.getElementById('calculate-btn');

function updateText() {
       const options = ['overweight', 'normal BMI', 'underweight', 'obese']

    let weight = parseFloat(document.getElementById("weight").value);
    
    
        let height = parseFloat(document.getElementById("height").value);
        let BMI = weight / (height * height);
 
 
        outputPara.textContent = `Your BMI is ${BMI.toFixed(2)}`;
       if (BMI < 18.5) {
            judgement.textContent = `This is considered ${options[2]}.`;
        }
        else if (BMI <= 24.9) {
            judgement.textContent = `This is in the ${options[1]} range.`
        }
        else if (BMI <= 29.9) {
            judgement.textContent = `This is considered ${options[0]}.`;
        }
        else if (BMI >30) {
            judgement.textContent = `This is considered ${options[3]}.`;
        }
        
        else {

            judgement.textContent = 'Please check your inputs'
        }
    
    
}

function inputsEmpty() {
    if (weight.value.trim().length == 0||height.value.trim().length == 0) {
        return true;
    }
    else{
        return false;
    }
}


function onClick() {
    if (inputsEmpty()) {
        outputPara.textContent = 'One or both inputs is empty';
        return;
    }
 
      updateText();
    
}

btn.addEventListener('click', onClick)



document.addEventListener('keydown',(e)=>{
    if (e.key === 'Enter') {
        onClick()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        outputPara.textContent = '';
        judgement.textContent = '';
        weight.value = '';
        height.value = '';

    }
})