// A deep copy creates a completely independent clone - including all nested objects and arrays.

// Changes in the deep copy do not affect the original object.

let original = {
    name: "John",
    address: { city: "delhi" }
};

let deep = JSON.parse(JSON.stringify(original));

deep.address.city = "Kolkata";

console.log(original);
console.log(deep);