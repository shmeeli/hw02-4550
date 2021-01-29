(function() {
    "use strict";
    var displayText = "";
    var val1 = null;
    var val2 = 0;
    var currentArg = 1;
    var operation = null;
    var zero = document.getElementById("zero");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var plusequals = document.getElementById("plusequals");
    var minus = document.getElementById("minus");
    var times = document.getElementById("times");
    var divide = document.getElementById("divide");
    var point = document.getElementById("point");
    var clear = document.getElementById("clear");
    var display = document.getElementById("screen");


    function init() {
        zero.addEventListener("click", zerof);
        one.addEventListener("click", onef);
        two.addEventListener("click", twof);
        three.addEventListener("click", threef);
        four.addEventListener("click", fourf);
        five.addEventListener("click", fivef);
        six.addEventListener("click", sixf);
        seven.addEventListener("click", sevenf);
        eight.addEventListener("click", eightf);
        nine.addEventListener("click", ninef);
        plusequals.addEventListener("click", plusequalsf);
        minus.addEventListener("click", minusf);
        times.addEventListener("click", timesf);
        divide.addEventListener("click", dividef);
        point.addEventListener("click", pointf);
        clear.addEventListener("click", clearf);
        display.innerText = "";
    }

    function append_digit(digit) {
        if (displayText == "0" || displayText == "Undefined"
        || display.innerText == "Undefined"
        || (currentArg == 1 && val1 != null)) {
            displayText = digit;
            val1 = null; 
        } else {
            displayText += digit;
        }
        show();
    }

    function show() {
        if (displayText == "NaN"){
            displayText = "Undefined";
        }
        displayText = (""+displayText).substring(0,16);
        display.innerText = displayText;
    }

    function clearf() {
        val1 = null;
        displayText = "";
        currentArg = 1;
        show();
    }

    function pointf() {
        if (!displayText.includes(".")) {
            if (displayText == "" || displayText == "Undefined") {
                displayText = "0.";
            } else if ((currentArg == 1 && val1 == null) || currentArg == 2){
                displayText += ".";
            }
        }
        show();
    }

    function dividef() {
        if (currentArg == 1) {
            val1 = parseFloat(displayText);
            displayText = "";
            operation = "divide"
            currentArg = 2;
        }
        show();
    }

    function timesf() {
        if (currentArg == 1) {
            val1 = parseFloat(displayText);
            displayText = "";
            operation = "times"
            currentArg = 2;
        }
        show();
    }

    function minusf() {
        if (currentArg == 1 && displayText != "") {

                val1 = parseFloat(displayText);
                displayText = "";
                operation = "minus"
                currentArg = 2;

        } else if (displayText == "") {
            displayText = "-";
        }
        show();
    }

    function plusequalsf() {
        if (currentArg == 1) {
            val1 = parseFloat(displayText);
            displayText = "";
            operation = "plus"
            currentArg = 2;
        } else if (currentArg == 2 && displayText != "") {
            if (operation == "plus") {
                displayText = "" + (val1 + parseFloat(displayText));
            } else if (operation == "minus"){
                displayText = "" + (val1 - parseFloat(displayText));
            } else if (operation == "times"){
                displayText = "" + (val1 * parseFloat(displayText));
            } else if (operation == "divide"){
                if (parseFloat(displayText) != 0) {
                    displayText = "" + (val1 / parseFloat(displayText));
                } else {
                    displayText = "Undefined";
                    currentArg = 1;
                    val1 = null;
                }
            }
            operation = null;
            currentArg = 1;
        }
        show();
    }


    function zerof() {
        if (displayText == "Undefined" || (currentArg == 1 && val1 != null)){
            displayText = "0";
        } else if (displayText != "0") {
            displayText += "0";
        }
        show();
    }
    function onef() {
        append_digit(1);
    }
    function twof() {
        append_digit(2);
    }
    function threef() {
        append_digit(3);
    }
    function fourf() {
        append_digit(4);
    }
    function fivef() {
        append_digit(5);
    }
    function sixf() {
        append_digit(6);
    }
    function sevenf() {
        append_digit(7);
    }
    function eightf() {
        append_digit(8);
    }
    function ninef() {
        append_digit(9);
    }
    window.addEventListener('load', init, false);
})();
