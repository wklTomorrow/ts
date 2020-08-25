interface objs {
    label: string,
    name?: any
}
function getValue(labelObj: objs) {
    return labelObj.name + labelObj.label
}
let obj = { name: 'wang', label: 'string' }
console.log(getValue(obj))
interface SquareConfig {
    color?: string;
    width?: number;
}
let str: SquareConfig = {color: '', width: 2}
function createSquare(config: SquareConfig): {color: string; area: string} {
let newSquare = {color: "white", area: '100'};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config) {

    }
    if (config.width) {
        newSquare.area = config.width * config.width + '';
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});
let mySquares = createSquare({color: "black", op: 2} as SquareConfig);
interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;
}

interface StringArray {
    readonly [index: number]: string;
}

let myArray: StringArray = ['1','12']

let myStr: string = myArray[0]

interface ClockInterfaces {
    currentTime: Date;
    setTime(d: Date): any;
}

class Clocks implements ClockInterfaces {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d
    }
    constructor(h: number, m: number) { }
}

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let val: Square = {color: '1', sideLength: 1}

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number): string { return '1' };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c.reset();
c.interval = 5.0;
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image extends Control implements SelectableControl {
    select() { }
}

class Location {

}

export default {
    fn1: getValue(obj),
    mySearch: mySearch
}