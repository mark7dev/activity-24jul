function confirmEnding(string, letter) {
    var result = false;

    if (string[string.length-1] === letter) {
        result = true;
    }
    console.log(result)
    return result
}

console.log(confirmEnding("Bastian", "n"));
confirmEnding("Bastian", "n"); // true
confirmEnding("Hold on", "o"); // false