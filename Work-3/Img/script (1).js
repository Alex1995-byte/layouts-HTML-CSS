
//Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат 
// в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыду-щих 2-х заданий:
//  >> сначала обе даты переведите в секунды, узнайте разницу в секундах,
//  >> а потом разницу переведите обратно в «чч:мм:сс».


// SOLID (S - Single responsibility)



function getResults(hh1, mm1, ss1, hh2, mm2, ss2) {
    // hoisting of function
    let date1Seconds = setTimeToSec(hh1, mm1, ss1);
    let date2Seconds = setTimeToSec(hh2, mm2, ss2);

    let timeDiference = date1Seconds - date2Seconds;

    console.log(
        setTimeToHhMmSs(timeDiference)
        );    

    // function declaration
    function setTimeToSec(hours,minutes,seconds) {

        let h = ((hours >= 0 && hours <= 24))? hours : 0;
        let m = ((minutes >= 0 && minutes <= 59))? minutes : 0;
        let s = ((seconds >= 0 && seconds <= 59))? seconds : 0;
    
        return s + (m * 60) + (h * 60 * 60);
    }

    function setTimeToHhMmSs(totalSeconds) {
        let result = "";
        if(0 == totalSeconds)
            return "00 : 00 : 00";
        hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        minutes = Math.floor(totalSeconds / 60);
        seconds = Math.floor(minutes / 60);
        let h = (hours == 0) ? "00" : (hours <=9) ? `0${hours}` : hours;
        let m = (minutes == 0) ? "00" : (minutes <=9) ? `0${minutes}` : minutes;
        let s = (seconds == 0) ? "00" : (seconds <=9) ? `0${seconds}` : seconds;
        result = `${h + ":" + m + ":" + s}`;
        return result;
    }
}


// global scope
//console.log(setTimeToHhMmSs(7486455));

getResults(14,35, 10, 11, 40, 55);


