const { table } = require("console");
const xlsxFile = require("read-excel-file/node");

const map = {
  가맹점 : "store",
  종류 : "type",
}
xlsxFile("excel/남부시장 쇼핑.xlsx", { map }).then(({rows}) => {
  console.log(rows);
  table(rows);
});