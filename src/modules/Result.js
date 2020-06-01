export default class Result {

  constructor(scoreTable) {
    this.scoreTable = scoreTable;
    this.inputsExercise = {
      // agility: this.getElem('#agility'),
      strength: this.getElem('#strength'),
      rapidity: this.getElem('#rapidity'),
      endurance: this.getElem('#endurance'),
      // military: this.getElem('#military')
    };
    this.militaryСategory = this.getElem('#militaryСategory');
    this.professionalCategory = this.getElem('#professionalCategory');
  }

  getElem = id => document.querySelector(id);

  getPointsForResult = ({ table, typeResult, typeExercise }) => {
    if (typeResult === 'AMOUNT') {
      const arrFiltered = table.filter(el => el[0] <= Number(this.inputsExercise[typeExercise].value));
      return arrFiltered.length === 0 ? 0 : arrFiltered[0][1];
    }
    if (typeResult === 'TIMES') {
      const arrFiltered = table.filter(el => el[0] >= Number(this.inputsExercise[typeExercise].value));
      return arrFiltered.length === 0 ? 0 : arrFiltered[0][1];
    }
  };

  // Получаем очки за упражнение

  calculate = () => {
    const ids = [//'agility',
      'strength', 'rapidity', 'endurance',
      // 'military'
    ];
    const ob = ids.map((item) => this.scoreTable[this.getElem(`#${item}Exercise`).value]);
    console.log(ob);

    // console.log(this.getPointsForResult(ob[3]));
    return ob.reduce((acc, item) => acc + this.getPointsForResult(item), 0);
  };
}

// module.exports = (scoreTable) => new Result(scoreTable);