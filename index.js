let name = {
    first: "Kir",
    last: "parn",
}
let printNm = function (hometown, state, country) {
    console.log(this.first + " " + this.last + " " + hometown + " " + state + " " + country);
}
let printMyName = printNm.bind(name, "Delhi", "Kolkata");
printMyName("India");

// Function.prototype.mybind = function (...args) {

//     let obj = this
//     return function () {
//         obj.call(args[0]);
//     }

// }
Function.prototype.mybind = function (...args) {

    let obj = this,
        params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }

}
// Function.prototype.mybind = function (...args) {

//     let obj = this
//     params=args.slice(1);
//     return function () {
//         obj.apply(args[0],params);
//     }

// }
let printMyName2 = printNm.mybind(name, "Delhi", "Kolkata");
printMyName2("India");