export function add(x: number, y:number): number {
    return x + y
}

export let myAdd: (x: number, y:number) => number = function (x, y) {return x + y}

export function buildName(first: string, secondName: string = 'world'): string {
    console.log(first + secondName)
    return first + secondName
}

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

interface fn {
    (name: string, age: string): string,
    names: string
}
let z = <fn>function (name, value) {return name + value}
z.names = '1'

export let  a = z

export default {
    z
}