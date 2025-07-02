
let original = {
    name: "cs",
    address: {
        city: "pune"
    }
}

let shallow = original;

shallow.name = "ok";

console.log(original);
console.log(shallow);