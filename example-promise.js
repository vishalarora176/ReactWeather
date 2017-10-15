// function getTempPromise (location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout( function () {
//             resolve(32);
//             reject("City not found");
//         }, 1000);
//     });
// }
//
// getTempPromise("bangalore").then(function (temp) {
//     console.log("promise success: ", temp);
// }, function (err) {
//     console.log("promise error: ", err);
// });


function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a == "number" && typeof b == "number") {
            resolve(a+b);
        } else {
            reject("one of the parameters is not a number");
        }
    });
}

function addSuccess(sum) {
    console.log("Sum is : " + sum);
}

function addError(err) {
    console.log(err);
}

addPromise(1, 5).then(addSuccess, addError);
addPromise(1, "test").then(addSuccess, addError);
