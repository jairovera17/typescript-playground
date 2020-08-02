//Tuple (fixed 2 items array)
let role: [number, string];
role = [2, "Developer"];

//Enum 
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

//types
type Combinable = number;

function sum(input1: number, input2: number, conversion: "as-number" | "as-string", cb: (num: number) => void, aux = 1) {
    let result = input1 + input2;
    return result
}

const add = (...numbers: number[]) => {

}

const array = ["string1", "string2"];
const [item1, item2, ...restItems] = array

const s = "400";
console.log(+s + 100)

//shorthand

abstract class Department {

    constructor(private readonly id: number, private label: string) {

    }

    get someLabel() {
        return this.label
    }

    set someId(value: string) {
        this.label = value;
    }

    static sayHi(label: string){
        console.log(label)
    }

    abstract shouldImplement(value: number, label: number): void
}

const firstValue = undefined;
const secondValue= firstValue ?? "some VAlue"