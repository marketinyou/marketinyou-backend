const express = require('express');
const app = express();
const exceljs = require('exceljs');

app.get('/etc', async (req, res) => {
  try {
    const workbook = new exceljs.Workbook();
    const data = await workbook.xlsx.readFile('excel/남부시장 기타.xlsx');
    const worksheet = data.getWorksheet(1);
    let result = [];
    worksheet.eachRow((row, rowNumber) => {
      let filteredRow = row.values.filter(value => value !== null);
      if (filteredRow.length > 0) {
        result.push(filteredRow);
      }
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('서버 오류');
  }
});

app.get('/shopping', async (req, res) => {
  try {
    const workbook = new exceljs.Workbook();
    const data = await workbook.xlsx.readFile('excel/남부시장 쇼핑.xlsx');
    const worksheet = data.getWorksheet(1);
    let result = [];
    worksheet.eachRow((row, rowNumber) => {
      let filteredRow = row.values.filter(value => value !== null);
      if (filteredRow.length > 0) {
        result.push(filteredRow);
      }
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('서버 오류');
  }
});

app.get('/food', async (req, res) => {
  try {
    const workbook = new exceljs.Workbook();
    const data = await workbook.xlsx.readFile('excel/남부시장 음식.xlsx');
    const worksheet = data.getWorksheet(1);
    let result = [];
    worksheet.eachRow((row, rowNumber) => {
      let filteredRow = row.values.filter(value => value !== null);
      if (filteredRow.length > 0) {
        result.push(filteredRow);
      }
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('서버 오류');
  }
});

app.listen(3000, () => {
  console.log('웹 서버가 3000번 포트에서 실행 중입니다.');
});
