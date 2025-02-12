const XLSX = require('xlsx');

const fileName = 'dome.xlsx'

const workbook = XLSX.readFile(fileName);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet)

const newData = []

data.forEach((row) => {
    const productNum = row["상품번호"]
    const fullName = row["상품"]
    

    const colors = (row["색상"] || "").split(",")
    const price = row[" 가격"]

    colors.forEach((color) => {
        newData.push({
            "상품명": `${productNum}-${fullName}-${color},`,
            "가격": `${price},`
        
        })
    })
})

console.log(`예제 입력`, data[0])
console.log(`예제 출력`, newData[0])

const worksheet = XLSX.utils.json_to_sheet(newData);
const newWorkbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(newWorkbook, worksheet, 'Sheet1');
XLSX.writeFile(newWorkbook, `color-${fileName}`);







