let num: number = 1
num = 2
let list: number[] = [1, 2,33]
let lists: Array<number> = [1, 2,33]
let x: [string, number]
x = ['1', 1]
enum Color {Red, Green = 10, Blue}
let c: Color = Color.Green
let s: typeof Color = Color
let colorName: string = Color[10]
let notSure: any = 'hello'
notSure = false
let arr: any[] = [1, 'hello', false]
arr[1] = 100
let obj: object = {}
obj = {
    name: 'wang'
}
let someValue: any = 'this is someValue'
let someLength: number = (<string>someValue).length
let len: number = (someValue as string).length
export default {
    num: num,
    value: c,
    colorName: colorName,
    arr: arr,
    obj: obj,
    lenArr: [someLength, len]
}