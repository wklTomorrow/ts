import {SayHello} from './greet'
import types from './study'
import fn from './func'
import myClass from './classStudy'
import myFn from './myFn'
import { add, buildName, a } from './myFn'
function Hello(str: string) {
    console.log(`hello ${str}`)
}
Hello('world')
console.log(SayHello('ts'))
function showHello(value: string, name: string) {
    const dom = document.getElementById(value)
    dom.innerText = SayHello(name)
}
showHello('greeting', 'ts')
console.log('hello world')
console.log(types.num, types.value, types.colorName, types.arr, types.obj, types.lenArr)
console.log(fn.fn1, fn.mySearch)
myClass.val.move()
myClass.fn.move(34)
console.log(myClass.val.move())
console.log(add(1, 2))
buildName('hello', null)
buildName('hello', undefined)
console.log(a('1', '2'))