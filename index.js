//Scott Kopczynski
/*
Char Swap - Write a JavaScript function to create a new string from an input string from
the user swapping the position of first and last characters. The string length entered by
the user must be greater than or equal to 1.
*/
function questionOne(){
    let input = prompt("Please input a string");
    if(input == null){
        alert("You pressed cancel");
    }
    else if(input.length < 1){
        alert("The string you entered has a length of less than 1");
    }
    else if(input.length == 1){
        alert(input);
    }
    else{
        let start = input[input.length - 1];
        let end = input[0];
        let middle = input.slice(1, input.length - 1);
        let newString = start + middle + end;
        alert(newString);
    }
}
/*
Hi String - Write a JavaScript function that asks for a string from the user and returns a
new string adding "Hi" in front of the input string. If the input string begins with "Hi" then
return the original string. The string length entered by the user must be greater than or
equal to 1.
*/
function questionTwo(){
    let input = prompt("Please input a string");
    if(input == null){
        alert("You pressed cancel");
    }
    else if(input.length < 1){
        alert("The string you entered has a length of less than 1");
    }
    else if(input == "Hi"){
        alert(input);
    }
    else{
        let newString = "Hi" + " " + input;
        alert(newString);
    }
}
/*
Three Chars to Front - Write a JavaScript function to create a new string from an input
string taking the last 3 characters and adding them to the front of the string. The string
length entered by the user must be at least 3 characters long.
*/
function questionThree(){
    let input = prompt("Please input a string");
    if(input == null){
        alert("You pressed cancel");
    }
    else if(input.length < 3){
        alert("The string you inputted had a length of less than 3.");
    }
    else if(input.length == 3){
        alert(input);
    }
    else{
        
        let start = input.slice(input.length - 3,input.length)
        let end = input.slice(0, input.length - 3);
        let newString = start + end;
        alert(newString);
    }
}
/*
Strings to Sentence - Write a JavaScript function that asks for a list of items from the
user separated by commas. Convert this to an array without the commas or extra
spaces. Alert the items back to the user with a single saying that is formed using
backticks (``).
Example:
input from user: blue, dogs, chocolate
output from function: My favorite color is blue, dogs are awesome, and I love chocolate!
*/
function questionFour(){
    let input = prompt("Please input three strings seperated by commas.");
    if(input == null){
        alert("You pressed cancel.");
    }
    else{
        if(input.length >= 1){
            let inputArr = input.split(",");
            var i;
            for(i = 0; i < inputArr.length; i++){
                inputArr[i] = inputArr[i].trim();
            }
            if(inputArr.length != 3){
                alert("You didn't input the right number of strings");
            }
            else{
                alert(inputArr[0] + "," + inputArr[1] + "," + inputArr[2] + "\n" +
                "My favorite color is " +  inputArr[0] + " , " + inputArr[1] + " are awesome, and I love " +  inputArr[2] + "!")
            }
        }
        else{
            alert("You didn't type anything.")
        }
    }
}
/*
Upper or Lower - Write a JavaScript function that asks for a string from the user and
creates a new string from that string where the first 3 characters are lowercase. If the
string length entered by the user is less than 3 convert all the characters in upper case.
*/
function questionFive(){
    let input = prompt("Please input a string");
    if(input == null){
        alert("You pressed cancel.");
    }
    else if(input.length < 3 && input.length >= 1){
        let newString = input.toUpperCase();
        alert(newString);
    }
    else{
        let start = input.slice(0, 3);
        let end = input.slice(3, input.length);
        let lowerStart = start.toLowerCase();
        let newString = lowerStart + end;
        alert(newString);
    }
}
/*
Integer Swap - Write a JavaScript function that asks for a comma separated list of
numbers from the user and swap the first and last elements of a given array of integers.
Alert the result to the user. The array length given from the user should be at least 1.
*/
function questionSix(){
    let input = prompt("Please input a comma seperated list of numbers");
    let inputArr = input.split(",");
    var i;
    if (input.length >= 1){
        for(i = 0; i < inputArr.length; i++){
            if(!Number.isInteger(parseInt(inputArr[i]))){
                alert("Please enter numbers.");
                return;
            }
            else{
                inputArr[i] = parseInt(inputArr[i]);
            }
        }
        let tmp = inputArr[0];
        inputArr[0] = inputArr[inputArr.length - 1];
        inputArr[inputArr.length - 1] = tmp;
        var j;
        var resultString = "[";
        for(j = 0; j < inputArr.length; j++){
            if(j != inputArr.length - 1){
                resultString = resultString + inputArr[j].toString() + ",";
            }
            else{
                resultString = resultString + inputArr[j].toString();
            }
        }
        resultString = resultString + "]";
        alert(resultString);
    }
    else{
        alert("You didn't type anything in.")
    }
    
}
/*
Longest String - Write a JavaScript function that asks for a comma separated list of
strings from the user and alerts the longest string from the given array of strings.
*/
function questionSeven(){
    let input = prompt("Please input a comma seperated list of strings");
    if(input == null){
        alert("You pressed cancel.")
        return;
    }
    let inputArr = input.split(",");
    var i;
    var maxLength = 0;
    var maxIndex = 0;
    if(input == null){
        alert("You pressed cancel.")
    }
    if(input.length < 1){
        alert("You didn't enter anything");
    }
    else{
        maxLength = inputArr[0].length;
        for(i = 1; i < inputArr.length; i++){
            if(inputArr[i].length > maxLength){
                maxLength = inputArr[i].length;
                maxIndex = i;
            }
        }
        alert(inputArr[maxIndex]);
    }
}
/*
 Largest Even Number - Write a JavaScript function that asks for a comma separated list
of numbers from the user. Convert this list to an array of numbers and alert the largest
even number from the array of integers.
*/
function questionEight(){
    let input = prompt("Please input a comma seperated list of numbers");
    if(input == null){
        alert("You pressed cancel.")
        return;
    }
    let inputArr = input.split(",");
    
    if(input == null){
        alert("You pressed cancel.")
    }
    if(input.length < 1){
        alert("You didn't enter anything");
    }
    else{
        var i;
        var maxIndex = null;
        for(i = 0; i < inputArr.length; i++){
            if(!Number.isInteger(parseInt(inputArr[i]))){
                alert("You didn't enter numbers");
                return;
            }
            else{
                inputArr[i] = parseInt(inputArr[i]);
            }
        }
        var j;
        for(j=0; j<inputArr.length; j++){
            if(inputArr[j] % 2 == 0 && maxIndex == null){
                maxIndex = j;
            }
            else if(inputArr[j] % 2 == 0){
                if(inputArr[j] > inputArr[maxIndex]){
                    maxIndex = j;
                }
            }
        }
        alert(inputArr[maxIndex]);
    }
}
/*
Current Day Time - Write a JavaScript function that alerts the current day and time in the
following format:
Example:
Today is Friday.
It is 4:00PM.
*/
function questionNine(){
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour;
    if (hour===0 && prepand===' PM ') 
    { 
        if (minute===0 && second===0)
        { 
            hour=12;
            prepand=' Noon';
        } 
        else
        { 
            hour=12;
            prepand=' PM';
        } 
    } 
    if (hour===0 && prepand===' AM ') 
    { 
        if (minute===0 && second===0)
        {    
            hour=12;
            prepand=' Midnight';
        } 
        else
        { 
            hour=12;
            prepand=' AM';
        } 
    } 
    alert("Today is  " + daylist[day] + "." + "\n" + "It is  "+ hour  + " : " + minute + prepand)
}
/*
Unlimited Function - Write a JavaScript function that accepts an unlimited number of
arguments and prints them out in a single string in a single alert.
*/
function questionTen(){
    let str = arguments[0];
    for (var i = 1; i < arguments.length; ++i)
        str = str + arguments[i];
    alert(str);
}
//questionOne();
//questionTwo();
//questionThree();
//questionFour();
questionFive();
//questionSix();
//questionSeven();
//questionEight();
//questionNine();
//questionTen(1, 2, 3,4,"a", "b", "C", "DDDDDDDEGDFGSDGD", 14, 15, 22);