function myFunction(x) {
    x.classList.toggle("change");
}

console.log(document.documentElement.clientWidth); /* 800 */
console.log(window.innerWidth); /* 800 */
console.log(window.outerWidth); /* 800 dans Firefox, 1200 dans Chrome */

console.log(document.documentElement.clientHeight) /* 533 */
console.log(window.innerHeight); /* 533 */
console.log(window.outerHeight); /* 596 dans Firefox, 900 dans Chrome */