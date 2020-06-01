
import { scoreTable16 } from './modules/scoreTable16';
import { scoreTable14 } from './modules/scoreTable14';
import Result from './modules/Result';
// import modalWindow from './modules/modal.js';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
import './css/index.css';
import './css/modal.css';

const result = new Result(scoreTable14);

const militaryСategory = document.querySelector('#militaryСategory');
const professionalCategory = document.querySelector('#professionalCategory');

document.querySelector('#calculate').addEventListener('click', result.calculate);

function calculateResult() {
  if (militaryСategory.value === '0') {
    alert('Выберети категорию');
    return;
  }
  let totalPoints = 0;


  console.log(result);

}

