class Result {
  ids = ['agility', 'strength', 'rapidity', 'endurance', 'military'];

  typeOfExercise = {}

  constructor(scoreTable) {
    this.ob = this.ids.map((item) => scoreTable[this.getElem(`#${item}Exercise`).value]);
    this.militaryСategory = this.getElem('#militaryСategory');
    this.professionalCategory = this.getElem('#professionalCategory');
    this.agility = this.getElem('#agility');
    this.strength = this.getElem('#strength');
    this.rapidity = this.getElem('#rapidity');
    this.endurance = this.getElem('#endurance');
    this.military = this.getElem('#military');
  }

  getElem = (id) => document.querySelector(id);

  // Получаем очки за упражнение
  getPointsForStrength = (arr) => {
    const arrFiltered = arr.filter((el) => el[0] >= +this.strength.value);
    return arrFiltered.length === 0 ? 0 : arrFiltered[arrFiltered.length - 1][1];
  }

  getPointsForRapidity = (arr) => {
    const arrFiltered = arr.filter((el) => el[0] <= +this.rapidity.value);
    return arrFiltered.length === 0 ? 0 : arrFiltered[arrFiltered.length - 1][1];
  }

  getPointsForEndurance = (arr) => {
    const arrFiltered = arr.filter((el) => el[0] <= +this.endurance.value);
    return arrFiltered.length === 0 ? 0 : arrFiltered[arrFiltered.length - 1][1];
  }

  calculateResult = () => {
    console.log(this.getPointsForStrength(this.ob[1]));
    console.log(this.getPointsForRapidity(this.ob[2]));
    console.log(this.getPointsForEndurance(this.ob[3][1]));
  }
}

module.exports = (scoreTable) => new Result(scoreTable);
