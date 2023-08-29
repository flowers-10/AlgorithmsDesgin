type resAlaryType = {
    age:number,
    alary:number,
    resAmout:number
}

const salaryAmount = (targetAge:number,targetAlary:number, increase:number) => {
    let age = targetAge
    let alary = targetAlary
    let resAmout = 0
    let resArr:resAlaryType[] = [{age,alary,resAmout}];
    for(let i = 0;i<(65 - targetAge);i++) { 
        age ++
        alary += increase
        resAmout += alary * 12
        resArr.push({
            age,
            alary,
            resAmout
        })
    }

    return resArr
}

console.log(salaryAmount(26, 5000, 100));
