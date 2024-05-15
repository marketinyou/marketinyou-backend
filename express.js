const express = require('express');
const app = express();
const exceljs = require('exceljs');

app.get('/', async (req, res) => {
  let html = '<html><body>';

  try {
    const workbook1 = new exceljs.Workbook();
    await workbook1.xlsx.readFile('excel/남부시장 기타.xlsx');
    const worksheet1 = workbook1.getWorksheet(1);
    let data1 = [];
    worksheet1.eachRow((row, rowNumber) => {
      data1.push(row.values);
    });
    html += '<h2>남부시장 기타</h2><table>';
    data1.forEach(row => {
      html += '<tr>';
      row.forEach(cell => {
        html += `<td>${cell}</td>`;
      });
      html += '</tr>';
    });
    html += '</table>';

    const workbook2 = new exceljs.Workbook();
    await workbook2.xlsx.readFile('excel/남부시장 쇼핑.xlsx');
    const worksheet2 = workbook2.getWorksheet(1);
    let data2 = [];
    worksheet2.eachRow((row, rowNumber) => {
      data2.push(row.values);
    });
    html += '<h2>남부시장 쇼핑</h2><table>';
    data2.forEach(row => {
      html += '<tr>';
      row.forEach(cell => {
        html += `<td>${cell}</td>`;
      });
      html += '</tr>';
    });
    html += '</table>';

    const workbook3 = new exceljs.Workbook();
    await workbook3.xlsx.readFile('excel/남부시장 음식.xlsx');
    const worksheet3 = workbook3.getWorksheet(1);
    let data3 = [];
    worksheet3.eachRow((row, rowNumber) => {
      data3.push(row.values);
    });
    html += '<h2>남부시장 음식</h2><table>';
    data3.forEach(row => {
      html += '<tr>';
      row.forEach(cell => {
        html += `<td>${cell}</td>`;
      });
      html += '</tr>';
    });
    html += '</table>';
  } catch (error) {
    html = '<p>파일을 읽는 중에 오류가 발생했습니다.</p>';
    console.error(error);
  }

  html += '</body></html>';
  res.send(html);
});

app.listen(3000, () => {
  console.log('웹 서버가 3000번 포트에서 실행 중입니다.');
});
