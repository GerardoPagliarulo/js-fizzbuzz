/**
 *  STAMPARE NUMERI DA 1 A 100
 * 
 * per i multipli di 3 stampare "Fizz" al posto del numero,
 * per i multipli di 5 stampare "Buzz",
 * per i numeri che sono sia multipli di 3 che di 5 stampare "FizzBuz".
 */

 for (i = 1; i <= 100; i++) {
    var numeri = i;
    
    if (numeri % 3 == 0 && numeri % 5 == 0) {
        numeri = 'FizzBuzz';
    }
    else if (numeri % 3 == 0) {
        numeri = 'Fizz';
    }
    else if (numeri % 5 == 0) {
        numeri = 'Buzz';
    }
    console.log(numeri);
 }

