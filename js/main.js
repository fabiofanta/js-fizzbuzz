/* estrarre un valore da 1 a 100 in ordine crescente
   controllare se combacia con qualche condizione
   se si scrivere quella condizione
   altrimenti scrivere il valore
*/
var numbers = [];

for (var i = 1; i <= 100; i++) {
    var resto = i % 3;
    var restoDue = i % 5;
    if (resto == 0 && restoDue == 0) {
        numbers.push("FizzBuzz");
    } else if (restoDue == 0) {
        numbers.push("Buzz");
    } else if (resto == 0) {
        numbers.push("Fizz");
    } else {
        numbers.push(i);
    }
document.getElementById('text').innerHTML = numbers;
}
