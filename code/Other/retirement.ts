type ResArrType = {
  age: number;
  inflationAmount: number;
  resAmount?: number;
};
const retirement = (inflationAmount: number, targetAge: number) => {
  let resArr: ResArrType[] = [{ age:targetAge, inflationAmount}];
  let age = targetAge;
  for (let i = 0; i < (65 - targetAge); i++) {
    inflationAmount *= 1.027;
    age++;
    resArr.push({
      age,
      inflationAmount,
    });
  }

  resArr.forEach((item, index) => {
    let resAmount = 0;
    for (let i = index; i < resArr.length - 1; i++) {
      resAmount += resArr[i].inflationAmount;
    }
    item.resAmount = resAmount;
  });

  return resArr
};

console.log(retirement(60000, 27));

