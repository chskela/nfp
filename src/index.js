import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { scoreTable16 } from './modules/scoreTable16';
import { scoreTable14 } from './modules/scoreTable14';
import Result from './modules/Result';

import './css/index.css';

const result = Result(scoreTable14);


document.querySelector('#calculate').addEventListener('click', result.calculateResult);

// function calculateResult() {

//   if (militaryСategory.value === '0') {
//     alert('Выберети категорию');
//     return;
//   }
//   let totalPoints = 0;
//   const ob1 = scoreTable14[document.querySelector('#agilityExercise').value];
//   const ob2 = scoreTable14[document.querySelector('#strengthExercise').value];
//   const ob3 = scoreTable14[document.querySelector('#rapidityExercise').value];
//   const ob4 = scoreTable14[document.querySelector('#enduranceExercise').value];
//   const ob5 = scoreTable14[document.querySelector('#militaryExercise').value];

//   // Получаем очки за упражнение
//   const getPointsForPower = (arr) => {
//     const arr1 = arr.filter((el) => el[0] >= +strength.value);
//     // console.log(arr1);

//     return arr1.length === 0 ? 0 : arr1[arr1.length - 1][1];
//   };

//   const getPointsForRapidity = (arr) => {
//     const arr1 = arr.filter(el => el[0] <= +rapidity.value);
//     // console.log(arr1);

//     return arr1.length === 0 ? 0 : arr1[arr1.length - 1][1];
//   };

//   const a = getPointsForPower(ob2);
//   const b = getPointsForRapidity(ob3);

//   console.log(a);
//   console.log(b);


//   // console.log(militaryСategory.value);
//   // console.log(professionalCategory.value);
//   // console.log(agility.value);
//   // console.log(strength.value);
//   // console.log(rapidity.value);
//   // console.log(endurance.value);
//   // console.log(militarySkills.value);
// }

// console.dir(result);
