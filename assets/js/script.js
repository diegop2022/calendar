var timeDisplayEl = document.querySelector("#time-display")  

timeDisplayEl.textContent = moment().format("MMM Do YY");

var time = moment().format('LT');

// Input 1
var userInput1 = document.getElementById('task-text1');
var saveInput1 = document.getElementById('btn1');
var storedInput1 = localStorage.getItem('userInput1')


if (storedInput1) {
    userInput1.value = storedInput1
}

saveInput1.addEventListener("click", function() {
    console.log(userInput1.value)
    saveLocal1()
})

function saveLocal1() {
    localStorage.setItem('userInput1', userInput1.value)
}
// End Input 1
// Input 2
var userInput2 = document.getElementById('task-text2');
var saveInput2 = document.getElementById('btn2');
var storedInput2 = localStorage.getItem('userInput2')


if (storedInput2) {
    userInput2.value = storedInput2
}

saveInput2.addEventListener("click", function() {
    console.log(userInput2.value)
    saveLocal2()
})

function saveLocal2() {
    localStorage.setItem('userInput2', userInput2.value)
}
// End Input 2
// Input 3
var userInput3 = document.getElementById('task-text3');
var saveInput3 = document.getElementById('btn3');
var storedInput3 = localStorage.getItem('userInput3')


if (storedInput3) {
    userInput3.value = storedInput3
}

saveInput3.addEventListener("click", function() {
    console.log(userInput3.value)
    saveLocal3()
})

function saveLocal3() {
    localStorage.setItem('userInput3', userInput3.value)
}
// End Input 3
// Input 4
var userInput4 = document.getElementById('task-text4');
var saveInput4 = document.getElementById('btn4');
var storedInput4 = localStorage.getItem('userInput4')


if (storedInput4) {
    userInput4.value = storedInput4
}

saveInput4.addEventListener("click", function() {
    console.log(userInput4.value)
    saveLocal4()
})

function saveLocal4() {
    localStorage.setItem('userInput4', userInput4.value)
}
// End Input 4
// Input 5
var userInput5 = document.getElementById('task-text5');
var saveInput5 = document.getElementById('btn5');
var storedInput5 = localStorage.getItem('userInput5')


if (storedInput5) {
    userInput5.value = storedInput5
}

saveInput5.addEventListener("click", function() {
    console.log(userInput5.value)
    saveLocal5()
})

function saveLocal5() {
    localStorage.setItem('userInput5', userInput5.value)
}
// End Input 5
// Input 6
var userInput6 = document.getElementById('task-text6');
var saveInput6 = document.getElementById('btn6');
var storedInput6 = localStorage.getItem('userInput6')


if (storedInput6) {
    userInput6.value = storedInput6
}

saveInput6.addEventListener("click", function() {
    console.log(userInput6.value)
    saveLocal6()
})

function saveLocal6() {
    localStorage.setItem('userInput6', userInput6.value)
}
// End Input 6
// Input 7
var userInput7 = document.getElementById('task-text7');
var saveInput7 = document.getElementById('btn7');
var storedInput7 = localStorage.getItem('userInput7')


if (storedInput7) {
    userInput7.value = storedInput7
}

saveInput7.addEventListener("click", function() {
    console.log(userInput7.value)
    saveLocal7()
})

function saveLocal7() {
    localStorage.setItem('userInput7', userInput7.value)
}
// End Input 7
// Input 8
var userInput8 = document.getElementById('task-text8');
var saveInput8 = document.getElementById('btn8');
var storedInput8 = localStorage.getItem('userInput8')


if (storedInput8) {
    userInput8.value = storedInput8
}

saveInput8.addEventListener("click", function() {
    console.log(userInput8.value)
    saveLocal8()
})

function saveLocal8() {
    localStorage.setItem('userInput8', userInput8.value)
}
// End Input 8
// Input 9
var userInput9 = document.getElementById('task-text9');
var saveInput9 = document.getElementById('btn9');
var storedInput9 = localStorage.getItem('userInput9')


if (storedInput9) {
    userInput9.value = storedInput9
}

saveInput9.addEventListener("click", function() {
    console.log(userInput9.value)
    saveLocal9()
})

function saveLocal9() {
    localStorage.setItem('userInput9', userInput9.value)
}
// End Input 9

// function check1() {
//     var now = moment();
//     var hourToCheck = (now.day() !== 0)?9:00;
//     var dateToCheck = now.hour(hourToCheck);
    
//     if (check1) {
//         var userInput1 = $('#task-text1');
//         userInput1.addClass('past');
//     } if (check1 === 9 ) {
//         var userInput1 = $('#task-text1');
//         userInput1.addClass('present');
//     } else if (check1 < 9) {
//         var userInput1 = $('#task-text1');
//         userInput1.addClass('future');
//     }
    
//     console.log(hour)
//     console.log(hourToCheck)
//     return moment().isAfter(dateToCheck);
// }

// console.log(check1())
// check1()

// function check2() {
//     var now = moment();
//     var hourToCheck = (now.day() !== 0)?10:00;
//     var dateToCheck = now.hour(hourToCheck);
    
//     if (check2) {
//         var userInput2 = $('#task-text2');
//         userInput2.addClass('past');
//     } if (check2 === 10 ) {
//         var userInput2 = $('#task-text2');
//         userInput2.addClass('present');
//     } else if (check2 < 10) {
//         var userInput2 = $('#task-text2');
//         userInput2.addClass('future');
//     }

//     console.log(hour)
//     console.log(hourToCheck)
//     return moment().isAfter(dateToCheck);
// }

// console.log(check2())
// check2()

// function check3() {
//     var now = moment();
//     var hourToCheck = (now.day() !== 0)?11:00;
//     var dateToCheck = now.hour(hourToCheck);
    
//     if (check3) {
//         var userInput3 = $('#task-text3');
//         userInput3.addClass('past');
//     } if (check3 === 11 ) {
//         var userInput3 = $('#task-text3');
//         userInput3.addClass('present');
//     } else if (check3 < 11) {
//         var userInput3 = $('#task-text3');
//         userInput3.addClass('future');
//     }
    
//     console.log(hour)
//     console.log(hourToCheck)
//     return moment().isAfter(dateToCheck);
// }

// console.log(check3())
// check3()

// function check4() {
//     var now = moment();
//     var hourToCheck = (now.day() !== 0)?12:00;
//     var dateToCheck = now.hour(hourToCheck);
    
//     if (check4) {
//         var userInput4 = $('#task-text4');
//         userInput4.addClass('past');
//     } if (check4 === 12 ) {
//         var userInput4 = $('#task-text4');
//         userInput4.addClass('present');
//     } else if (check4 < 12) {
//         var userInput4 = $('#task-text4');
//         userInput4.addClass('future');
//     }
    
//     console.log(hour)
//     console.log(hourToCheck)
//     return moment().isAfter(dateToCheck);
// }

// console.log(check4())
// check4()

// function check5() {
//     var now = moment();
//     var hourToCheck = (now.day() !== 0)?13:00;
//     var dateToCheck = now.hour(hourToCheck);
    
//     if (check5) {
//         var userInput5 = $('#task-text5');
//         userInput5.addClass('past');
//     } if (check5 === 13 ) {
//         var userInput5 = $('#task-text5');
//         userInput5.addClass('present');
//     } else if (check5 < 13) {
//         var userInput5 = $('#task-text5');
//         userInput5.addClass('future');
//     }
    
//     console.log(hour)
//     console.log(hourToCheck)
//     return moment().isAfter(dateToCheck);
// }

// console.log(check5())
// check5()



var hour = moment().hour();
var futureTime1 = 9

function time1() {

if (futureTime1 > hour) {
    var userInput1 = $('#card1');
    userInput1.addClass('future');
}

else if (futureTime1 < hour) {
    var userInput1 = $('#card1');
    userInput1.addClass('past');
}

else {
    var userInput1 = $('#card1');
    userInput1.addClass('present');
}

}

time1()


var futureTime2 = 10

function time2() {

if (futureTime2 > hour) {
    var userInput2 = $('#card2');
    userInput2.addClass('future');
}

else if (futureTime2 < hour) {
    var userInput2 = $('#card2');
    userInput2.addClass('past');
}

else if (futureTime2 == hour) {
    var userInput2 = $('#card2');
    userInput2.addClass('present');
}

}

time2()


var futureTime3 = 11
function time3() {

if (futureTime3 > hour) {
    var userInput3 = $('#card3');
    userInput3.addClass('future');
}

else if (futureTime3 < hour) {
    var userInput3 = $('#card3');
    userInput3.addClass('past');
}

else if (futureTime3 == hour) {
    var userInput3 = $('#card3');
    userInput3.addClass('present');
}

}

time3()

var futureTime4 = 12
function time4() {

if (futureTime4 > hour) {
    var userInput4 = $('#card4');
    userInput4.addClass('future');
}

else if (futureTime4 < hour) {
    var userInput4 = $('#card4');
    userInput4.addClass('past');
}

else if (futureTime4 == hour) {
    var userInput4 = $('#card4');
    userInput4.addClass('present');
}

}

time4()

var futureTime5 = 13
function time5() {

    if (futureTime5 > hour) {
        var userInput5 = $('#card5');
        userInput5.addClass('future');
    }
    
    else if (futureTime5 < hour) {
        var userInput5 = $('#card5');
        userInput5.addClass('past');
    }
    
    else if (futureTime5 == hour) {
        var userInput5 = $('#card5');
        userInput5.addClass('present');
    }
    
    }
    
    time5()

var futureTime6 = 14
function time6() {

    if (futureTime6 > hour) {
        var userInput6 = $('#card6');
        userInput6.addClass('future');
    }
    
    else if (futureTime6 < hour) {
        var userInput6 = $('#card6');
        userInput6.addClass('past');
    }
    
    else if (futureTime6 == hour) {
        var userInput6 = $('#card6');
        userInput6.addClass('present');
    }
    
    }
    
    time6()

var futureTime7 = 15
function time7() {

    if (futureTime7 > hour) {
        var userInput7 = $('#card7');
        userInput7.addClass('future');
    }
        
    else if (futureTime7 < hour) {
        var userInput7 = $('#card7');
        userInput7.addClass('past');
    }
        
    else if (futureTime7 == hour) {
        var userInput7 = $('#card7');
        userInput7.addClass('present');
    }
        
    }
        
    time7()

var futureTime8 = 16
function time8() {
    
    if (futureTime8 > hour) {
        var userInput8 = $('#card8');
        userInput8.addClass('future');
    }
            
    else if (futureTime8 < hour) {
        var userInput8 = $('#card8');
        userInput8.addClass('past');
    }
            
    else if (futureTime8 == hour) {
        var userInput8 = $('#card8');
        userInput8.addClass('present');
    }
            
    }
            
    time8()

var futureTime9 = 17
function time9() {
    
    if (futureTime9 > hour) {
        var userInput9 = $('#card9');
        userInput9.addClass('future');
    }
            
    else if (futureTime9 < hour) {
        var userInput9 = $('#card9');
        userInput9.addClass('past');
    }
            
    else if (futureTime9 == hour) {
        var userInput9 = $('#card9');
        userInput9.addClass('present');
    }
            
    }

    time9()
