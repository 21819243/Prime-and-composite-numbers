// Project Github Link: https://github.com/21819243/Prime-and-composite-numbers
function primalityTest() {
    var selectedNumber = document.getElementById("selected_number").value;
    var limitedValue = Math.floor(
        Math.sqrt(document.getElementById("selected_number").value)
    );
    var i;
    var count = 0;
    var iteration = 0;

    for (i = 2; i <= selectedNumber; i++) {
        if (selectedNumber % i == 0) count++;
        iteration++;
    }

    function numFactors(selectedNumber) {
        const result = [];
        for (var j = 2; j <= selectedNumber; j++) {
            while (selectedNumber % j === 0) {
                if (!result.includes(j)) result.push(j);
                j++;
                // selectedNumber /= j;
            }
        }
        return result;
    }

    function sieveAlgortihmPrime(selectedNumber) {
        var j = 2;
        var nsqrt = Math.floor(Math.sqrt(selectedNumber));
        var iterationS = 0;
        while (j <= nsqrt) {
            if (nsqrt % j == 0) iterationS++;
            j++;
        }
        return iterationS;
    }

    function sieveAlgortihmComposite(selectedNumber) {
        var j = 2;
        var nsqrt = Math.floor(Math.sqrt(selectedNumber));
        var iterationS = 0;
        while (nsqrt < selectedNumber) {
            if (selectedNumber % nsqrt == 0) iterationS++;
            nsqrt++;
        }
        return iterationS;
    }

    if (count == 1) {
        document.getElementById("result").innerHTML =
            "<strong>Prime/Composite: </strong> Prime Number" + "<br>";
        document.getElementById("result").innerHTML +=
            "<strong>Number of Iteration (1.Method): </strong>  " +
            iteration +
            "<br>";
        document.getElementById("result").innerHTML +=
            "<strong>Number of Iteration (2.Method): </strong>  " +
            sieveAlgortihmPrime(selectedNumber) +
            "<br>";
        document.getElementById("result").innerHTML +=
            "<strong>Dividers: </strong>  " + numFactors(selectedNumber);
    } else {
        document.getElementById("result").innerHTML =
            "<strong>Prime/Composite: </strong> Composite Number" + "<br>";
        document.getElementById("result").innerHTML +=
            "<strong>Number of Iteration (1.Method): </strong>  " +
            iteration +
            "<br>";
        document.getElementById("result").innerHTML +=
            "<strong>Number of Iteration (2.Method): </strong>  " +
            sieveAlgortihmComposite(selectedNumber) +
            "<br>";
        document.getElementById("result").innerHTML +=
            "<strong>Dividers: </strong>  " + numFactors(selectedNumber);
    }
}