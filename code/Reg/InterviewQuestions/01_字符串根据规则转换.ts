let str:string = '|额定生产率/堆料|/|斗轮直径/m|+|斗数*斗容|+3.14*|电磁阀电源 24VDC|'
const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");

const newArr = str.split('|').slice(1, -1)
const res:string[] = []
for (const item of newArr) {
    if(reg.test(item)) {
        res.push(item)
    }else {
        if(item.length < 1) {
            res.push(item)
        }else {
            for(const i of item) {
                res.push(i)
            }
        }
    }
}

console.log(res);