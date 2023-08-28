let amount = 60000;

let inflationAmount = 60000;
let age = 27;
type ResArrType = {
  age:number,
  inflationAmount:number,
  resAmount?:number
}
let resArr:ResArrType[] = [{ age: 27, inflationAmount: 60000 }];

let tt = [];

for (let i = 0; i < 65 - 27; i++) {
  inflationAmount *= 1.027;
  age++;
  resArr.push({
    age,
    inflationAmount,
  });
}

resArr.forEach((item,index) => {
    let resAmount = 0;
    for( let i = index;i<resArr.length;i++) {
        resAmount += resArr[i].inflationAmount; 
    }
    item.resAmount = resAmount;
})
