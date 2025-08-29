"use strict";
function displayId(id) {
    if (typeof id === 'string') {
        return id.toUpperCase();
    }
    else
        return id * 10;
}
console.log(displayId('Typescript and node.js'));
console.log(displayId(30));
//# sourceMappingURL=task2.js.map