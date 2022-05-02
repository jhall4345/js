/* Jonathan Hall
10/26/2021 */

let groceries = [];
document.getElementById("AddItem").addEventListener("click", newItem)
document.getElementById("DeleteFirst").addEventListener("click", removeFirst)
document.getElementById("DeleteLast").addEventListener("click", removeLast)

function removeFirst() {
    groceries.shift();
    for (i=-1; i<groceries.length; i++) {
        document.getElementById("outputList").innerHTML = "<p> "+groceries+"</p>";
        }
    }

function removeLast() {
    groceries.pop();
    for (i=-1; i<groceries.length; i++) {
        document.getElementById("outputList").innerHTML = "<p> "+groceries+"</p>";
        }
    }

function newItem() {
    userInput = document.getElementById("item").value;
    groceries.push(userInput);
    document.getElementById("item").value = "";

    for (i=-1; i<groceries.length; i++) {
        var list = groceries.join("<p></p>");
    document.getElementById("outputList").innerHTML = list;
    }
}

