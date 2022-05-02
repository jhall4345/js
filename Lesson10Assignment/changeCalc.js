/* Jonathan Hall
11/3/2021 */

function calculateChange () {
    var total = parseInt(document.getElementById("total").value);
    var quarters = Math.floor(total/25);
    remainder = total % 25;
    var dimes = Math.floor(remainder/10);
    remainder = remainder % 10;
    var nickels = Math.floor(remainder/5);
    remainder = remainder % 5;
    var pennies = remainder;

    if (total>= 0) {
        document.getElementById("quarters").value = quarters;
        document.getElementById("dimes").value = dimes;
        document.getElementById("nickels").value = nickels;
        document.getElementById("pennies").value = pennies;
    }
        else {
            alert("Invalid input. Enter a number");
        }
    }

var calcButton = document.getElementById("calculate");
calcButton.addEventListener("click", calculateChange);
