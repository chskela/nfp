import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { scoreTable16 } from './modules/scoreTable16';
import { scoreTable14 } from './modules/scoreTable14';

import './css/index.css';


const militaryСategory = document.querySelector('#militaryСategory');
const professionalCategory = document.querySelector('#professionalCategory');
const agility = document.querySelector('#agility');
const strength = document.querySelector('#strength');
const rapidity = document.querySelector('#rapidity');
const endurance = document.querySelector('#endurance');
const military = document.querySelector('#military');

document.querySelector('#calculate').addEventListener('click', calculateResult);

function calculateResult() {
    if (militaryСategory.value === '0') {
        alert('Выберети категорию');
        return;
    }
    let totalPoints = 0;
    const ob1 = scoreTable14[document.querySelector('#agilityExercise').value];
    const ob2 = scoreTable14[document.querySelector('#strengthExercise').value];
    const ob3 = scoreTable14[document.querySelector('#rapidityExercise').value];
    const ob4 = scoreTable14[document.querySelector('#enduranceExercise').value];
    const ob5 = scoreTable14[document.querySelector('#militaryExercise').value];

    // Получаем очки за упражнение
    const getPointsForExercise = arr => {
        const arr1 = arr.filter(el => {
            return el[0] === +strength.value;    
        });
        return arr1.length === 0 ? 0 : arr1[0][1];
    };

    const a = getPointsForExercise(ob2)
    console.log(a);
    
    //arr.length === 0 ? [[0,0]] : 
    
    //console.log(scoreTable16[militaryСategory.value][professionalCategory.value]);
    
    // console.log(militaryСategory.value);
    // console.log(professionalCategory.value);
    // console.log(agility.value);
    //console.log(strength.value);
    // console.log(rapidity.value);
    // console.log(endurance.value);
    // console.log(militarySkills.value);
    
}

