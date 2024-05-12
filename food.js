const { table } = require("console");
const xlsxFile = require("read-excel-file/node");

const map = {
  가게 : "store",
  종류 : "type",
}
xlsxFile("excel/남부시장 음식.xlsx", { map }).then(({rows}) => {
  console.log(rows);
  table(rows);
});