const { table } = require("console");
const xlsxFile = require("read-excel-file/node");

const map = {
  '가게': 'store',
  '종류': 'type',
  '주소': 'address',
};

xlsxFile("excel/남부시장 음식.xlsx", { map }).then((rows) => {
  console.log(rows);
  table(rows);
}).catch(err => {
  console.error('Error reading the Excel file:', err);
});
