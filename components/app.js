class App {
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.getGrades = this.getGrades.bind(this);
    this.start = this.start.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var gradesTotal = 0;
    for (var i=0; i<grades.length; i++) {
      gradesTotal += grades[i].grade;
    }
    var gradeAverage = gradesTotal / grades.length;
    this.pageHeader.updateAverage(gradeAverage);
  }
  getGrades() {
    var grades = $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "JB5t4yta"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }
  start() {
    this.getGrades();
  }
}
