//A shallow copy copies the top-level properties of an object.
//If a property is a primitive (like a number or string), it copies the value.
//If a property is a reference (like an object or array), it copies the reference - not the actual nested object.

// So changes in nested object will affect both the original and the copy.

let original = {
    name: "john",
    address: {
        city: "mumbai"
    }
}

let shallow = { ...original };
shallow.name = "cena";
shallow.address.city = "chennai";

console.log(original);
console.log(shallow);
