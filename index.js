function method1() {
    var selectedNumber = document.getElementById('selected_number').value;

    var i;
    var count = 0;
    var iteration = 0;

    for (i = 2; i <= selectedNumber; i++) {

        if (selectedNumber % i == 0)
            count++;
        iteration++;
    }

    function numFactors(selectedNumber) {

        const result = [];
        for (var j = 2; j <= selectedNumber; j++) {
            while (selectedNumber % j === 0) {
                if (!result.includes(j)) result.push(j);
                selectedNumber /= j;
            }
        }
        return result;
    }



    if (count == 1) {
        document.getElementById('result').innerHTML = "<strong>Prime/Composite: </strong> Prime Number" + "<br>";
        document.getElementById('result').innerHTML += "<strong>Number of Iteration: </strong>  " + iteration + "<br>";
        document.getElementById('result').innerHTML += "<strong>Dividers: </strong>  " + numFactors(selectedNumber);
    } else {
        document.getElementById('result').innerHTML = "<strong>Prime/Composite: </strong> Composite Number" + "<br>";
        document.getElementById('result').innerHTML += "<strong>Number of Iteration: </strong>  " + iteration + "<br>";
        document.getElementById('result').innerHTML += "<strong>Dividers: </strong>  " + numFactors(selectedNumber);
    }


}