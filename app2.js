function repeatStringNumTimes(string, number) {
    var result = "";

    if (typeof number === "number" && number > 0) {

       result = string.repeat(number);
        
    } else {
        result = "\"\"";
    }
    console.log(result);
    return result;
}


repeatStringNumTimes("hello", 5); // "hellohellohellohellohello"
repeatStringNumTimes("abc", 3); // "abcabcabc"
repeatStringNumTimes("abc", "2"); // ""
repeatStringNumTimes("mr_robot", -1); // ""
repeatStringNumTimes("friend?", "5"); // ""