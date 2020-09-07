import { AMOUNT, TIMES } from './typeResult';


/** 
 * Class for calculating the result
 * @class
*/
export default class Result {
/**
 * @constructor
 * @param {object} scoreTable 
 * @param {string} typeExercise 
 */
  constructor(scoreTable, typeExercise) {
    this.scoreTable = scoreTable;
    this.typeExercise = typeExercise;

    // this.militaryСategory = this.getElem('#militaryСategory');
    // this.professionalCategory = this.getElem('#professionalCategory');
  }
/**
 * 
 * @method
 * @param {string} typeExercise 
 * @returns {object}
 */
  getExercise = (typeExercise) => {
    const result = {};
    for (const key in typeExercise) {
      if (typeExercise.hasOwnProperty(key)) {
        const element = typeExercise[key];
        result[element] = this.getElem(`#${element}`);
      }
    }
    console.log(result);
    return result;
  };

  getElem = id => document.querySelector(id);

  getPointsForResult = ({ table, typeResult, typeExercise }) => {
    const inputsExercise = this.getExercise(this.typeExercise);

    if (typeResult === AMOUNT) {
      const arrFiltered = table.filter(el => el[0] <= Number(inputsExercise[typeExercise].value));
      return arrFiltered.length === 0 ? 0 : arrFiltered[0][1];
    }

    if (typeResult === TIMES) {
      const arrFiltered = table.filter(el => el[0] >= Number(inputsExercise[typeExercise].value));
      return arrFiltered.length === 0 ? 0 : arrFiltered[0][1];
    }
    return 0;
  };

  // Получаем очки за упражнение

  calculate = () => Object.entries(this.typeExercise)
    .map((item) => this.scoreTable[this.getElem(`#${item[1]}Exercise`).value])
    .reduce((acc, item) => acc + this.getPointsForResult(item), 0);
}