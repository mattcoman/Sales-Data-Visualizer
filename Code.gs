function doGet() {
  return HtmlService.createHtmlOutputFromFile('salesVisualizer');
}

function getSalesData() {
  var ss = SpreadsheetApp.openByUrl('YOUR_SPREADSHEET_URL');
  var ws = ss.getSheetByName('Sales');
  var data = ws.getRange(1, 1, ws.getLastRow(), 2).getValues();
  
  var labels = [];
  var values = [];
  data.forEach(function(row) {
    labels.push(row[0]);
    values.push(row[1]);
  });

  return { labels: labels, values: values };
}
