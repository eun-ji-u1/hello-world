const newData = []

data.forEach((row) => {
    const productNum = row["상품번호"]
    const fullName = row["상품"]
    

    const colors = (row["색상"] || "").split(",")
    const price = row[" 가격"]

    colors.forEach((color) => {
        newData.push({
            "상품명": `${productNum}-${fullName}-${color}`,
            "가격": price
        
        })
    })
})

console.log(`예제 입력`, data[0])
console.log(`예제 출력`, newData[0])
