class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tBody = this.tableElement.querySelector('tbody');
    for (var i=0; i<grades.length; i++) {
      var tableRow = document.createElement('tr');
      var tableData1 = document.createElement('td');
      var tableData2 = document.createElement('td');
      var tableData3 = document.createElement('td');
      tableData1.textContent = grades[i]["name"];
      tableData2.textContent = grades[i]["course"];
      tableData3.textContent = grades[i]["grade"];
      tableRow.append(tableData1, tableData2, tableData3);
      tBody.append(tableRow);
    }
  }
}
