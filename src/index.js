
import { scoreTable16 } from './modules/scoreTable16';
import { scoreTable14 } from './modules/scoreTable14';
import Result from './modules/Result';
import typeExercise from './modules/typeExercise';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
import './css/index.css';

const result = new Result(scoreTable14, typeExercise);

const militaryСategory = document.querySelector('#militaryСategory');
const professionalCategory = document.querySelector('#professionalCategory');



document.querySelector('#calculate').addEventListener('click', () => {

  console.log(result.calculate());
});

