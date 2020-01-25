document.addEventListener("DOMContentLoaded", function(event) {
    let area = document.getElementById("print-area")
    for (number = 1; number <= 100; number++) {
        let printRow = ""
        if (number % 3 === 0) {
            printRow += "Zero"
        }
        if (number % 5 === 0) {
            printRow += "Cool"
        }
        if (printRow === "") {
            printRow = number
        }

        var node = document.createElement("P");
        var textnode = document.createTextNode(printRow);
        node.appendChild(textnode);
        area.appendChild(node);
    }
});