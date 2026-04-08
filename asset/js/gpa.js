
function addNewFields() {
    let container = document.querySelector("cgpa-container");
    let newdiv = document.createElement('DIV');
    
    let courseInput = document.createElement('INPUT');
    let score = document.createElement('INPUT');
    let units = document.createElement('INPUT'); 

    units.classList.add('js-added-fields', 'units');
    score.classList.add('js-added-fields', 'score');
    courseInput.classList.add('js-added-fields');

    courseInput.placeholder = "Course Title";
    score.placeholder = "Score";
    units.placeholder = "Units";
    
    container.appendChild(newdiv);
    newdiv.appendChild(courseInput);
    newdiv.appendChild(score);
    newdiv.appendChild(units);
}


function calculatePoints () {
    let allScores = document.querySelectorAll(".score");
    let scoresArray = Array.from(allScores).map(score => parseInt(score.value));
    console.log(scoresArray);

    let weightedGPA = scoresArray.map(item => {
        if(item >= 0 && item < 40) {
            return 0;
        } if (item >= 40 && item < 45) {
            return 1;
        } if (item >=45 && item < 50) {
            return 2;
        } if (item >= 50 && item < 60) {
            return 3;
        } if (item >= 60 && item < 70) {
            return 4;
       } if (item >= 70 && item <= 100) {
            return 5;
        }
    })

    console.log('New Scores Array:', weightedGPA);

    let allUnits = document.querySelectorAll(".units");
    let unitsArray = Array.from(allUnits).map(unit => parseInt(unit.value));
    console.log(unitsArray);

    let point = 0;
    for(let i = 0; i < weightedGPA.length; i++) {
        point += weightedGPA[i] * unitsArray[i];
        console.log('Total Points:', point);
    }

let sumOfUnits =     unitsArray.reduce(function(a, b) {
        return a + b;
    }, 0);
    console.log('Sum of Units:', sumOfUnits);

    let GPA = parseFloat(point / sumOfUnits).toFixed(2);
    console.log('CGPA:', GPA);

    let result = document.querySelector('.result');
    result.innerHTML = GPA;
}

