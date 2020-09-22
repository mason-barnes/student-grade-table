var tableElement = document.querySelector('table');
var headerElement = document.querySelector('header');
var newGradeTable = new GradeTable(tableElement);
var pageHeader = new PageHeader(headerElement);
var newApp = new App(newGradeTable, pageHeader);
newApp.start();
console.log();
