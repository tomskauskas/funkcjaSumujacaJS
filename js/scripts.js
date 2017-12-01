'use strict';

function sumuj(){
    var calaTablica = arguments.length;
    if(calaTablica == 0) {
        console.log('nie podałeś żadnej liczby');
    }else if (calaTablica == 1) {
        console.log('podałeś tylko jedną liczbę ' + arguments[0]);
    }else {
        var wynik = 0;
        for (var i in arguments) {
            wynik += arguments[i];
        }
        console.log(wynik);
    }
}


sumuj();
sumuj(10);
sumuj(10, 20 ,30);
sumuj(1, 2, 3, 4, 5, 6, 7, 8);