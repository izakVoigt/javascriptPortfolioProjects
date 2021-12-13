const calculate = document.getElementById('calculate')

function bmi() {
    let name = document.getElementById('name').value
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    const result = document.getElementById('result')

    if(name !== '' && height !== '' && weight !== ''){
        const BMIvalue = (weight / (height * height)).toFixed(1)
        let classification = ''

        if(BMIvalue < 18.5){
            classification = 'under weight'
        } else if(BMIvalue < 25){
            classification = 'ideal weight'
        } else if(BMIvalue < 30){
            classification = 'a little over weight'
        } else if(BMIvalue < 35){
            classification = 'obese 1 degree'
        } else if(BMIvalue < 40){
            classification = 'obese 2 degree'
        } else {
            classification = 'obese 3 degree'
        }

        result.textContent = `${name} your BMI is ${BMIvalue} and you are ${classification}`
    }
    else {
        result.textContent = 'All informations must be filled out!'
    }
}

calculate.addEventListener('click', bmi)
